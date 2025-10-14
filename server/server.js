/* global process */
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import 'dotenv/config'

//запускаем приложение express
const app = express();

const PORT = process.env.PORT || 5000;
//позволяет фронту общаться с бэком
app.use(cors());
//учит серевер понимать json
app.use(express.json());
//тестовый ответ от сервера в браузере
app.get("/api/test", (req, resp) => {
  resp.json({ message: "server workicng" });
});



app.post("/api/send-email", async (req, resp) => {
  try {
    // 1. Получаем данные из тела запроса
    const { email, message } = req.body;
    if (!email || !message) {
      return resp.status(400).json({
        success: false,
        message: "Все поля обязательны для заполнения",
      });
    }
    // 3. Создаем транспорт для отправки писем
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });
    // 4. Настраиваем письмо
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `💼 Новое сообщение от ${email}`,
      html:`
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
        // 5. Отправляем письмо
        await transporter.sendMail(mailOptions);
          // 6. Отправляем успешный ответ
          resp.json({
            success:true,
            message:"Сообщение успешно отправлено!Я свяжусь с вами в ближайшие время"
          }) 
  } catch (error) {
    console.error("Ошибка отправки",error);
    resp.status(500).json({
        success:false,
        message:"Произошла ошибка при отправке сообщения"
    })
  }
});

//указываем на каком порте будет работать локальный сервер
app.listen(PORT, () => {
  console.log(`server open in ${PORT}`);
});
