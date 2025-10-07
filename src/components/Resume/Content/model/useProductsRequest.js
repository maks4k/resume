import React, { useEffect, useRef, useState } from "react";

export const useProductsRequest = () => {
  const [freelanceData, setFreelanceData] = useState([]);
  const [personalData, setPersonalData] = useState([]);
  const dialogRef = useRef(null);
  const [selectImage, setSelectImage] = useState(null);
  const openImage = (imageSrc) => {
    setSelectImage(imageSrc);
    dialogRef.current?.showModal();
  };

  const closeImage = () => {
    setSelectImage(null);
    dialogRef.current?.close(); // закрывает dialog
  };
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

  return {
    freelanceData,
    personalData,
    selectImage,
    openImage,
    dialogRef,
    closeImage,
  };
};
