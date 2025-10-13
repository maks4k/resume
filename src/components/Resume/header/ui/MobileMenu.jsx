import React, { useRef } from "react";
import { Routes } from "@/constants/routes";
import { Link } from "react-router-dom";

export const MobileMenu = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
  isScrolled,
  isLightTheme,
}) => {
  const overlayRef = useRef(null);
  const menuRef = useRef(null);

  // если клик по фону или не по меню то мобильное меню должно закрыватсья
  const handleOverlayClick = (e) => {
    if (
      !menuRef.current.contains(e.target) &&
      e.target === overlayRef.current
    ) {
      setIsMobileMenuOpen(false);
    }
  };
  return (
    isMobileMenuOpen && (
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="fixed inset-0 bg-black/30 z-40"
      >
        <div
          className={`md:hidden fixed top-[90px] left-4 z-50 backdrop-blur-xl transition-all duration-300 ${
            isScrolled ? "top-[70px]" : "top-[90px]"
          } ${
            isLightTheme
              ? "bg-white/80 border border-white/20"
              : "bg-black/80 border border-white/10"
          } rounded-xl shadow-2xl`}
        >
          <div
            ref={menuRef}
            className="flex flex-col p-3 space-y-2 min-w-[120px]"
          >
            <Link
              to={Routes.ABOUT}
              className={`py-3 px-6 rounded-lg transition-all duration-200 text-center whitespace-nowrap ${
                isLightTheme
                  ? "bg-white/60 text-black hover:bg-white/90 hover:shadow-md"
                  : "bg-gray-900/60 text-white hover:bg-gray-900/90 hover:shadow-md"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to={Routes.CONTACTS}
              className={`py-3 px-6 rounded-lg transition-all duration-200 text-center whitespace-nowrap ${
                isLightTheme
                  ? "bg-white/60 text-black hover:bg-white/90 hover:shadow-md"
                  : "bg-gray-900/60 text-white hover:bg-gray-900/90 hover:shadow-md"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacts
            </Link>
            <Link
              to={Routes.PRODUCTS}
              className={`py-3 px-6 rounded-lg transition-all duration-200 text-center whitespace-nowrap ${
                isLightTheme
                  ? "bg-white/60 text-black hover:bg-white/90 hover:shadow-md"
                  : "bg-gray-900/60 text-white hover:bg-gray-900/90 hover:shadow-md"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    )
  );
};
