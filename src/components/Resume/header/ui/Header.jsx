import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/ui/navigation-menu";
import { Switch } from "@/shared/ui/switch";
import { useThemeStore } from "@/store/themStore";
import { Link } from "react-router-dom";
import { Routes } from "@/constants/routes";
import { Moon, Sun} from "lucide-react";

import { MobileMenu } from "./MobileMenu";
import { MobileButtonMenu } from "./MobileButtonMenu";

export const Header = () => {
  const { isLightTheme, toggleTheme } = useThemeStore();
  // isMobileMenuOpen - отвечает за открытие/закрытие мобильного меню(изначально скрыто)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  // Отслеживаем скролл для перемещения меню
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${
          isLightTheme ? "bg-white" : "bg-black"
        } h-35 flex items-center sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        {/* Десктопная навигация - скрывается на мобильных */}
        <div className="hidden md:flex w-full">
          <NavigationMenu className="h-20 flex flex-row justify-around items-center w-full max-w-full">
            <NavigationMenuList className="flex flex-1 justify-around items-center h-full">
              <NavigationMenuItem className="flex items-center">
                <Link to={Routes.ABOUT}>
                  <NavigationMenuTrigger
                    className={`${
                      isLightTheme
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    } cursor-pointer`}
                  >
                   <span>About</span>
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex items-center">
                <Link to={Routes.CONTACTS}>
                  <NavigationMenuTrigger
                    className={`${
                      isLightTheme
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    } cursor-pointer`}
                  >
                   <span>Contacts</span>
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex items-center">
                <Link to={Routes.PRODUCTS}>
                  <NavigationMenuTrigger
                    className={`${
                      isLightTheme
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    } cursor-pointer`}
                  >
               <span>Portfolio</span>
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* переключатель темы */}
            <div className="flex flex-col items-center justify-center space-x-2 italic h-full">
              <label
                className="h-35 flex items-center"
                htmlFor="airplane-mode"
              >
                {isLightTheme ? (
                  <Sun className="text-black" />
                ) : (
                  <Moon className="text-white" />
                )}
              </label>
              <Switch
                id="airplane-mode"
                checked={isLightTheme}
                onCheckedChange={toggleTheme}
              />
            </div>
          </NavigationMenu>
        </div>

        {/* Мобильная навигация - скрывается на десктопе */}
 <MobileButtonMenu  setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} isLightTheme={isLightTheme} toggleTheme={toggleTheme}/>
      </div>

      {/* Мобильное меню (выпадающее) */}
     <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} isScrolled={isScrolled} isLightTheme={isLightTheme}/>
    </>
  );
};