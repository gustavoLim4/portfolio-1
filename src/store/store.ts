import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./slices/contadorSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    contador: contadorReducer, // Adicionamos o reducer do contador
    theme: themeReducer, // Adicionamos o reducer do tema (dark mode)
  },
});

// Tipos do Redux para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
