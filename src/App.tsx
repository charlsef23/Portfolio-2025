import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/app.css';

// Componentes importados
import Navbar from './components/Navbar';
import Footer from './components/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;