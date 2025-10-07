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
import { Moon, Sun } from "lucide-react";

export const Header = () => {
  const { isLightTheme, toggleTheme } = useThemeStore();
  return (
    <>
      <div
        className={`${
          isLightTheme ? "bg-white" : "bg-black"
        } h-35 flex items-center  `}
      >
        <NavigationMenu className="h-20 flex flex-row justify-around items-center w-full max-w-full">
          <NavigationMenuList className="flex flex-1 justify-around items-center h-full">
            {" "}
            <NavigationMenuItem className="flex items-center">
              <Link to={Routes.ABOUT}>
                {" "}
                <NavigationMenuTrigger
                  className={`${
                    isLightTheme ? "bg-black text-white" : "bg-white text-black"
                  } cursor-pointer`}
                >
                  <NavigationMenuLink>About</NavigationMenuLink>
                </NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center">
              <Link to={Routes.CONTACTS}>
                <NavigationMenuTrigger
                  className={`${
                    isLightTheme ? "bg-black text-white" : "bg-white text-black"
                  } cursor-pointer`}
                >
                  <NavigationMenuLink>Contacts</NavigationMenuLink>
                </NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center">
              <Link to={Routes.PRODUCTS}>
                <NavigationMenuTrigger
                  className={`${
                    isLightTheme ? "bg-black text-white" : "bg-white text-black"
                  } cursor-pointer`}
                >
                  <NavigationMenuLink>Products</NavigationMenuLink>
                </NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="flex flex-col items-center justify-center space-x-2 italic h-full">
            {" "}
            {/* Добавлен h-full */}
            <label className={`h-35 flex items-center`} htmlFor="airplane-mode">
              {isLightTheme ? (
                <Sun className="text-black " />
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
    </>
  );
};
