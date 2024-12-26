import React from "react";
import ReactDOM from "react-dom/client";

// Importa los archivos CSS que definen los estilos globales y específicos
import "./styles/globals.css"; // Archivo global con estilos base de TailwindCSS
import "./styles/index.css";   // Archivo opcional para estilos específicos si lo necesitas

// Importa el componente principal de la aplicación
import App from "./App";

// Renderiza el componente principal 'App' dentro del contenedor con id 'root'
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);