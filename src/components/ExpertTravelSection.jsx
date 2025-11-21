// src/components/ExpertTravelSection.jsx
import React from 'react';
// Usaremos un icono de avión de react-icons/fi (Asegúrate de tener instalado react-icons)
import { FiSend } from 'react-icons/fi'; 

// Definición de colores para los puntos
const COLORS = {
  yellow: 'bg-yellow-400',
  cyan: 'bg-teal-400',
  blue: 'bg-indigo-600',
  red: 'bg-red-500',
  orange: 'bg-amber-400',
};

// Componente para un solo punto de color
const ColoredDot = ({ color, size = 'w-4 h-4', className = '' }) => (
  <div className={`absolute rounded-full ${color} ${size} ${className}`}></div>
);


const ExpertTravelSection = () => {
    return (
        // Contenedor principal: Fondo blanco, centrado y con padding vertical
        <div className="bg-white py-20 relative overflow-hidden w-full">
            
            {/* Contenido principal: Contenedor centrado y limitado (max-w-7xl) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                
                {/* Estructura de dos columnas usando Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* COLUMNA IZQUIERDA: Diseño Circular y Avión */}
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1 min-h-[400px]">
                        
                        {/* Contenedor del Diseño Circular (posicionamiento relativo) */}
                        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                            
                            {/* Círculos Centrales (Guías punteadas) */}
                            <div className="absolute w-full h-full border-2 border-dashed border-gray-300 opacity-50 rounded-full animate-spin-slow"></div>
                            <div className="absolute w-3/4 h-3/4 border-2 border-dashed border-gray-300 opacity-50 rounded-full animate-spin-slow-reverse"></div>

                            {/* Icono del Avión en el centro */}
                            <FiSend className="absolute text-gray-900 w-12 h-12 rotate-45 z-10" />

                            {/* Puntos de Colores (usando posición absoluta y porcentajes) */}
                            {/* Círculo Exterior */}
                            <ColoredDot color={COLORS.yellow} size="w-6 h-6" className="top-0 left-1/2 transform -translate-x-1/2" />
                            <ColoredDot color={COLORS.blue} size="w-6 h-6" className="top-1/4 right-0 transform translate-x-1/2" />
                            <ColoredDot color={COLORS.cyan} size="w-6 h-6" className="top-1/4 left-0 transform -translate-x-1/2" />
                            <ColoredDot color={COLORS.orange} size="w-6 h-6" className="bottom-0 left-1/4" />
                            
                            {/* Círculo Interior */}
                            <ColoredDot color={COLORS.red} size="w-4 h-4" className="top-1/3 left-1/4" />
                            <ColoredDot color={COLORS.blue} size="w-4 h-4" className="top-1/3 right-1/4" />
                            <ColoredDot color={COLORS.blue} size="w-4 h-4" className="bottom-1/3 left-1/4" />
                            <ColoredDot color={COLORS.cyan} size="w-4 h-4" className="bottom-1/3 right-1/4" />
                        </div>
                    </div>
                    
                    {/* COLUMNA DERECHA: Texto (ORDER 1 en pantallas grandes) */}
                    <div className="order-1 lg:order-2">
                        
                        {/* Título y Subrayado (simulado con un div de color amarillo) */}
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                            Viaja con Expertos 
                            <span className="relative block">
                                Locales
                                {/* Subrayado amarillo/naranja debajo de 'Locales' */}
                                <div className="absolute left-0 bottom-2 w-3/4 h-3 bg-yellow-400 opacity-60 z-0 transform translate-y-1"></div>
                            </span>
                        </h2>

                        <p className="text-gray-700 mb-8 max-w-md">
                            Conocemos los secretos mejor guardados. Te llevamos a experiencias auténticas con guías certificados, transporte privado y la confianza de que todo está cubierto.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ExpertTravelSection;