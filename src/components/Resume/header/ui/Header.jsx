import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/ui/navigation-menu";
import { Switch } from "@/shared/ui/switch";
import { useState } from "react";

export const Header = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };
  return (
    <>
      <div
        className={`${
          isLightTheme ? "bg-white" : "bg-black"
        } h-35 flex items-center`}
      >
        <NavigationMenu className="h-20 flex flex-row justify-around items-center w-full max-w-full">
          <NavigationMenuList className="flex flex-1 justify-around items-center h-full">
            {" "}
            {/* Добавлен h-full */}
            <NavigationMenuItem className="flex items-center">
              {" "}
              {/* Добавлен flex items-center */}
              <NavigationMenuTrigger className={`${isLightTheme ? "bg-black text-white" : "bg-white text-black"} cursor-pointer`}>
                Products
              </NavigationMenuTrigger>
              {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center">
              <NavigationMenuTrigger
                className={`${
                  isLightTheme ? "bg-black text-white" : "bg-white text-black"
                } cursor-pointer`}
              >
                Contacts
              </NavigationMenuTrigger>
              {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center">
              <NavigationMenuTrigger className={`${isLightTheme ? "bg-black text-white" : "bg-white text-black"} cursor-pointer`}>
                About
              </NavigationMenuTrigger>
              {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="flex flex-col items-center justify-center space-x-2 italic h-full">
            {" "}
            {/* Добавлен h-full */}
            <label
              className={`${
                isLightTheme ? "text-black " : "text-white"
              } h-35 flex items-center`}
              htmlFor="airplane-mode"
            >
              Сменить тему
            </label>
            <Switch
              id="airplane-mode"
              checked={isLightTheme}
              onCheckedChange={toggleTheme}
            />
          </div>
        </NavigationMenu>
      </div>
    </>
  );
};
