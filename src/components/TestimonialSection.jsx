// src/components/TestimonialsSection.jsx
import React from 'react';

// --- Datos de los Testimonios ---
const testimonialsData = [
    {
        quote: "¡El viaje más increíble! La agencia planeó todo, desde el vuelo hasta el guía en Chichén Itzá. No nos preocupamos por nada. ¡Súper recomendado!",
        name: "Pamela Ríos",
        title: "Arquitecta, Mérida Yucatán",
        image: 'https://via.placeholder.com/80/f06292/FFFFFF?text=PR', // Placeholder rosa
        style: 'light' // Estilo claro
    },
    {
        quote: "Me encantó toda la atención que recibí, recomendado",
        name: "Adrián K'oolis Pool",
        title: "Ing. en Software, Nueva York",
        image: 'https://via.placeholder.com/80/42a5f5/FFFFFF?text=AK', // Placeholder azul
        style: 'dark' // Estilo oscuro (destacado)
    },
    {
        quote: "Muy amables y fácil de contactar; siempre atentos a todo el proceso, sin duda mi agencia de viajes favorita.",
        name: "Jack Black",
        title: "Actor, Pakistan",
        image: 'https://via.placeholder.com/80/8d6e63/FFFFFF?text=JB', // Placeholder café
        style: 'dark' // Estilo oscuro
    },
];

// --- Componente Auxiliar: Tarjeta de Testimonio ---
const TestimonialCard = ({ quote, name, title, image, style }) => {
    
    // Clases condicionales basadas en el estilo
    const isDark = style === 'dark';
    const cardClasses = isDark ? 
        'bg-red-800 text-white p-8 rounded-xl shadow-xl' : 
        'bg-white p-8 rounded-xl shadow-xl border border-gray-100';
    const quoteClasses = isDark ? 'text-gray-200' : 'text-gray-700';
    const nameClasses = isDark ? 'text-white' : 'text-gray-900';
    const titleClasses = isDark ? 'text-yellow-400' : 'text-gray-500';

    return (
        <div className={cardClasses}>
            
            {/* Citas (Grandes) */}
            <div className="text-5xl font-serif mb-4 flex">
                <span className={`leading-none ${isDark ? 'text-red-600' : 'text-red-600'}`}>“</span>
                {/* Texto de la Cita */}
                <p className={`text-base italic ml-2 ${quoteClasses}`}>{quote}</p>
                <span className={`leading-none self-end ${isDark ? 'text-red-600' : 'text-red-600'}`}>”</span>
            </div>

            {/* Divisor (Solo en estilo oscuro) */}
            {isDark && <div className="border-t border-red-600 my-4"></div>}
            
            {/* Autor y Perfil */}
            <div className={`flex ${isDark ? 'mt-4' : 'mt-8'} items-center`}>
                <img 
                    src={image} 
                    alt={`Foto de ${name}`} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                    <p className={`font-semibold ${nameClasses}`}>{name}</p>
                    <p className={`text-sm ${titleClasses}`}>{title}</p>
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    return (
        // Contenedor principal: Fondo blanco/claro
        <div className="bg-gray-50 py-20 relative w-full">
            
            {/* Contenido principal: Contenedor centrado y limitado (max-w-7xl) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                
                {/* Encabezado de la Sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Lo que Dicen Nuestros Viajeros
                        {/* Subrayado simulado */}
                        <div className="relative inline-block">
                            <span className="sr-only">Subrayado</span>
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full h-3 bg-yellow-400 opacity-60 z-0 translate-y-1"></div>
                        </div>
                    </h2>
                </div>

                {/* Grid de 3 Testimonios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {testimonialsData.map((data, index) => (
                        <TestimonialCard key={index} {...data} />
                    ))}
                </div>

                {/* Indicadores de Carrusel (Puntos Rojos) */}
                <div className="flex justify-center mt-12 space-x-3">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div> {/* Activo */}
                    <div className="w-3 h-3 bg-red-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-300 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;