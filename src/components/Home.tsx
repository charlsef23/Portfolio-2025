import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="home bg-gray-50 min-h-screen flex flex-col justify-center items-center text-center py-16">
      {/* Título principal */}
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Bienvenido a mi Portfolio
      </h1>
      
      {/* Descripción */}
      <p className="text-xl text-gray-700 mb-8">
        Soy un desarrollador web apasionado por crear experiencias increíbles. Aquí puedes ver algunos de mis proyectos y más sobre mí.
      </p>
      
      {/* Botón de llamada a la acción */}
      <div className="cta">
        <a
          href="#about"
          className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Conocer más sobre mí
        </a>
      </div>

      {/* Sección con imagen o contenido adicional */}
      <div className="hero-section mt-16">
        <img
          src="https://via.placeholder.com/800x400"  // Puedes cambiar la URL de la imagen aquí
          alt="Imagen destacada"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;