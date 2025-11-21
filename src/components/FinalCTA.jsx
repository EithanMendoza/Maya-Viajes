// src/components/FinalCTA.jsx
import React from 'react';

const FinalCTA = () => {
    return (
        // Contenedor principal: Fondo rojo oscuro, centrado y con padding generoso
        <div className="bg-red-800 text-white py-20 md:py-32 relative w-full">
            
            {/* Contenido centrado */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Título */}
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
                    Comienza tu Aventura Maya Hoy
                </h2>

                {/* Subtexto */}
                <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                    Tu primer paso es gratis. Contáctanos para una asesoría sin compromiso y recibe una cotización personalizada en menos de 24 horas.
                </p>
                
                {/* Botón CTA */}
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 text-lg rounded-lg transition duration-300 flex items-center shadow-xl mx-auto">
                    ¡Cotiza mi Viaje Ahora! →
                </button>
            </div>
        </div>
    );
};

export default FinalCTA;