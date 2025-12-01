// src/components/HeroSection.jsx
import React from 'react';
import MagnetButton from '../../../components//MagnetButton';
import videoBackground from '../../../assets/videos/Toma-De-La-Costa-Del-Mar.mp4';

const HeroSection = () => {
    // Definición de placeholder para el patrón de fondo (se mantiene)
    const WAVE_PATTERN_PLACEHOLDER = 'https://via.placeholder.com/1500x800/8c1a1a/8c1a1a?text=+';
    
    const handleClick = () => {
        console.log("¡Acción ejecutada!");
    };

    return (
        // CONTENEDOR PRINCIPAL: Usamos min-h-screen para mejor compatibilidad con dispositivos móviles.
        <div className="min-h-screen h-screen w-full relative overflow-hidden"> 
            
            {/* 1. VIDEO DE FONDO (Capa z-0) */}
            <video 
                src={videoBackground} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 h-full w-full object-cover z-0" 
            ></video>

            {/* 2. OVERLAY OSCURO (Capa z-10) */}
            <div className="absolute inset-0 bg-gray-900 opacity-25 z-10"></div>
            
            {/* 3. CONTENIDO PRINCIPAL (Capa z-20) - SOLUCIÓN: Agregamos relative */}
            <div className="text-white font-lato max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 grid grid-cols-1 lg:grid-cols-2 items-center h-full relative"> 
                {/* 🛑 CORRECCIÓN: Eliminamos mt-16 porque el Navbar ya compensa, y quitamos pt-5 y text-2xl/font-bold del h1 */}

                {/* COLUMNA IZQUIERDA: Texto y Botón CTA */}
                <div className="lg:pr-16 text-left">
                    
                    {/* TÍTULO DE IMPACTO */}
                    <h1 className="text-3xl md:text-6xl font-lato font-extrabold leading-tight mb-6 drop-shadow-lg mt-26">
                        Descubre el Mundo Maya como Nunca Antes
                    </h1>
                    
                    {/* DESCRIPCIÓN CLAVE */}
                    <p className="text-xl font-lato font-bold mb-10 max-w-lg drop-shadow">
                      Olvídate de las rutas turísticas. Descubre el Yucatán auténtico de la mano de expertos locales. Tu única tarea será dejarte sorprender.
                    </p>
                    {/* BOTÓN CTA */}
                    <MagnetButton
                        onClick={handleClick}
                        magnetStrength={5} // Menor número = más movimiento
                        magnetPadding={100} // Radio de detección amplio
                        className="bg-red-600 hover:bg-red-700 text-white font-lato font-bold py-4 px-8 text-lg rounded-lg transition duration-300 flex items-center shadow-2xl"
                    >
                        Descubre tu Aventura
                    </MagnetButton>
                    
                </div>
                
                {/* COLUMNA DERECHA: (Vacía) */}
                <div className="hidden lg:block">
                    {/* Usada para mantener la cuadrícula de 50/50 y espacio para el video */}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;