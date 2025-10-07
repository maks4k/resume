
import React from "react";
import { useThemeStore } from "@/store/themStore";

export const About = () => {


  const { isLightTheme} = useThemeStore();
  return (
    <main
    className={` min-h-screen flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ${
      isLightTheme ? "bg-white text-black" : "bg-black text-white"
    }`}
    >
      {/* Frontend карточка */}
      <section
        className={`p-6 rounded-lg border-2 ${
          isLightTheme ? "border-black bg-gray-50" : "border-white bg-gray-900"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            isLightTheme ? "text-black" : "text-white"
          }`}
        >
          Frontend Development
        </h3>
        <div className="space-y-2">
          <div
            className={`flex items-center ${
              isLightTheme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            HTML5 (Семантическая верстка)
          </div>
          <div
            className={`flex items-center ${
              isLightTheme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            CSS3 (БЭМ методология
            Tailwind
            Bootstrap)
          </div>
          <div
            className={`flex items-center ${
              isLightTheme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
            JavaScript ES6+
          </div>
          <div
            className={`flex items-center ${
              isLightTheme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            React + TypeScript
          </div>
        </div>
      </section>

      {/* Backend карточка */}
      <section
        className={`p-6 rounded-lg border-2 ${
          isLightTheme ? "border-black bg-gray-50" : "border-white bg-gray-900"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            isLightTheme ? "text-black" : "text-white"
          }`}
        >
          Backend Development
        </h3>
        <div className="space-y-2">
          <div
            className={`flex items-center ${
              isLightTheme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            Node.js + Express.js
          </div>
          <div
            className={`flex items-center ${
              isLightTheme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
            Prisma ORM
          </div>
          <div
            className={`flex items-center ${
              isLightTheme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
            REST API
          </div>
        </div>
      </section>

      {/* Дополнительные технологии */}
      <section
        className={`p-6 rounded-lg border-2 ${
          isLightTheme ? "border-black bg-gray-50" : "border-white bg-gray-900"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            isLightTheme ? "text-black" : "text-white"
          }`}
        >
          Tools & Other
        </h3>
        <div className="space-y-2">
          <div
            className={`flex items-center ${
              isLightTheme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Docker
          </div>
          <div
            className={`flex items-center ${
              isLightTheme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Telegram Bot API
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section
        className={`p-6 rounded-lg border-2 ${
          isLightTheme ? "border-black bg-gray-50" : "border-white bg-gray-900"
        } md:col-span-2 lg:col-span-3`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            isLightTheme ? "text-black" : "text-white"
          }`}
        >
          Что я могу создать
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className={`text-center p-4 rounded border ${
              isLightTheme ? "border-gray-300" : "border-gray-600"
            }`}
          >
            <h4
              className={`font-semibold mb-2 ${
                isLightTheme ? "text-black" : "text-white"
              }`}
            >
              Лендинги:это одностраничный сайт, созданный для конкретной цели:
              побудить пользователя совершить целевое действие, например, купить
              товар, оставить заявку или подписаться на рассылку
            </h4>
            <p
              className={`text-sm ${isLightTheme ? "text-gray-600" : "text-gray-400"}`}
            >
              Адаптивная верстка по Figma
            </p>
          </div>
          <div
            className={`text-center p-4 rounded border ${
              isLightTheme ? "border-gray-300" : "border-gray-600"
            }`}
          >
            <h4
              className={`font-semibold mb-2 ${
                isLightTheme ? "text-black" : "text-white"
              }`}
            >
              Веб-приложения SPA (Single-Page Application): это веб-приложение,
              которое работает как единая страница без перезагрузки, динамически
              обновляя контент с помощью JavaScript. Вместо полной загрузки
              новой страницы при переходе, SPA подгружает только необходимые
              данные и изменяет содержимое текущей страницы, что делает работу с
              ним быстрой и плавной, как у нативного приложения. Примеры таких
              приложений – "Госуслуги",Gmail, Кинопоиск HD.{" "}
            </h4>
            <p
              className={`text-sm ${isLightTheme ? "text-gray-600" : "text-gray-400"}`}
            >
              SPA на React + TypeScript
            </p>
          </div>
          <div
            className={`text-center p-4 rounded border ${
              isLightTheme ? "border-gray-300" : "border-gray-600"
            }`}
          >
            <h4
              className={`font-semibold mb-2 ${
                isLightTheme ? "text-black" : "text-white"
              }`}
            >
              Сайты-визитки:это небольшой веб-ресурс, как правило, состоящий из
              одной или нескольких страниц, который предоставляет основную
              информацию о компании или частном специалисте. Его главная задача
              – познакомить потенциальных клиентов с деятельностью, услугами,
              контактными данными и портфолио, формируя первичное представление
              и побуждая к дальнейшему общению
            </h4>
            <p
              className={`text-sm ${isLightTheme ? "text-gray-600" : "text-gray-400"}`}
            >
             Адаптивная верстка по Figma.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
