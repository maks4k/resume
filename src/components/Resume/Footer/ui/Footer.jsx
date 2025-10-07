import React from 'react'
import { useThemeStore } from '@/store/themStore';
import { useDateNow } from '../model/useDateNow';

export const Footer = () => {
const {currentTime}=useDateNow();
const { isLightTheme} = useThemeStore();
  return (
    <footer className={` py-16 ${isLightTheme ? "bg-white" : "bg-black"}`}>
      <div className="container mx-auto px-4">
        <div className={`text-center text-xs ${isLightTheme ? "text-black" : "text-gray-400"}`}>
          <p>Оптимизация • Скорость • Функциональность</p>
          <p className="mt-1">© {currentTime.getFullYear()} • {currentTime.toLocaleTimeString('ru-RU')}</p>
        </div>
      </div>
      <p className='text-gray-500'> v 1.01</p>
    </footer>
  )
}