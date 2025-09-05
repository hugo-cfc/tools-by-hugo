import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storeManager } from "./storeManager";

type StateTypes = {
  isDarkMode: boolean;
};

type ActionTypes = {
  setIsDarkMode: (isDarkMode: boolean) => void;
};

export const useThemeStore = create<StateTypes & ActionTypes>()(
  persist(
    (set) => ({
      isDarkMode: true,
      setIsDarkMode: (isDarkMode: boolean) => {
        set((state) => {
          return {
            ...state,
            isDarkMode,
          };
        });
      },
    }),
    {
      name: "themeStore",
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
      }),
    }
  )
);

storeManager.addStore(useThemeStore);
