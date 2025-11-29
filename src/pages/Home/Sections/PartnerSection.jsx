// src/components/PartnersSection.jsx
import React from 'react';
import LogoLoop from '../../../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const PartnersSection = () => {

    const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];
    return (
        // Contenedor principal: Fondo blanco, centrado y con padding vertical
        <div className="bg-white py-20 relative w-full overflow-hidden">
            
            {/* Contenido principal: Contenedor centrado y limitado (max-w-7xl) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                
                {/* Encabezado de la Sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-lato font-extrabold text-gray-900 leading-tight">
                        Conoce a Nuestros Socios       
                    </h2>
                </div>

                {/* MARQUESINA DE LOGOS */}
                
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                {/* Basic horizontal loop */}
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>
        </div>
    );
};

export default PartnersSection;