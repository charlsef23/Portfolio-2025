import React from 'react';
import 'src/styles/Navbar.css'; // Asegúrate de tener este archivo para estilos personalizados.

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="https://flowbite.com/" className="navbar-logo">
          <img src="https://flowbite.com/docs/images/logo.svg" className="logo-image" alt="Flowbite Logo" />
          <span className="logo-text">Flowbite</span>
        </a>
        <div className="navbar-buttons">
          <button type="button" className="btn-primary">
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="menu-toggle"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="navbar-menu" id="navbar-sticky">
          <ul className="menu-list">
            <li>
              <a href="#" className="menu-item active" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                About
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;