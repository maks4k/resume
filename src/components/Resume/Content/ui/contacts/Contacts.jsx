import React from "react";

import { useThemeStore } from "@/store/themStore";
import { ContactsCall } from "./ContactsCall";

export const Contacts = () => {
  const { isLightTheme } = useThemeStore();

  return (
    <div
      className={`min-h-screen py-12 ${isLightTheme ? "bg-white" : "bg-black"}`}
    >
      <div className="container mx-auto px-4">
        <ContactsCall />
        {/* Дополнительная информация */}
        <div
          className={`text-center mt-40 p-6 rounded-2xl ${
            isLightTheme
              ? "bg-blue-50 border border-blue-200"
              : "bg-blue-900 border border-blue-700"
          }`}
        >
          <p className={`${isLightTheme ? "text-blue-800" : "text-blue-200"}`}>
            📧 Предпочитаю общение через Telegram или Email
            <br />⏰ Отвечаю в течение 2-3 часов в рабочее время
          </p>
        </div>
      </div>
    </div>
  );
};
