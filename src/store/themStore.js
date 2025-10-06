import { create } from "zustand";

export const useThemeStore=create((set)=>({
isLightTheme: false,
 toggleTheme: () => set((state) => ({ 
    isLightTheme: !state.isLightTheme 
  })),
setTheme: (isLight) => set({ isLightTheme: isLight })
}))