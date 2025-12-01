// src/components/CustomPlansSection.jsx
import React from 'react';
import Stack from '../../../components/Stack/Stack'
import ScrollFloat from '../../../components/ScrollFloat/ScrollFloat';
import MagnetButton from '../../../components/MagnetButton';
//imagenes
import JAGUAR_PLACEHOLDER from '../../../assets/images/mascota.png'; 
import CENOTE_IMAGE from '../../../assets/images/lugares/cenote.jpg';
import CHICHENITZA_IMAGE from '../../../assets/images/lugares/chichenItza.jpg';
import IZAMAL_IMAGE from '../../../assets/images/lugares/izamal.jpg';
import PROGRESO_IMAGE from '../../../assets/images/lugares/progreso.jpg';

import BACKGROUND from "../../../assets/images/backgrounds/hojas.svg";
import brochazo from "../../../assets/Vector.svg";


const CustomPlansSection = () => {

    // 1. Defines tus datos (debe tener un ID único)
    const images = [
        { id: 1, img: CENOTE_IMAGE },
        { id: 2, img: CHICHENITZA_IMAGE },
        { id: 3, img: PROGRESO_IMAGE },
        { id: 4, img: IZAMAL_IMAGE },
      ];

      /*Acción del botón */
    const handleClick = () => {
        console.log("¡Acción ejecutada!");
    };

    return (
        // Contenedor principal: Fondo blanco, centrado y con padding vertical
        <div className="bg-white py-20 relative overflow-hidden w-full">
            
            {/* Patrón de líneas grises/blancas sutiles en el fondo 
            <div className="absolute inset-0 w-full h-full opacity-50 z-0 pointer-events-none">
                <img src={BACKGROUND} alt="Background Pattern" className="w-full h-full object-cover" />
            </div>*/}
            
            {/* Contenido principal: Contenedor centrado y limitado (max-w-7xl) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                
                {/* Estructura de dos columnas usando Grid: texto (izq) e imagen (der) */}
                <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
                    
                    {/* COLUMNA IZQUIERDA: Texto y Botón */}
                    <div className="lg:pr-16 order-2 lg:order-1 ">
                        
                        {/* Título y Subrayado (simulado con un div de color amarillo) */}
                        <h2 className="text-3xl md:text-6xl font-lato font-extrabold text-gray-900 leading-tight mb-4">
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            >
                            Planes a tu Medida
                            </ScrollFloat>
                        </h2>

                        <p className="text-gray-700 mb-8 max-w-md font-lato text-xl ">
                            Olvídate de los tours genéricos. Analizamos tus gustos, presupuesto y tiempo. Diseñamos un itinerario único que incluye transporte, hoteles y las mejores actividades.
                        </p>
                        
                        {/* Botón Rojo */}
                        <MagnetButton
                            onClick={handleClick}
                            magnetStrength={5} // Menor número = más movimiento
                            magnetPadding={100} // Radio de detección amplio
                            className="bg-red-600 hover:bg-red-700 text-white font-lato font-bold py-4 px-8 text-lg rounded-lg transition duration-300 flex items-center shadow-2xl"
                        >
                            Elige tu Aventura
                        </MagnetButton>
                    </div>
                    
                    {/* COLUMNA DERECHA: Imagen del Mascota Jaguar */}
                    <div className="flex justify-center lg:justify-center order-1 lg:order-2">
                       {/* 2. Llamas al componente pasando los items */}
                       <Stack
                        randomRotation={true}
                        sensitivity={180}
                        sendToBackOnClick={false}
                        cardDimensions={{ width: 400, height: 400 }}
                        cardsData={images}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CustomPlansSection;