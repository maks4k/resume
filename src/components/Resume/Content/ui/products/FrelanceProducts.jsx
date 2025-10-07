import React from "react";
import { useThemeStore } from "@/store/themStore";
import { Button } from "@/shared/ui/button";

export const FrelanceProducts = ({freelanceData,openImage}) => {
  const { isLightTheme } = useThemeStore();
  return (
    <>
          <h2
            className={`text-center text-2xl font-bold mb-8 py-4 px-6 rounded-2xl shadow-lg ${
              isLightTheme
                ? "bg-white text-gray-800 border border-gray-200 shadow-blue-200"
                : "bg-gray-800 text-amber-100 border border-purple-900 shadow-lg shadow-purple-500/30"
            }`}
          >
            Проекты выполненные на фриланс
          </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
      {freelanceData.map((item) => (
        <div
          key={item.id}
          className={`p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg flex flex-col h-full min-h-[500px]  ${
            isLightTheme
              ? "border-gray-200 bg-white hover:border-gray-300"
              : "border-gray-700 bg-gray-800 hover:border-gray-600"
          }`}
        >
          <h2
            className={`text-xl font-bold mb-4 ${
              isLightTheme ? "text-gray-800" : "text-white"
            }`}
          >
            {item.title}
          </h2>
          <div className="mb-4 flex-shrink-0">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-contain rounded-md mb-4 cursor-pointer"
              onClick={() => openImage(item.img)}
            />
          </div>
          <div className="mb-4 flex-grow">
            <p
              className={`text-sm leading-relaxed ${
                isLightTheme ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Описание:
              {item.description}
            </p>
          </div>
          {item.site && (
            <div className="pt-4 border-t border-gray-200 mt-auto">
              <Button
                className="bg-gray-900 w-full"
                variant="link"
                size="lg"
                asChild
              >
                <a
                  href={item.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center font-medium transition-colors ${
                    isLightTheme
                      ? "text-white hover:text-gray-500"
                      : "text-white hover:text-blue-300"
                  }`}
                >
                  Посмотреть проект
                </a>
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};
