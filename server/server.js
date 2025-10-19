/* global process */
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

// Для ES modules - ДОБАВЛЯЕМ ЭТО
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//запускаем приложение express
const app = express();

const PORT = process.env.PORT || 5000;
//позволяет фронту общаться с бэком
//позволяет фронту общаться с бэком
app.use(
  cors({
    origin: function (origin, callback) {
      // Список разрешенных доменов
      const allowedOrigins = [
        "http://localhost:5173", // Локальный Vite
        "https://resume-sooty-seven-86.vercel.app", // Продакшен фронт
      ];

      // Разрешаем запросы без origin (например, из мобильных приложений)
      if (!origin) return callback(null, true);

      // Проверяем есть ли origin в списке разрешенных
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
//учит серевер понимать json
app.use(express.json());
// обслуживание статических файлов
app.use(express.static(path.join(__dirname, "..", "dist")));

// 1




// Транспорт для отправки писем
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true для 465, false для других портов
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};
// Валидация email на сервере(помимо реакт-хукформы)
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sendToTelegramm = async (email, messageText) => {
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

  return null; // null означает, что ошибок нет
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

    // Функция для отправки email с таймаутом
    const sendEmailWithTimeout = async () => {
      try {
        // Проверка переменных окружения
        if (
          !process.env.GMAIL_USER ||
          !process.env.GMAIL_APP_PASS ||
          !process.env.RECEIVER_EMAIL
        ) {
          console.error("❌ Отсутствуют переменные окружения для email:");
          console.error("GMAIL_USER:", !!process.env.GMAIL_USER);
          console.error("GMAIL_APP_PASS:", !!process.env.GMAIL_APP_PASS);
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
          from: process.env.GMAIL_USER,
          to: process.env.RECEIVER_EMAIL,
          replyTo: email,
          subject: `💼 Новое сообщение от ${email}`,
          html: `
            <!-- твой HTML код -->
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Email отправлен успешно");
        return true;
      } catch (error) {
        console.log("❌ Ошибка отправки email:", error.message);
        return false;
      }
    }; // ⬅️ ЗАКРЫВАЕМ sendEmailWithTimeout

    // Запускаем обе отправки параллельно
    const [emailSuccess, telegramSuccess] = await Promise.allSettled([
      sendEmailWithTimeout(),
      sendToTelegramm(email, message),
    ]);

    // Логируем результаты
    console.log("📧 Email результат:", emailSuccess.status);
    console.log("🤖 Telegram результат:", telegramSuccess.status);

    // Возвращаем реальный результат
    if (emailSuccess.status === "fulfilled" && emailSuccess.value) {
      resp.json({
        success: true,
        message:
          "Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время",
      });
    } else {
      resp.status(500).json({
        success: false,
        message: "Ошибка при отправке сообщения. Попробуйте еще раз.",
      });
    }
  } catch (error) {
    // ⬅️ ДОБАВЛЯЕМ catch для основного try
    console.error("❌ Общая ошибка:", error);
    resp.status(500).json({
      success: false,
      message: "Произошла ошибка при отправке сообщения",
    });
  }
}); // ⬅️ ЗАКРЫВАЕМ app.post

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    services: {
      email: !!process.env.GMAIL_USER,
      telegram: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_ID),
    },
  });
});

// Указываем на каком порте будет работать локальный сервер
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(
    `📧 Email service: ${
      process.env.GMAIL_USER ? "✅ Configured" : "❌ Not configured"
    }`
  );
  console.log(
    `🤖 Telegram: ${
      process.env.TELEGRAM_BOT_TOKEN ? "✅ Configured" : "❌ Not configured"
    }`
  );
  console.log(`📱 Health check: http://localhost:${PORT}/api/health`);
}); // ⬅️ ЗАКРЫВАЕМ app.listen
