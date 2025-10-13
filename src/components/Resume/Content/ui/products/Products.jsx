import React from "react";
import { useThemeStore } from "@/store/themStore";
import { FrelanceProducts } from "./FrelanceProducts";
import { PetProducts } from "./PetProducts";
import { useProductsRequest } from "../../model/useProductsRequest";
import { ProductsSkeleton } from "../skeletonProducts/ProductsSkeleton";

export const Products = () => {
  const { isLightTheme } = useThemeStore();
  const {
    dialogRef,
    selectImage,
    closeImage,
    personalData,
    freelanceData,
    openImage,
    loading
  } = useProductsRequest();
    if (loading) {
    return <ProductsSkeleton />;
  }
  return (
    <div className={`${isLightTheme ? "bg-white" : "bg-black"}`}>
      <FrelanceProducts freelanceData={freelanceData} openImage={openImage} />
      <PetProducts personalData={personalData} openImage={openImage} />
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
          className="absolute top-4 right-4 text-white text-3xl bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
        >
          ×
        </button>
      </dialog>
    </div>
  );
};
