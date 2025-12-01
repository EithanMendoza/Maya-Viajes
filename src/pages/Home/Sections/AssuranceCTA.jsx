// src/components/AssuranceCTA.jsx
import React from 'react';
// Usaremos la imagen del mockup para ilustrar el itinerario digital
import MOCKUP from '../../../assets/images/172shots_so.png'; 
import MagnetButton from '../../../components/MagnetButton'; // Asumiendo que MagnetButton está en la misma carpeta

const AssuranceCTA = () => {
    
    const handleClick = () => {
        console.log("¡Contacto con asesor ejecutado!");
    };

    return (
        // Contenedor principal: Fondo rojo oscuro similar al Hero, padding vertical generoso
        <section className="bg-red-800 text-white py-24 md:py-32 relative overflow-hidden w-full">
            
            {/* Contenido centrado dentro de max-w-7xl */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                
                {/* Estructura de dos columnas: Texto (Izquierda) e Imagen (Derecha) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* COLUMNA IZQUIERDA: Título y Texto de Venta */}
                    <div className="space-y-6 lg:pr-16">
                        
                        {/* Título de Impacto: Usando font-lato y font-extrabold */}
                        <h2 className="text-5xl md:text-6xl font-lato font-extrabold leading-tight drop-shadow-md">
                            Tu tranquilidad, donde estés
                        </h2>
                        
                        {/* Subtexto: Alto contraste y profesional */}
                        <p className="text-xl max-w-lg font-lato text-gray-200">
                            Accede a tu itinerario digital 24/7 desde tu móvil. ¿Dudas o imprevistos? Tienes una línea directa con tu agente de viajes personal por WhatsApp o teléfono durante todo tu recorrido.
                        </p>
                        
                        {/* Botón CTA: Usamos el MagnetButton consistente con el resto del proyecto */}
                        <MagnetButton
                            onClick={handleClick}
                            magnetStrength={5}
                            magnetPadding={100}
                            className="bg-red-600 hover:bg-red-700 text-white font-lato font-bold py-4 px-8 text-lg rounded-lg transition duration-300 flex items-center shadow-2xl"
                        >
                            Contacta un Asesor
                        </MagnetButton>
                    </div>

                    {/* COLUMNA DERECHA: Imagen del Mockup (El itinerario digital) */}
                    <div className='flex justify-center lg:justify-end'>
                        {/* 🛑 CAMBIO CLAVE AQUÍ: Aumentamos el max-w y damos una altura explícita 🛑 */}
                        <div className='relative w-full max-w-xl lg:max-w-2xl h-[450px] lg:h-[550px]'> 
                            {/* Imagen del Mockup (Ajustada y centrada) */}
                            <img 
                                src={MOCKUP} 
                                alt="Mockup de itinerario digital en móvil" 
                                // Usamos w-full h-full para forzar a la imagen a ocupar el espacio del div padre
                                className="w-full h-full bg-white object-contain shadow-2xl rounded-2xl" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssuranceCTA;