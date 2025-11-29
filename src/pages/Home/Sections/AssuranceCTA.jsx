// src/components/AssuranceCTA.jsx
import React from 'react';

const AssuranceCTA = () => {
    // Placeholder para el patrón de círculos concéntricos de fondo
    // Usamos un color ligeramente más claro que el fondo principal para simular la textura.
    const CIRCLE_PATTERN_PLACEHOLDER = 'https://via.placeholder.com/800x800/963f45/963f45?text=+'; 

    return (
        // Contenedor principal: Fondo rojo oscuro similar al Hero, padding vertical generoso
        <div className="bg-red-800 text-white py-24 md:py-32 relative overflow-hidden w-full">
            
            {/* Patrón de Círculos Concéntricos Sutiles */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-20" 
                // Posicionamiento manual para simular el patrón en la esquina
                style={{ backgroundImage: `url('${CIRCLE_PATTERN_PLACEHOLDER}')`, backgroundPosition: 'left center' }}
            ></div>

            {/* Contenido centrado: max-w-5xl es adecuado para un CTA grande */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative text-center">
                
                {/* Título y Subrayado */}
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    Tu tranquilidad, donde estés
                    {/* Subrayado amarillo/naranja debajo (simulado con un div absoluto) */}
                    <div className="relative inline-block">
                        <span className="sr-only">Subrayado</span>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-3/4 h-3 bg-yellow-400 opacity-60 z-0 translate-y-2"></div>
                    </div>
                </h2>

                {/* Subtexto */}
                <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                    Accede a tu itinerario digital 24/7 desde tu móvil. ¿Dudas o imprevistos? Tienes una línea directa con tu agente de viajes personal por WhatsApp o teléfono durante todo tu recorrido.
                </p>
                
                {/* Botón CTA (Rojo brillante) */}
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 text-lg rounded-lg transition duration-300 flex items-center shadow-lg mx-auto">
                    Contacta un Asesor →
                </button>
            </div>
        </div>
    );
};

export default AssuranceCTA;