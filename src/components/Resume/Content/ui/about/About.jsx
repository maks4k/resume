
import React from "react";
import { useThemeStore } from "@/store/themStore";
import { FrontendCard } from "./FrontendCard";
import { BackendCart } from "./BackendCart";
import { Technology } from "./Technology";
import { Services } from "./Services";

export const About = () => {
  const { isLightTheme} = useThemeStore();
  return (
    <main
    className={` min-h-screen flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ${
      isLightTheme ? "bg-white text-black" : "bg-black text-white"
    }`}
    >
    <FrontendCard/>
   <BackendCart/>
   <Technology/>
   <Services/>
    </main>
  );
};
