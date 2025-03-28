import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean;
}

// Estado inicial (padrão: claro)
const initialState: ThemeState = {
  darkMode: true,
};

// Criando o slice
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    TrocaCor: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Exportando a ação
export const { TrocaCor } = themeSlice.actions;

// Exportando o reducer
export default themeSlice.reducer;
