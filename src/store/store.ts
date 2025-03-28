import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer, // Adicionamos o reducer do tema (dark mode)
  },
});

// Tipos do Redux para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
