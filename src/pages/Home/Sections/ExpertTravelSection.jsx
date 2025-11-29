// src/components/ExpertTravelSection.jsx
import React from 'react';

import ScrollFloat from '../../../components/ScrollFloat/ScrollFloat';
import EXPERTOS_IMAGE from '../../../assets/images/guia_turista.jpg';

const ExpertTravelSection = () => {
    return (
        // Contenedor principal: Fondo blanco, centrado y con padding vertical
        <div className="bg-white py-20 relative overflow-hidden w-full">
            
            {/* Contenido principal: Contenedor centrado y limitado (max-w-7xl) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                
                {/* Estructura de dos columnas usando Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* 🛑 COLUMNA IZQUIERDA: Rectángulo Vertical Alto con Imagen 🛑 */}
                    <div className="flex justify-center lg:justify-center order-2 lg:order-1"> {/* Usamos justify-end para mover la imagen a la derecha de la columna */}
                        <div className="relative w-80 h-[500px] md:w-96 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                            <img 
                                src={EXPERTOS_IMAGE} 
                                alt="Guías de Turistas Locales con luz dorada" 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Opcional: un pequeño overlay para realzar la imagen, si es necesario */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>
                    </div>
                    
                    {/* COLUMNA DERECHA: Texto Limpio y Elegante (ORDER 1 en pantallas grandes) */}
                    <div className="order-1 lg:order-2">
                        
                        {/* Título y Subrayado (simulado con un div de color amarillo) */}
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 font-lato"> {/* Añadido font-lato */}
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                            >
                                Viaja con Expertos
                            </ScrollFloat>

                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                            >
                                Locales
                            </ScrollFloat>
                        </h2>

                        <p className="text-gray-700 mb-8 max-w-md font-lato text-xl"> {/* Añadido font-lato */}
                            Conocemos los secretos mejor guardados. Te llevamos a experiencias auténticas con guías certificados, transporte privado y la confianza de que todo está cubierto.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ExpertTravelSection;