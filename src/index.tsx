import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';  // Tu archivo de estilos globales
import './styles/index.css';    // Estilos adicionales si es necesario

import App from './App';  // Asegúrate de que tu componente principal esté correctamente importado

// Renderiza la aplicación en el elemento con id="root"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);