import React from 'react'
import { useThemeStore } from '@/store/themStore';
import { useDateNow } from '../model/useDateNow';
import { ContactForm } from './ContactForm';

export const Footer = () => {
const {currentTime}=useDateNow();
const { isLightTheme} = useThemeStore();
  return (
    <footer className={` py-16 ${isLightTheme ? "bg-white" : "bg-black"}`}>
      <div className="container mx-auto px-4">
        <div className={`text-center text-xs ${isLightTheme ? "text-black" : "text-white"}`}>
          <p>Оптимизация • Скорость • Функциональность</p>
          <p className="mt-1">© {currentTime.getFullYear()} • {currentTime.toLocaleTimeString('ru-RU')}</p>
        </div>
           <ContactForm/>
      </div>
      <p className='text-gray-500'> v 1.01</p>
   
    </footer>
  )
}