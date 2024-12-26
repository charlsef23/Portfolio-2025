import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Contact';
import Home from './pages/Home';
import './styles/app.css'; // Asegúrate de que el CSS está configurado correctamente

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="content">
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;