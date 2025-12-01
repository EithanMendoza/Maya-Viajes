// src/components/PartnersSection.jsx
import React from 'react';
import LogoLoop from '../../../components/LogoLoop';
import ADO from '../../../assets/images/marcas/ado.svg'
import XCARET from '../../../assets/images/marcas/xcaret.png'
import AIRBNB from '../../../assets/images/marcas/airbnb.png'
import HOLIDAY from '../../../assets/images/marcas/holiday-inn.png'
import ATY from '../../../assets/images/marcas/ATY.svg'

const PartnersSection = () => {

    const techLogos = [
        { 
          node: <img src={ADO} alt="ADO" className="w-40 h-40 object-contain" />, 
          title: "ADO", 
          href: "https://www.ado.com.mx/" 
        },
        { 
          node: <img src={XCARET} alt="Hotel Xcaret" className="w-40 h-40 object-contain" />, 
          title: "Next.js", 
          href: "https://www.hotelxcaretmexico.com/es/" 
        },
        { 
            node: <img src={AIRBNB} alt="airbnb" className="w-40 h-40 object-contain" />, 
            title: "React", 
            href: "https://www.airbnb.mx/" 
          },
          { 
            // Este era rectangular (w-20 h-10), así que lo pasamos a (w-40 h-20)
            node: <img src={HOLIDAY} alt="Hotel Holiday Inn" className="w-40 h-20 object-contain" />, 
            title: "Next.js", 
            href: "https://www.hotelxcaretmexico.com/es/" 
          },
          { 
            node: <img src={ATY} alt="Agencia de Transporte de Yucatán" className="w-20 h-20 object-contain" />, 
            title: "Next.js", 
            href: "https://transporteyucatan.org.mx/" 
          },
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