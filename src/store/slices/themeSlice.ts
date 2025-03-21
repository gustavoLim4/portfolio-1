import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean;
}

// Estado inicial (padrão: claro)
const initialState: ThemeState = {
  darkMode: false,
};

// Criando o slice
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Exportando a ação
export const { toggleTheme } = themeSlice.actions;

// Exportando o reducer
export default themeSlice.reducer;
