import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Resume } from "./Resume";
// import { Input } from "@/shared/ui/input";

export const HelloAnimation = () => {
  const el = useRef(null);
  const typed = useRef(null);
  location;
  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "Мне нужен красивый сайт :возможно с анимациями ,быстрой загрузкой и отличной оптимизацией!",
      ],
      typeSpeed: 30,
      backSpeed: false,
      showCursor: false,
      //   cursorChar:'→',
      loop: false,
      onComplete: () => {
        window.location.href = <Resume />;
      },
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
  <>
    <div className="flex items-center justify-center h-screen">
      {/* <Input className="w-154 sm:w-184 whitespace-nowrap overflow-x-auto" ref={el} type="text"/> */}
       <span className=" border border-gray-300 rounded-full px-4 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent truncate cursor-text" ref={el} type="text"></span>
    </div>
    </>
  );
};
