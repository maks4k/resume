import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Typed from "typed.js";
import { HandCursor } from "./HandCursor";
import { Button } from "@/shared/ui/button";
import { useNavigate } from "react-router-dom";
import { Routes } from "@/constants/routes";
import { HeadingSearch } from "./HeadingSearch";

export const HelloAnimation = () => {
  const el = useRef(null);
  const typed = useRef(null);
  const buttonRef = useRef(null);
  const cursorRef = useRef(null);
  const [mouseCursorVisible, setMouseCursorVisible] = useState(false);
  const [mouseCursorStyle, setMouseCursorStyle] = useState({
    top: 0,
    left: 0,
    opacity: 0,
  });
  const navigate = useNavigate();
  
  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "Мне нужен красивый сайт :с анимациями ,быстрой загрузкой и отличной оптимизацией!",
      ],
      typeSpeed: 30,
      backSpeed: false,
      showCursor: false,
      cursorChar: "|",
      loop: false,
      onComplete: () => {
        // Показываем кастомный курсор мыши
        setMouseCursorVisible(true);

        const button = buttonRef.current;
        if (button) {
          const buttonRect = button.getBoundingClientRect();

          // Начальная позиция курсора
          setMouseCursorStyle({
            top: buttonRect.top + window.scrollY - 50,
            left: buttonRect.left + window.scrollX - 50,
            opacity: 1,
          });

          // Анимация движения курсора к центру кнопки
          setTimeout(() => {
            setMouseCursorStyle({
              top: buttonRect.top + window.scrollY + buttonRect.height / 2 - 10,
              left:
                buttonRect.left + window.scrollX + buttonRect.width / 2 - 10,
              opacity: 3,
            });

            // Визуальный эффект клика по кнопке
            setTimeout(() => {
              button.classList.add("active");
              setTimeout(() => button.classList.remove("active"), 200);
              navigate(Routes.ABOUT);
            }, 800);
          }, 500);
        }
      },
    });

    return () => {
      typed.current.destroy();
    };
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Веб-разработка Брянск | Создание сайтов на React и Next.js</title>
        <meta name="description" content="Профессиональная веб-разработка в Брянске. Создание современных сайтов и приложений на React и Next.js. Полный цикл разработки. Включая SEO-оптимизацию и развертывание. Сайты-визитки. Лендинги. Создание сайтов с нуля. Разработка сайтов с нуля." />
        <meta name="keywords" content="веб-разработка брянск, создание сайтов брянск, react разработка, node.js программист, seo-оптимизация, развертывание веб-приложения, сайты-визитки, лендинги, создание сайтов с нуля" />
        <link rel="canonical" href="https://sozdat-moshniy-web.ru/" />
        
        {/* Open Graph для главной */}
        <meta property="og:title" content="Веб-разработка Брянск | Создание сайтов" />
        <meta property="og:description" content="Профессиональная веб-разработка в Брянске. Создание сайтов на React и Next.js с SEO и развертыванием. Сайты-визитки. Лендинги. Создание сайтов с нуля." />
        <meta property="og:url" content="https://sozdat-moshniy-web.ru/" />
      </Helmet>
      
      <div className="relative flex flex-col items-center justify-center h-screen select-none">
        <HeadingSearch/>
        {/* span с typed.js включая его встроенный курсор */}
        <span
          ref={el}
          className="font-serif w-96 block text-center border border-gray-300 rounded-full px-6 py-2 shadow-sm"
          style={{
            minHeight: "2rem",
            fontFamily: "sans-serif",
          }}
        />
        <Button
          ref={buttonRef}
          className="mt-10 w-36 text-center border border-gray-300 rounded-full px-6 py-2 shadow-sm transition-transform bg-white text-black"
        >
          Поиск
        </Button>

        {/* Анимация курсора мыши */}
        {mouseCursorVisible && (
          <div
            ref={cursorRef}
            style={{
              position: "absolute",
              top: mouseCursorStyle.top,
              left: mouseCursorStyle.left,
              width: 40,
              height: 40,
              pointerEvents: "none",
              transition: "top 0.8s ease, left 0.8s ease, opacity 0.3s ease",
              opacity: mouseCursorStyle.opacity,
              zIndex: 1000,
            }}
          >
            <HandCursor />
          </div>
        )}
      </div>
    </>
  );
};