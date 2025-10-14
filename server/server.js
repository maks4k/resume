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
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));
//учит серевер понимать json
app.use(express.json());
// обслуживание статических файлов
app.use(express.static(path.join(__dirname, "..", "dist")));

// Транспорт для отправки писем
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
    // Добавляем таймауты
    pool: true,
    maxConnections: 1,
    socketTimeout: 15000, // 15 секунд
    connectionTimeout: 15000,
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
          chat_id : chatId,
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
// Валидация входных данных
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
// app.post("/api/send-email", async (req, resp) => {
//   try {
//     // 1. Получаем данные из тела запроса
//     const { email, message } = req.body;

//     // 2. ДОБАВЛЯЕМ ВАЛИДАЦИЮ
//     const validationError = validateInput(email, message);
//     if (validationError) {
//       return resp.status(400).json({
//         success: false,
//         message: validationError,
//       });
//     }

//     // 3. Создаем транспорт
//     const transporter = createTransporter();
    
//     // 4. ДОБАВЛЯЕМ ПРОВЕРКУ ПЕРЕМЕННЫХ ОКРУЖЕНИЯ
//     if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASS || !process.env.RECEIVER_EMAIL) {
//       console.error("Missing environment variables");
//       return resp.status(500).json({
//         success: false,
//         message: "Серверная ошибка конфигурации",
//       });
//     }

//     // 5. Настраиваем письмо (оставляем без изменений)
//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to: process.env.RECEIVER_EMAIL,
//       replyTo: email,
//       subject: `💼 Новое сообщение от ${email}`,
//       html: `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//       <h2 style="color: #2c3e50; text-align: center;">💼 Новый заказ с сайта</h2>
      
//       <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
//         <h3 style="color: #495057; margin-top: 0;">📧 Контактные данные:</h3>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Дата:</strong> ${new Date().toLocaleString("ru-RU")}</p>
//       </div>
      
//       <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; border-left: 4px solid #3498db;">
//         <h3 style="color: #495057; margin-top: 0;">💬 Сообщение клиента:</h3>
//         <p style="white-space: pre-wrap; line-height: 1.6; background: white; padding: 15px; border-radius: 5px;">${message}</p>
//       </div>
      
//       <div style="margin-top: 25px; padding: 15px; background: #f1f3f4; border-radius: 5px; text-align: center;">
//         <p style="margin: 0; color: #666; font-size: 14px;">
//           📩 <strong>Чтобы ответить клиенту</strong>, просто нажмите "Ответить" в вашем почтовом клиенте
//         </p>
//       </div>
//     </div>
//   `,
//     };

//     // 6. Отправляем письмо
//     await transporter.sendMail(mailOptions);
//     console.log("✅ Email отправлен успешно");

//     // 7. Отправляем уведомление в Telegram
//     try {
//       const telegramSuccess = await sendToTelegramm(email, message);
//       if (telegramSuccess) {
//         console.log('✅ Telegram получил уведомление');
//       } else {
//         console.log('❌ Telegram не получил уведомление, но email отправлен');
//       }
//     } catch (error) {
//       console.log('❌ Ошибка при отправке в Telegram:', error);
//     }

//     // 8. Отправляем успешный ответ
//     resp.json({
//       success: true,
//       message: "Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время",
//     });

//   } catch (error) {
//     console.error("❌ Ошибка отправки email:", error);
//     resp.status(500).json({
//       success: false,
//       message: "Произошла ошибка при отправке сообщения",
//     });
//   }
// });
app.post("/api/send-email", async (req, resp) => {
  try {
    const { email, message } = req.body;

    console.log("📧 Получено сообщение:", { email, message });

    // Функция для отправки email с таймаутом
    const sendEmailWithTimeout = async () => {
      try {
        const transporter = createTransporter();
        
        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: process.env.RECEIVER_EMAIL,
          replyTo: email,
          subject: `💼 Новое сообщение от ${email}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2c3e50; text-align: center;">💼 Новый заказ с сайта</h2>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #495057; margin-top: 0;">📧 Контактные данные:</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Дата:</strong> ${new Date().toLocaleString("ru-RU")}</p>
              </div>
              
              <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; border-left: 4px solid #3498db;">
                <h3 style="color: #495057; margin-top: 0;">💬 Сообщение клиента:</h3>
                <p style="white-space: pre-wrap; line-height: 1.6; background: white; padding: 15px; border-radius: 5px;">${message}</p>
              </div>
              
              <div style="margin-top: 25px; padding: 15px; background: #f1f3f4; border-radius: 5px; text-align: center;">
                <p style="margin: 0; color: #666; font-size: 14px;">
                  📩 <strong>Чтобы ответить клиенту</strong>, просто нажмите "Ответить" в вашем почтовом клиенте
                </p>
              </div>
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
      sendToTelegramm(email, message)
    ]);

    // Логируем результаты
    console.log("📧 Email результат:", emailSuccess.status);
    console.log("🤖 Telegram результат:", telegramSuccess.status);

    // Всегда возвращаем успех клиенту
    resp.json({
      success: true,
      message: "Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время",
    });

  } catch (error) {
    console.error("❌ Общая ошибка:", error);
    // Все равно возвращаем успех, чтобы пользователь не видел ошибку
    resp.json({
      success: true,
      message: "Сообщение получено! Я свяжусь с вами в ближайшее время",
    });
  }
});
// Health check endpoint узнать после подробно!!!
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    services: {
      email: !!process.env.GMAIL_USER,
      telegram: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_ID)
    }
  });
});
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
// });
//указываем на каком порте будет работать локальный сервер
// Указываем на каком порте будет работать локальный сервер
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`📧 Email service: ${process.env.GMAIL_USER ? "✅ Configured" : "❌ Not configured"}`);
  console.log(`🤖 Telegram: ${process.env.TELEGRAM_BOT_TOKEN ? "✅ Configured" : "❌ Not configured"}`);
  console.log(`📱 Health check: http://localhost:${PORT}/api/health`);
});