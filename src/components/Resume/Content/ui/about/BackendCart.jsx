import React from 'react'
import { useThemeStore } from '@/store/themStore';

export const BackendCart = () => {
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

  )
}
