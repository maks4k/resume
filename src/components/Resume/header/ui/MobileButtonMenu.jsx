import React from "react";
import { Button } from "@/shared/ui/button";
import { Menu, X,Moon, Sun } from "lucide-react";
import { Switch } from "@/shared/ui/switch";
export const MobileButtonMenu = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
  isLightTheme,
  toggleTheme,
}) => {
  return (
    <div className="md:hidden flex justify-between items-center w-full px-4">
      {/* Кнопка меню */}
      <Button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`p-2 rounded cursor-pointer ${
          isLightTheme ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* [≡ Меню] → КЛИК → [✕ Закрыть] → КЛИК → [≡ Меню] → ...
                 ↓              ↓              ↓
             false          true           false */}

        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      {/* Переключатель темы */}
      <div className="flex items-center space-x-2">
        <label className="flex items-center" htmlFor="airplane-mode-mobile">
          {isLightTheme ? (
            <Sun className="text-black" />
          ) : (
            <Moon className="text-white" />
          )}
        </label>
        <Switch
          id="airplane-mode-mobile"
          checked={isLightTheme}
          onCheckedChange={toggleTheme}
        />
      </div>
    </div>
  );
};
