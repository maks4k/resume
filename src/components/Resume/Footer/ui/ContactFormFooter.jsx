import React from "react";
import { useThemeStore } from "@/store/themStore";
import { useForm } from "react-hook-form";
import { Loader } from "./Loader";
import { useFormFooter } from "../model/useForm";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { isLightTheme } = useThemeStore();
  const { submitStatus, setSubmitStatus, isLoading, setIsLoading } =
    useFormFooter();
  //функция отправки формы
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const responce = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await responce.json();
      // 4. Проверяем успешность
      if (result.success) {
        setSubmitStatus("success"); // Успех
        reset(); // Очищаем форму
      } else {
        setSubmitStatus("error"); // Ошибка от сервера
      }
    } catch (error) {
      console.error(error, "Ошибка сети");
      setSubmitStatus("errors");
    } finally {
      // 6. Выключаем загрузку в любом случае
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-12 font-serif px-4">
        {/* Блок с textarea */}
        <div className="flex flex-col w-full lg:w-1/2 max-w-2xl">
          {errors.message && (
            <p className="text-red-500 text-sm mb-2">
              {errors.message.message}
            </p>
          )}
          <textarea
            {...register("message", {
              required: "Должно быть минимум 20 символов",
              minLength: {
                value: 20,
                message: "Должно быть минимум 20 символов",
              },
            })}
            placeholder="Опишите каким бы вы хотели видеть свой веб-сайт"
            rows="5"
            className={`p-4 border-2 rounded-lg text-base outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all resize-y min-h-[140px] w-full ${
              isLightTheme
                ? "text-black bg-white border-gray-300 placeholder-gray-400"
                : "text-white bg-gray-800 border-gray-600 placeholder-gray-500"
            }`}
          />
        </div>

        {/* Блок с формой email */}
        <div className="w-full lg:w-80 px-6 py-6 text-center flex items-center justify-center flex-col gap-4 bg-white rounded-2xl shadow-lg">
          <p className="text-lg font-bold text-gray-800 m-0">
            Введите свой email, чтобы я мог с вами связаться
          </p>
          <div className="flex flex-col gap-3 w-full">
            <input
              {...register("email", {
                required: "Email обязателен",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Введите корректный email",
                },
              })}
              placeholder="Ваша почта"
              type="email"
              className="w-full p-3 outline-none bg-white shadow-transparent rounded-xl border border-gray-600 text-black focus:ring-2 focus:ring-gray-400 transition-all"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

            {/* кнопка отправки */}
            <button
              type="submit"
              disabled={isLoading}
              className={`cursor-pointer border-0 text-white py-3 px-4 rounded-xl font-bold transition-opacity w-full ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-900 hover:opacity-80"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader />
                  <span>Отправка...</span>
                </div>
              ) : (
                "📨 Отправить Сообщение"
              )}
            </button>
          </div>
        </div>
      </div>
      {submitStatus === "success" && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          ✅ Сообщение отправлено! Я свяжусь с вами скоро.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50">
          ❌ Ошибка отправки. Попробуйте еще раз.
        </div>
      )}
    </form>
  );
};
