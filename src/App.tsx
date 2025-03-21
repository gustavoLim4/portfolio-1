import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import {
  incrementar,
  decrementar,
  adicionarValor,
} from "./store/slices/contadorSlice";

import { toggleTheme } from "./store/slices/themeSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const contador = useSelector((state: RootState) => state.contador.valor);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Contador: {contador}</h1>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(incrementar())}
        >
          Incrementar
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrementar())}
        >
          Decrementar
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch(adicionarValor(5))}
        >
          Adicionar 5
        </button>
      </div>
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        } p-8 mt-10 mb10 flex flex-col`}
      >
        <h1 className="text-3xl font-bold mb-5">
          Modo {darkMode ? "Escuro" : "Claro"}
        </h1>
        <button
          className="px-6 py-2 rounded bg-blue-500 text-white"
          onClick={() => dispatch(toggleTheme())}
        >
          Alternar Tema
        </button>
      </div>
    </div>
  );
}

export default App;
