import React, { useEffect, useState } from 'react'
import { useThemeStore } from '@/store/themStore';

export const Footer = () => {
  const [curentTime, setCurentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurentTime(new Date());
    }, 1000);

    // Очистка при размонтировании
    return () => clearInterval(interval);
  }, []);
const { isLightTheme} = useThemeStore();
  return (
    <footer className={` py-16 ${isLightTheme ? "bg-white" : "bg-black"}`}>
      <div className="container mx-auto px-4">
        <div className={`text-center text-xs ${isLightTheme ? "text-black" : "text-gray-400"}`}>
          <p>Оптимизация • Скорость • Функциональность</p>
          <p className="mt-1">© {curentTime.getFullYear()} • {curentTime.toLocaleTimeString('ru-RU')}</p>
        </div>
      </div>
    </footer>
  )
}