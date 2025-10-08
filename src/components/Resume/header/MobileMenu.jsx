import React from 'react'
import { Routes } from '@/constants/routes'
import { Link } from 'react-router-dom'

export const MobileMenu = ({setIsMobileMenuOpen,isMobileMenuOpen,isScrolled,isLightTheme}) => {
  return (
     isMobileMenuOpen && (
        <div 
          className={`md:hidden fixed top-20 left-4 z-50 backdrop-blur-xl transition-all duration-300 ${
            isScrolled ? 'top-16' : 'top-20'
          } ${
            isLightTheme 
              ? "bg-white/80 border border-white/20" 
              : "bg-black/80 border border-white/10"
          } rounded-xl shadow-2xl`}
        >
          <div className="flex flex-col p-3 space-y-2 min-w-[120px]">
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
      )
  )
}
