import React, { useEffect, useRef, useState } from "react";

export const useProductsRequest = () => {
  const [freelanceData, setFreelanceData] = useState([]);
  const [personalData, setPersonalData] = useState([]);
  const dialogRef = useRef(null);
  const [selectImage, setSelectImage] = useState(null);

  // состояние загрузки для скелетона(добавим задержку через settimouteч что бы не усложнять логику)
  const [loading, setloading] = useState(false);
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
        setloading(true);
        const resp = await fetch("/bd-freelance.json");
        if (!resp.ok) {
          throw new Error(`Ошибка ${resp.status}`);
        }
        const JsonData = await resp.json();
        setFreelanceData(JsonData);
        setTimeout(() => {
          setloading(false);
        }, 500);
      } catch (error) {
        alert("Ошибка загрузки: " + error.message);
        setTimeout(() => {
          setloading(false);
        }, 500);
      }
    };
    loadingFreelance();
  }, []);
  useEffect(() => {
    const loadingPersonal = async () => {
      try {
        setloading(true);
        const resp = await fetch("bd-project.json");
        if (!resp.ok) {
          throw new Error(`Ошибка${resp.status}`);
        }
        const JsonData = await resp.json();
        setPersonalData(JsonData);
        setTimeout(() => {
          setloading(false);
        }, 500);
      } catch (error) {
        setTimeout(() => {
          setloading(false);
        }, 500);
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
    loading,
  };
};
