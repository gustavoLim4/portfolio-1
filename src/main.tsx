import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/redux";
import { App } from "./Router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./index.css";

AOS.init({
  duration: 1200, // duração padrão para todas as animações
  once: false,    // se true, as animações acontecerão apenas uma vez
  mirror: true,   // se true, as animações podem reverter ao rolar para cima
  // ...outras configurações globais que desejar
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
