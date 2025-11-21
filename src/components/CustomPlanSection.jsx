// src/components/CustomPlansSection.jsx
import React from 'react';

const CustomPlansSection = () => {
    // URL de placeholder para la mascota/guía Jaguar (con fondo blanco)
    const JAGUAR_PLACEHOLDER = 'https://via.placeholder.com/450x650/ffffff/000000?text=Jaguar+Guia'; 
    
    // Placeholder para el patrón de fondo de líneas grises
    const WAVE_PATTERN_LIGHT = 'https://via.placeholder.com/800x800/f5f5f5/f5f5f5?text=+'; 
    
    return (
        // Contenedor principal: Fondo blanco, centrado y con padding vertical
        <div className="bg-white py-20 relative overflow-hidden w-full">
            
            {/* Patrón de líneas grises/blancas sutiles en el fondo */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-70" 
                style={{ backgroundImage: `url('${WAVE_PATTERN_LIGHT}')` }}
            ></div>

            {/* Contenido principal: Contenedor centrado y limitado (max-w-7xl) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                
                {/* Estructura de dos columnas usando Grid: texto (izq) e imagen (der) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* COLUMNA IZQUIERDA: Texto y Botón */}
                    <div className="lg:pr-16 order-2 lg:order-1">
                        
                        {/* Título y Subrayado (simulado con un div de color amarillo) */}
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                            Planes Hechos a tu
                            <span className="relative block">
                                Medida
                                {/* Subrayado amarillo/naranja debajo de 'Medida' */}
                                <div className="absolute left-0 bottom-2 w-3/4 h-3 bg-yellow-400 opacity-60 z-0 transform translate-y-1"></div>
                            </span>
                        </h2>

                        <p className="text-gray-700 mb-8 max-w-md">
                            Olvídate de los tours genéricos. Analizamos tus gustos, presupuesto y tiempo. Diseñamos un itinerario único que incluye transporte, hoteles y las mejores actividades.
                        </p>
                        
                        {/* Botón Rojo */}
                        <button className="bg-red-800 hover:bg-red-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center shadow-lg">
                            Explorar Servicios →
                        </button>
                    </div>
                    
                    {/* COLUMNA DERECHA: Imagen del Mascota Jaguar */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <img 
                            src={JAGUAR_PLACEHOLDER} 
                            alt="Mascota Jaguar Guía de Viajes" 
                            className="relative z-20 w-full max-w-md h-auto object-cover" 
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CustomPlansSection;