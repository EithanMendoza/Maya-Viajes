// src/components/PartnersSection.jsx
import React from 'react';

const PartnersSection = () => {
    // URLs de placeholder para los logos de los socios
    const partnerLogos = [
        'https://via.placeholder.com/150x60/ffffff/333333?text=Tripadvisor',
        'https://via.placeholder.com/150x60/ffffff/FF0000?text=ADO',
        'https://via.placeholder.com/180x60/ffffff/0F3460?text=AeroMexico',
        'https://via.placeholder.com/200x60/ffffff/5A382A?text=SECTUR',
        // Puedes duplicar o añadir más logos para el efecto de marquesina
        'https://via.placeholder.com/150x60/ffffff/333333?text=Tripadvisor',
        'https://via.placeholder.com/150x60/ffffff/FF0000?text=ADO',
        'https://via.placeholder.com/180x60/ffffff/0F3460?text=AeroMexico',
        'https://via.placeholder.com/200x60/ffffff/5A382A?text=SECTUR',
    ];

    return (
        // Contenedor principal: Fondo blanco, centrado y con padding vertical
        <div className="bg-white py-20 relative w-full overflow-hidden">
            
            {/* Contenido principal: Contenedor centrado y limitado (max-w-7xl) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                
                {/* Encabezado de la Sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Conoce a Nuestros Socios
                        {/* Subrayado simulado */}
                        <div className="relative inline-block">
                            <span className="sr-only">Subrayado</span>
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full h-3 bg-yellow-400 opacity-60 z-0 translate-y-1"></div>
                        </div>
                    </h2>
                </div>

                {/* MARQUESINA DE LOGOS */}
                <div className="relative w-full overflow-hidden whitespace-nowrap">
                    {/* El div 'track' es el que se desplaza */}
                    <div className="flex animate-scroll-partners">
                        {partnerLogos.map((logo, index) => (
                            <div key={index} className="shrink-0 mx-8"> {/* mx-8 para espacio entre logos */}
                                <img 
                                    src={logo} 
                                    alt={`Socio ${index + 1}`} 
                                    className="h-16 object-contain" // Altura fija, mantiene proporciones
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersSection;