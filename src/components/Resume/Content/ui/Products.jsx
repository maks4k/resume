import { Button } from "@/shared/ui/button";
import React, { useEffect, useRef, useState } from "react";
import { useThemeStore } from "@/store/themStore";

export const Products = () => {
  const { isLightTheme } = useThemeStore();
  const [freelanceData, setFreelanceData] = useState([]);
  const [personalData, setPersonalData] = useState([]);
  const [selectImage, setSelectImage] = useState(null);
  const dialogRef = useRef(null);
  useEffect(() => {
    const loadingFreelance = async () => {
      try {
        const resp = await fetch("/bd-freelance.json");
        if (!resp.ok) {
          throw new Error(`Ошибка ${resp.status}`);
        }
        const JsonData = await resp.json();
        setFreelanceData(JsonData);
      } catch (error) {
        alert("Ошибка загрузки: " + error.message);
      }
    };
    loadingFreelance();
  }, []);
  useEffect(() => {
    const loadingPersonal = async () => {
      try {
        const resp = await fetch("bd-project.json");
        if (!resp.ok) {
          throw new Error(`Ошибка${resp.status}`);
        }
        const JsonData = await resp.json();
        setPersonalData(JsonData);
      } catch (error) {
        alert("Ошибка загрузки:" + error.message);
      }
    };
    loadingPersonal();
  }, []);

  const openImage = (imageSrc) => {
    setSelectImage(imageSrc);
    dialogRef.current?.showModal();
  };
  const closeImage = () => {
    setSelectImage(null);
    dialogRef.current?.close(); // закрывает dialog
  };

  return (
    <div className={`${isLightTheme ? "bg-white" : "bg-black"}`}>
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

      <div>
        <h2
          className={`text-center text-2xl font-bold mb-8 py-4 px-6 rounded-2xl shadow-lg ${
            isLightTheme
              ? "bg-white text-gray-800 border border-gray-200 shadow-blue-200"
              : "bg-gray-800 text-amber-100 border border-purple-900 shadow-lg shadow-purple-500/30"
          }`}
        >
          Пет-проекты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
          {personalData.map((item) => (
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
                {Array.isArray(item.img) ? (
                  item.img.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${item.name} ${index + 1}`}
                      className="w-full h-48 object-contain rounded-md mb-4 cursor-pointer"
                      onClick={() => openImage(imgSrc)}
                    />
                  ))
                ) : (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-contain rounded-md mb-4 cursor-pointer"
                    onClick={() => openImage(item.img)}
                  />
                )}
              </div>
              <div className="mb-4 flex-grow">
                <p
                  className={`text-sm leading-relaxed ${
                    isLightTheme ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  Технологии:{item.technologies}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    isLightTheme ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  Описание:
                  {item.description}
                </p>
              </div>
              {item.site &&
              item.site !== "Проект пока что не загружен в сеть...." ? (
                <Button
                  className="bg-gray-900 w-full mt-auto"
                  variant="link"
                  size="lg"
                  asChild
                >
                  <a
                    href={item.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center font-medium transition-colors  ${
                      isLightTheme
                        ? "text-white hover:text-gray-500"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {item.site}
                  </a>
                </Button>
              ) : (
                <span className="inline-flex items-center font-medium text-gray-500 opacity-50 justify-center mt-auto">
                  Проект пока что не загружен в сеть....
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="fixed inset-0 z-50 bg-black bg-opacity-90 w-full h-full max-w-none max-h-none border-0"
        onClick={closeImage} // закрывает при клике на фон
      >
        <div className="flex items-center justify-center h-full p-4">
          {selectImage && (
            <img
              src={selectImage}
              alt="Увеличенное изображение"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()} // чтобы не закрывалось при клике на саму картинку
            />
          )}
        </div>
        <button
          onClick={closeImage}
          className="absolute top-4 right-4 text-white text-3xl bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          ×
        </button>
      </dialog>
    </div>
  );
};
