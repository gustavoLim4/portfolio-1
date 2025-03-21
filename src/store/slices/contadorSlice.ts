import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContadorState {
  valor: number;
}

// Estado inicial
const initialState: ContadorState = {
  valor: 0,
};

// Criando o slice
const contadorSlice = createSlice({
  name: "contador",
  initialState,
  reducers: {
    incrementar: (state) => {
      state.valor += 1;
    },
    decrementar: (state) => {
      state.valor -= 1;
    },
    adicionarValor: (state, action: PayloadAction<number>) => {
      state.valor += action.payload;
    },
  },
});

// Exportando as ações
export const { incrementar, decrementar, adicionarValor } = contadorSlice.actions;

// Exportando o reducer
export default contadorSlice.reducer;
