import React from "react";
import { useThemeStore } from "@/store/themStore";
import { MaxIcon } from "@/shared/ui/MaxIcon";
import {
  FaGithub,
  FaTelegram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

export const ContactsCall = () => {
  const { isLightTheme } = useThemeStore();
  const theme = isLightTheme;
  return (
    <>
      <div className="text-center mb-16">
        <h1
          className={`text-4xl font-bold mb-4 ${
            isLightTheme ? "text-black" : "text-white"
          }`}
        >
          Свяжитесь со мной
        </h1>
        <p
          className={`text-lg max-w-2xl mx-auto ${
            isLightTheme ? "text-gray-600" : "text-gray-400"
          }`}
        >
          Ознакомьтесь с моими работами в GitHub и выберите удобный способ связи
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Левая колонка - Информация обо мне */}
        <section
          className={`p-8 rounded-2xl ${
            isLightTheme
              ? "bg-gray-50 border border-gray-200"
              : "bg-gray-900 border border-gray-700"
          }`}
        >
          <h2
            className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
              theme ? "text-black" : "text-white"
            }`}
          >
            <FaUser className="text-blue-500" />
            Обо мне
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  theme ? "bg-blue-100" : "bg-blue-900"
                }`}
              >
                <FaUser className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${
                    theme ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  Имя
                </h3>
                <p className={theme ? "text-gray-600" : "text-gray-400"}>
                  Шкрябин Максим
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  theme ? "bg-green-100" : "bg-green-900"
                }`}
              >
                <FaPhone className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${
                    theme ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  Телефон
                </h3>
                <p className={theme ? "text-gray-600" : "text-gray-400"}>
                  +7 (901) 720-24-59
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  theme ? "bg-red-100" : "bg-red-900"
                }`}
              >
                <FaEnvelope className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${
                    theme ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  Email
                </h3>
                <p className={theme ? "text-gray-600" : "text-gray-400"}>
                  maks4k32rus@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  theme ? "bg-purple-100" : "bg-purple-900"
                }`}
              >
                <FaMapMarkerAlt className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${
                    theme ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  Местоположение
                </h3>
                <p className={theme ? "text-gray-600" : "text-gray-400"}>
                  Российская Федерация, г. Брянск
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Правая колонка - Соцсети и контакты */}
        <section
          className={`p-8 rounded-2xl ${
            isLightTheme
              ? "bg-gray-50 border border-gray-200"
              : "bg-gray-900 border border-gray-700"
          }`}
        >
          <h2
            className={`text-2xl font-bold mb-6 ${
              isLightTheme ? "text-black" : "text-white"
            }`}
          >
            Социальные сети и мессенджеры
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Telegram */}
            <a
              href="https://t.me/heinaken_skywalker"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                isLightTheme
                  ? "bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg"
                  : "bg-gray-800 border border-gray-700 hover:border-blue-400 hover:bg-gray-750"
              }`}
            >
              <div
                className={`p-3 rounded-full ${
                  isLightTheme ? "bg-blue-100" : "bg-blue-900"
                }`}
              >
                <FaTelegram className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${
                    isLightTheme ? "text-gray-800" : "text-white"
                  }`}
                >
                  Telegram
                </h3>
                <p
                  className={`text-sm ${
                    isLightTheme ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  @heinaken_skywalker
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/79017202459"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                isLightTheme
                  ? "bg-white border border-gray-200 hover:border-green-500 hover:shadow-lg"
                  : "bg-gray-800 border border-gray-700 hover:border-green-400 hover:bg-gray-750"
              }`}
            >
              <div
                className={`p-3 rounded-full ${
                  isLightTheme ? "bg-green-100" : "bg-green-900"
                }`}
              >
                <FaWhatsapp className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${
                    isLightTheme ? "text-gray-800" : "text-white"
                  }`}
                >
                  WhatsApp
                </h3>
                <p
                  className={`text-sm ${
                    isLightTheme ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  +7 (901) 720-24-59
                </p>
              </div>
            </a>

            {/* Max */}
            <a
              href="https://max.ru/u/f9LHodD0cOJRN6Q-_04W0kCBDaUeIuTIQXKlIUCwd7c-Dy8ayk2LFb3tp7w"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                isLightTheme
                  ? "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg"
                  : "bg-gray-800 border border-gray-700 hover:border-blue-300 hover:bg-gray-750"
              }`}
            >
              <div
                className={`p-3 rounded-full ${
                  isLightTheme ? "bg-blue-50" : "bg-blue-800"
                }`}
              >
                <MaxIcon className="w-6 h-6" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${
                    isLightTheme ? "text-gray-800" : "text-white"
                  }`}
                >
                  Max
                </h3>
                <p
                  className={`text-sm ${
                    isLightTheme ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Мессенджер
                </p>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/maks4k"
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                isLightTheme
                  ? "bg-white border border-gray-200 hover:border-gray-700 hover:shadow-lg"
                  : "bg-gray-800 border border-gray-700 hover:border-gray-500 hover:bg-gray-750"
              }`}
            >
              <div
                className={`p-3 rounded-full ${
                  isLightTheme ? "bg-gray-100" : "bg-gray-700"
                }`}
              >
                <FaGithub className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${
                    isLightTheme ? "text-gray-800" : "text-white"
                  }`}
                >
                  GitHub
                </h3>
                <p
                  className={`text-sm ${
                    isLightTheme ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Мои проекты
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
