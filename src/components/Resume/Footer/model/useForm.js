import { useEffect, useState } from "react";

export const useFormFooter = () => {
  const [isLoading, setIsLoading] = useState(false); //состояние лоадинга
  const [submitStatus, setSubmitStatus] = useState(""); //состояние отправки формы
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(""); // Очищаем статус через 5 секунд
      }, 3000);

      return () => clearTimeout(timer); // Очищаем таймер при размонтировании
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitStatus]); // Запускается при изменении submitStatus

  return {
    submitStatus,
    setSubmitStatus,
    isLoading,
    setIsLoading,
  };
};
