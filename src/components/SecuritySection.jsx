// src/components/SecuritySection.jsx
import React from 'react';
// Usaremos iconos de React Icons para simular la ilustración (Asegúrate de tener instalado react-icons)
import { FiLock, FiKey, FiShield, FiCreditCard, FiHome } from 'react-icons/fi'; 

// URL de placeholder para la ilustración (simulando un fondo blanco)
const SECURITY_PLACEHOLDER = 'https://via.placeholder.com/550x450/ffffff/ffffff?text=+'; 

// Componente para un nodo de icono en la red de seguridad
const SecurityNode = ({ icon: Icon, color, position, size = 'w-12 h-12' }) => (
    <div className={`absolute flex items-center justify-center p-3 rounded-xl bg-white shadow-lg ${position}`}>
        <Icon className={`w-6 h-6 ${color}`} />
    </div>
);

const SecuritySection = () => {
    // Definimos posiciones y colores para simular el diseño
    const nodeData = [
        { icon: FiKey, color: 'text-blue-500', position: 'top-0 left-1/3' },
        { icon: FiCreditCard, color: 'text-yellow-500', position: 'top-1/4 right-0' },
        { icon: FiLock, color: 'text-blue-500', position: 'bottom-0 right-1/4' },
        { icon: FiShield, color: 'text-yellow-500', position: 'bottom-1/4 left-0' },
    ];

    return (
        // Contenedor principal: Fondo blanco.
        <div className="bg-white py-20 relative overflow-hidden w-full">
            
            {/* Contenido principal: Contenedor centrado y limitado (max-w-7xl) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                
                {/* Estructura de dos columnas usando Grid: Texto (izq) e Ilustración (der) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* COLUMNA IZQUIERDA: Texto y Botón */}
                    <div className="lg:pr-16 order-2 lg:order-1">
                        
                        {/* Título y Subrayado */}
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                            Tu Viaje, 100% 
                            <span className="relative inline-block">
                                Seguro
                                {/* Subrayado amarillo/naranja */}
                                <div className="absolute left-0 bottom-2 w-full h-3 bg-yellow-400 opacity-70 z-0 transform translate-y-1"></div>
                            </span>
                             y Confiable
                        </h2>

                        <p className="text-gray-700 mb-8 max-w-lg">
                            Somos una agencia registrada. Usamos pasarelas de pago encriptadas para tu seguridad financiera, trabajamos solo con guías certificados y ofrecemos seguros de viajero para tu total tranquilidad.
                        </p>
                        
                        {/* Botón Rojo */}
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center shadow-lg">
                            Leer Más →
                        </button>
                    </div>
                    
                    {/* COLUMNA DERECHA: Ilustración de Seguridad */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        
                        {/* Contenedor de la ilustración (w/h fijos para el layout) */}
                        <div className="relative w-[550px] h-[450px] flex items-center justify-center">
                            
                            {/* Centro de la Red (simulando el nodo principal) */}
                            <div className="absolute flex items-center justify-center p-3 rounded-xl border-2 border-blue-500 bg-white shadow-xl">
                                <FiHome className="w-8 h-8 text-blue-500" />
                            </div>
                            
                            {/* Líneas Discontinuas y Nodos Simples (simulación de red) */}
                            <svg className="absolute w-full h-full text-blue-300 opacity-60" viewBox="0 0 550 450" fill="none" stroke="currentColor" strokeDasharray="5, 5">
                                {/* Dibuja líneas básicas simulando la conexión al centro */}
                                <line x1="180" y1="50" x2="275" y2="225" />
                                <line x1="370" y1="120" x2="275" y2="225" />
                                <line x1="370" y1="380" x2="275" y2="225" />
                                <line x1="180" y1="400" x2="275" y2="225" />
                            </svg>

                            {/* Nodos de Iconos */}
                            {nodeData.map((node, index) => (
                                <SecurityNode key={index} {...node} />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SecuritySection;