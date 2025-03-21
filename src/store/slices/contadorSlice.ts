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
    adicionaVezes:(state) => {
      state.valor *= 2;
    },
    dividir: (state) => {
      state.valor /= 2
    }
  },
});

// Exportando as ações
export const { incrementar, decrementar, adicionarValor, adicionaVezes , dividir} = contadorSlice.actions;

// Exportando o reducer
export default contadorSlice.reducer;
