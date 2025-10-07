import React, { useEffect, useState } from 'react'

export const useDateNow = () => {
      const [currentTime, setCurentTime] = useState(new Date());
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurentTime(new Date());
        }, 1000);
    
        // Очистка при размонтировании
        return () => clearInterval(interval);
      }, []);
  return{currentTime} 
   
}
