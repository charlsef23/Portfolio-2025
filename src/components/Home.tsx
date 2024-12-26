// src/components/Home.tsx
import React from 'react';
import Hero from './Hero';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <p>Explore my work and projects below.</p>
    </div>
  );
};

export default Home;