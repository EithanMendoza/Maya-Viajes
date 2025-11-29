// src/components/Footer.jsx
import React from 'react';
// Iconos para redes sociales y idioma
import { FiGlobe, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'; 

// Datos para las columnas de enlaces
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
        // Contenedor principal: Fondo rojo oscuro, ancho completo
        <footer className="bg-red-900 text-white pt-16 relative w-full">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* SECCIÓN SUPERIOR: Logo y Columnas de Navegación */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
                    
                    {/* COLUMNA 1: Logo y Descripción */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center mb-4">
                            {/* Placeholder para Logo de Viajes MAYA */}
                            <div className="w-8 h-8 rounded-full bg-yellow-400 mr-2"></div> 
                            <span className="text-xl font-bold">Viajes MAYA</span>
                        </div>
                        <p className="text-sm text-gray-400 max-w-[250px]">
                            Creamos experiencias de viaje inolvidables y personalizadas al corazón del Mundo Maya.
                        </p>
                    </div>

                    {/* COLUMNAS 2, 3, 4: Enlaces de Navegación */}
                    {footerLinks.map((col, colIndex) => (
                        <div key={colIndex} className="col-span-1">
                            <h4 className="text-lg font-semibold mb-4 text-white">{col.title}</h4>
                            <ul className="space-y-2">
                                {col.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    
                    {/* COLUMNA 5: CTA Final del Footer */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-xl font-bold mb-4">Inicia tu Aventura</h4>
                        <p className="text-sm text-gray-400 mb-6">
                            Dinos qué sueñas con conocer y te enviaremos un plan personalizado sin costo
                        </p>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center shadow-md">
                            Cotizar Ahora →
                        </button>
                    </div>
                </div>

                {/* DIVISOR */}
                <div className="border-t border-red-700 my-8"></div>

                {/* SECCIÓN INFERIOR: Legal y Redes Sociales */}
                <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400">
                    
                    {/* Legal y Links Inferiores */}
                    <div className="flex flex-wrap space-x-4 md:space-x-6 items-center mb-4 md:mb-0">
                        <div className="flex items-center">
                            <FiGlobe className="mr-1" />
                            <span>Español</span>
                        </div>
                        <a href="#" className="hover:text-white">Términos y condiciones</a>
                        <a href="#" className="hover:text-white">Políticas de privacidad</a>
                        <span className="mt-2 md:mt-0">©2025 VIAJES MAYA</span>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-150"><FiFacebook className="w-5 h-5" /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-150"><FiTwitter className="w-5 h-5" /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-150"><FiLinkedin className="w-5 h-5" /></a>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;