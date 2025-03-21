import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import {
  incrementar,
  decrementar,
  adicionarValor,
  adicionaVezes,
  dividir
} from "./store/slices/contadorSlice";

import { toggleTheme } from "./store/slices/themeSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const contador = useSelector((state: RootState) => state.contador.valor);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } h-dvh`}
    >
      <h1 className="text-3xl font-bold mb-4">Contador: {contador} </h1>
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
          onClick={() => dispatch(adicionarValor(10))}
        >
          Adicionar 10
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch(adicionaVezes())}
        >
        Adicionar x2
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch(dividir())}
        >
        divisão 2
        </button>
      </div>
      <div
        className=""
      >
        <h1 className="text-3xl font-bold mb-5">
          Modo {darkMode ? "Escuro" : "Claro"}
        </h1>
        <button
          className="px-6 py-2 rounded bg-blue-500 text-white hover:scale-110 hover:bg-blue-500/70 "
          onClick={() => dispatch(toggleTheme())}
        >
          Alternar Tema
        </button>
      </div>
    </div>
  );
}

export default App;
