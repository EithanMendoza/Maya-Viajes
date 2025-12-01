// src/components/FinalCTA.jsx
import React from 'react';
import CircularGallery from '../../../components/CircularGallery'; 
import MagnetButton from '../../../components/MagnetButton';

const FinalCTA = () => {

    const handleClick = () => {
        console.log("¡Acción ejecutada!");
    };

    return (
        // Contenedor principal: Fondo rojo oscuro, ancho completo
        <div className="bg-red-800 text-white relative w-full overflow-hidden font-lato">

            {/* 1. TÍTULO Y SUBTÍTULO (Arriba del Carrusel) */}
            <div className="w-full text-center pt-10 z-10 relative">
                
                {/* Título de Impacto */}
                <h2 className="text-5xl md:text-6xl font lato font-extrabold leading-tight drop-shadow-md">
                    Comienza tu Aventura Maya Hoy
                </h2>
                
                {/* Subtexto */}
                <p className="text-xl max-w-2xl mx-auto font lato font-light mt-4 opacity-90">
                    Tu primer paso es gratis. Contáctanos para una asesoría sin compromiso y recibe una cotización personalizada en menos de 24 horas.
                </p>
                
            </div>

            {/* 2. CONTENEDOR DEL CARRUSEL (Elemento Visual Central) */}
            <div className="relative w-full h-[500px] flex items-center justify-center">

                {/* Fondo + CircularGallery (Asegura que la galería sea el fondo del centro) */}
                <div className="absolute inset-0 z-0">
                    <CircularGallery
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.02}
                        style={{ width: '100%', height: '100%', position: 'absolute' }}
                    />
                </div>
            </div>

            {/* 3. BOTÓN CTA (Abajo del Carrusel) */}
            <div className="w-full text-center py-10 z-10 relative px-4 sm:px-6 lg:px-8">
                
                {/* Botón CTA Final (Color institucional) */}
                    <MagnetButton
                        onClick={handleClick}
                        magnetStrength={5} // Menor número = más movimiento
                        magnetPadding={100} // Radio de detección amplio
                        className="bg-red-600 hover:bg-red-700 text-white font-lato font-bold py-4 px-8 text-lg rounded-lg transition duration-300 flex items-center shadow-2xl hover:bg-white hover:text-rojo-secundario"
                    >
                        ¡Cotiza Ahora!
                    </MagnetButton>
            </div>

        </div>
    );
};

export default FinalCTA;