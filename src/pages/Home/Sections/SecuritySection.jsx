// src/components/SecuritySection.jsx
import React from 'react';
import StickerPeel from '../../../components/StickerPeel';
import ScrollFloat from '../../../components/ScrollFloat/ScrollFloat';
import MagnetButton from '../../../components/MagnetButton';
// URL de placeholder para la ilustración (simulando un fondo blanco)
import BACKGROUND from "../../../assets/images/backgrounds/maleta.png";
import logo from '../../../assets/LOGO_CHIDO.svg';

const SecuritySection = () => {

    /*Acción del botón */
    const handleClick = () => {
        console.log("¡Acción ejecutada!");
    };

    return (
        // Contenedor principal: Fondo blanco.
        <div className="bg-white py-20 relative overflow-hidden w-full">

            {/* BACKGROUND */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <img src={BACKGROUND} alt="Background Pattern" className="w-full h-full object-cover" />
            </div>

            {/* Contenido principal: Contenedor centrado y limitado (max-w-7xl) */}
            <div className="max-w-7xl ml-4 pl-4 sm:pl-6 lg:pl-8 z-10 relative">

                {/* Estructura de dos columnas usando Grid: Texto (izq) e Ilustración (der) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                    {/* COLUMNA IZQUIERDA: Texto y Botón */}
                    <div className="lg:pr-16 order-2 lg:order-1">

                        {/* Título y Subrayado */}
                        <h2 className="text-5xl md:text-6xl font-lato font-extrabold text-gray-900 leading-tight mb-4">
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                            >
                                Tu viaje 100%
                            </ScrollFloat>
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                            >
                                Seguro y
                            </ScrollFloat>
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                            >
                                &nbsp;Confiable
                            </ScrollFloat>
                        </h2>

                        <p className="text-gray-700 mb-10 max-w-md font-lato text-xl">
                            Somos una agencia registrada. Usamos pasarelas de pago encriptadas para tu seguridad financiera, trabajamos solo con guías certificados y ofrecemos seguros de viajero para tu total tranquilidad.
                        </p>

                        {/* Botón Rojo */}
                        <MagnetButton
                            onClick={handleClick}
                            magnetStrength={5} // Menor número = más movimiento
                            magnetPadding={100} // Radio de detección amplio
                            className="bg-red-600 hover:bg-red-700 text-white font-lato font-bold py-4 px-8 text-lg rounded-lg transition duration-300 flex items-center shadow-2xl"
                        >
                            Leer Más
                        </MagnetButton>
                    </div>

                    {/* COLUMNA DERECHA: Ilustración de Seguridad */}
                    <div className="w-full h-full flex items-center justify-center order-1 lg:order-2">
                        <StickerPeel
                            imageSrc={logo}
                            width={400}
                            rotate={10}
                            // Usamos coordenadas más pequeñas para mantenerlo dentro del bound
                            initialPosition={{ x: 50, y: -50 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecuritySection;