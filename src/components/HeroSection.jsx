// src/components/HeroSection.jsx
import React from 'react';
// Asegúrate de que esta ruta sea correcta para tu imagen de la viajera.
import heroImage from '../assets/images/heroSection.png';

const HeroSection = () => {
  // URL de placeholder para el patrón de fondo (simulando un SVG/PNG). 
  // Mantenemos el placeholder solo para el fondo de ondas rojas sutiles.
  const WAVE_PATTERN_PLACEHOLDER = 'https://via.placeholder.com/1500x800/8c1a1a/8c1a1a?text=+';

  return (
    // Contenedor principal: w-full para asegurar el 100% de ancho.
    <div className="bg-red-800 text-white min-h-[600px] flex items-center relative overflow-hidden w-full">

      {/* Patrón de Ondas de Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('${WAVE_PATTERN_PLACEHOLDER}')` }}
      ></div>

      {/* Contenido principal (texto e imagen), centrado y con un ancho máximo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

        {/* Columna de Texto y Botón */}
        <div className="lg:pr-16">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            Descubre el Mundo Maya como Nunca Antes
          </h1>
          <p className="text-lg mb-8 max-w-md">
            Creamos planes de viaje a la medida para que tú solo te dediques a disfrutar. De la planeación nos encargamos nosotros.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center">
            Cotiza tu viaje →
          </button>
        </div>

        {/* Columna de Imagen (Rectangular y sin círculos) */}
        <div className="relative justify-self-center lg:justify-self-end flex items-center justify-center">

          <img
            // Usamos la variable importada
            src={heroImage}
            alt="Mujer viajando"
            // Dimensiones fijas rectangulares y esquinas redondeadas
            className="relative z-20 w-[480px] h-[550px] object-cover rounded-lg shadow-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;