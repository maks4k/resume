import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { HandCursor } from "./HandCursor";
import { Button } from "@/shared/ui/button";
import { useNavigate } from "react-router-dom";
import { Routes } from "@/constants/routes";

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
const navigate=useNavigate();
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
              left: buttonRect.left + window.scrollX + buttonRect.width / 2 - 10,
              opacity: 3,
            });

            // Визуальный эффект клика по кнопке
            setTimeout(() => {
              button.classList.add("active");
              setTimeout(() => button.classList.remove("active"), 200);
              navigate(Routes.ABOUT)

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
    <div className="relative flex flex-col items-center justify-center h-screen select-none">
      <h1 className="text-5xl font-inter mb-10 text-center">
        <span className="text-blue-700">П</span>
        <span className="text-red-600">о</span>
        <span className="text-yellow-400">и</span>
        <span className="text-blue-600">с</span>
        <span className="text-green-700">к</span>
      </h1>

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
  );
};