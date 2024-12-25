import React from 'react';
import './Home.css'; // Archivo CSS específico para la página (opcional)

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Website</h1>
        <p>This is the home page of your amazing React application!</p>
        <button className="home-button">Get Started</button>
      </header>
    </div>
  );
};

export default Home;