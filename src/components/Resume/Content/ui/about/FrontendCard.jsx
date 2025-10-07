import React from 'react'
import { useThemeStore } from '@/store/themStore';

export const FrontendCard = () => {
      const { isLightTheme} = useThemeStore();
  return (
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
  )
}
