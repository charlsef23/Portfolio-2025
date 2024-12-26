module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx,}', // Archivos donde usarás clases de Tailwind
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2', // Agrega colores personalizados
        secondary: '#14171a',
      },
    },
  },
  plugins: [],
};