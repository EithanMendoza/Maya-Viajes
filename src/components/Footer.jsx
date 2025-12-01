import React from 'react';
import logo from '../assets/LOGO_CHIDO_BLANCO-02.svg'
// Iconos
import { FiGlobe, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'; 

const footerLinks = [
    {
        title: "Nuestros Viajes",
        links: ["Nuestros Viajes", "Destinos Populares", "Testimonios"]
    },
    {
        title: "Recursos",
        links: ["Blog de Viajes", "Guías de Destinos", "Preguntas Frecuentes"]
    },
    {
        title: "La Agencia",
        links: ["Sobre Nosotros", "Contacto", "Prensa"]
    },
];

const Footer = () => {
    return (
        // 🛑 CORRECCIÓN 1: Aplicamos 'font-lato' al contenedor principal.
        <footer className="bg-red-900 text-white w-full font-lato">
            
            {/* --- SVG ONDULADO SUPERIOR (Encabezado) --- */}
            {/* 🛑 CORRECCIÓN 2: Eliminamos la clase vacía y nos aseguramos de que no haya padding/margin extra. */}
            <div className="w-full overflow-hidden leading-[0]">
                <svg 
                    className="block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]" 
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    <path 
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                        // 🛑 CORRECCIÓN 3: El relleno debe ser el color de la sección de ARRIBA (bg-red-800)
                        className="fill-red-800" 
                    ></path>
                </svg>
            </div>


            {/* --- CONTENIDO DEL FOOTER --- */}
            {/* Añadimos el padding-top (pt-20) aquí, ya que el SVG es parte del flujo normal. */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                
                {/* SECCIÓN SUPERIOR */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
                    
                    {/* COLUMNA 1: Logo */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <img src={logo} alt="VIAJES MAYA Logo" className="h-40 w-auto mr-3" />
                        </div>
                        <p className="text-sm text-gray-300 max-w-[250px] leading-relaxed">
                            Creamos experiencias de viaje inolvidables y personalizadas al corazón del Mundo Maya.
                        </p>
                    </div>

                    {/* COLUMNAS 2-4: Links */}
                    {footerLinks.map((col, colIndex) => (
                        <div key={colIndex} className="col-span-1">
                            {/* Eliminamos font-playfair de los títulos de columna */}
                            <h4 className="text-lg font-semibold mb-4 text-yellow-400">{col.title}</h4>
                            <ul className="space-y-2">
                                {col.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    
                    {/* COLUMNA 5: CTA */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        {/* Eliminamos font-playfair */}
                        <h4 className="text-xl font-bold mb-4 text-white">Inicia tu Aventura</h4>
                        <p className="text-sm text-gray-300 mb-6">
                            ¿Listo para Uxmal? Te enviamos un plan personalizado hoy mismo.
                        </p>
                        <button className="bg-red-700 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center shadow-lg w-full justify-center lg:w-auto">
                            Cotizar Ahora
                        </button>
                    </div>
                </div>

                {/* DIVISOR */}
                <div className="border-t border-red-800/50 my-8"></div>

                {/* SECCIÓN INFERIOR: Legal y Redes Sociales */}
                <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400 pb-12">
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-4 md:mb-0">
                        <div className="flex items-center text-gray-300">
                            <FiGlobe className="mr-1" size={20} />
                            <span>Español</span>
                        </div>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <span className="opacity-60">©2025 VIAJES MAYA</span>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white hover:scale-110 transition-all"><FiFacebook size={20} /></a>
                        <a href="#" className="hover:text-white hover:scale-110 transition-all"><FiTwitter size={20} /></a>
                        <a href="#" className="hover:text-white hover:scale-110 transition-all"><FiLinkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;