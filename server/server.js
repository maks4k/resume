/* global process */
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

// Для ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        "http://localhost:5173",
        "https://resume-sooty-seven-86.vercel.app", 
        "http://185.119.59.38",
        "http://sozdat-moshniy-web.ru"
      ];
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("🚫 CORS заблокирован для origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "dist")));

// Транспорт для отправки писем (ТОЛЬКО YANDEX)
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.YANDEX_USER,
      pass: process.env.YANDEX_PASS,
    }
  });
};

// Валидация email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sendToTelegram = async (email, messageText) => {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_ID;
    if (!token || !chatId) {
      console.log("❌ Telegram credentials not found");
      return false;
    }
    const text = `
📧 Новое сообщение с сайта
От: ${email}
Сообщение: ${messageText}
Время: ${new Date().toLocaleString("ru-RU")}
    `.trim();
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      }
    );
    const result = await response.json();

    if (result.ok) {
      console.log("✅ Уведомление отправлено в Telegram");
      return true;
    } else {
      console.log("❌ Ошибка Telegram:", result);
      return false;
    }
  } catch (error) {
    console.log("❌ Ошибка подключения к Telegram:", error.message);
    return false;
  }
};

const validateInput = (email, message) => {
  if (!email || !message) {
    return "Все поля обязательны для заполнения";
  }
  if (!isValidEmail(email)) {
    return "Некорректный формат email";
  }
  if (message.length < 5) {
    return "Сообщение должно содержать минимум 5 символов";
  }
  if (message.length > 1000) {
    return "Сообщение слишком длинное (максимум 1000 символов)";
  }
  return null;
};

app.post("/api/send-email", async (req, resp) => {
  try {
    const { email, message } = req.body;
    console.log("📧 Получено сообщение:", { email, message });

    const validationError = validateInput(email, message);
    if (validationError) {
      console.log("❌ Ошибка валидации:", validationError);
      return resp.status(400).json({
        success: false,
        message: validationError,
      });
    }

    // Функция для отправки email
    const sendEmailWithTimeout = async () => {
      try {
        // Проверка переменных окружения (ТОЛЬКО YANDEX)
        if (!process.env.YANDEX_USER || !process.env.YANDEX_PASS || !process.env.RECEIVER_EMAIL) {
          console.error("❌ Отсутствуют переменные окружения для email:");
          console.error("YANDEX_USER:", !!process.env.YANDEX_USER);
          console.error("YANDEX_PASS:", !!process.env.YANDEX_PASS);
          console.error("RECEIVER_EMAIL:", !!process.env.RECEIVER_EMAIL);
          return false;
        }

        // Проверяем что email валидный
        if (!email || !email.includes("@")) {
          console.error("❌ Невалидный email:", email);
          return false;
        }

        const transporter = createTransporter();

        const mailOptions = {
        from: `"Имя вашего сервиса" <${process.env.YANDEX_USER}>`,  
          to: process.env.RECEIVER_EMAIL,
          replyTo: email,
          subject: `💼 Новое сообщение от ${email}`,
          html: `
           <p>письмо с моего сайта</p>
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">Новое сообщение с сайта-резюме</h2>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                <p><strong>От:</strong> ${email}</p>
                <p><strong>Сообщение:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #666; font-size: 12px; margin-top: 20px;">
                Отправлено: ${new Date().toLocaleString('ru-RU')}
              </p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Email отправлен успешно");
        return true;
      } catch (error) {
        console.log("❌ Ошибка отправки email:", error.message);
        return false;
      }
    };

    // Запускаем обе отправки параллельно
    const [emailSuccess, telegramSuccess] = await Promise.allSettled([
      sendEmailWithTimeout(),
      sendToTelegram(email, message),
    ]);

    console.log("📧 Email результат:", emailSuccess.status);
    console.log("🤖 Telegram результат:", telegramSuccess.status);

    if (emailSuccess.status === "fulfilled" && emailSuccess.value) {
      resp.json({
        success: true,
        message: "Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время",
      });
    } else {
      resp.status(500).json({
        success: false,
        message: "Ошибка при отправке сообщения. Попробуйте еще раз.",
      });
    }
  } catch (error) {
    console.error("❌ Общая ошибка:", error);
    resp.status(500).json({
      success: false,
      message: "Произошла ошибка при отправке сообщения",
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    services: {
      email: !!process.env.YANDEX_USER,
      telegram: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_ID),
    },
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(
    `📧 Email service: ${process.env.YANDEX_USER ? "✅ Configured" : "❌ Not configured"}`
  );
  console.log(
    `🤖 Telegram: ${process.env.TELEGRAM_BOT_TOKEN ? "✅ Configured" : "❌ Not configured"}`
  );
  console.log(`📱 Health check: http://localhost:${PORT}/api/health`);
});