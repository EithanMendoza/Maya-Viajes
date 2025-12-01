// src/components/PlanSelectionSection.jsx
import React from 'react';
// Usaremos un icono de checkmark (Asegúrate de tener instalado react-icons)
import { FiCheckCircle } from 'react-icons/fi'; 

// Componente Auxiliar para los ítems de la lista
const FeatureItem = ({ text, isHighlighted = false }) => (
    // La fuente se hereda del padre, pero la clase text-base se queda aquí.
    <div className={`flex items-start mb-3 ${isHighlighted ? 'text-white' : 'text-gray-700'}`}>
        <FiCheckCircle className={`w-5 h-5 shrink-0 mr-2 ${isHighlighted ? 'text-yellow-400' : 'text-red-600'}`} />
        <span className={`${isHighlighted ? 'text-gray-200' : 'text-gray-700'} text-base`}>
            {text}
        </span>
    </div>
);

const PlanSelectionSection = () => {
    return (
        // CONTENEDOR PRINCIPAL: Aplicamos font-lato para que todos los hijos la hereden
        <div className="min-h-screen w-full bg-white py-20 relative font-lato"> 
            
            {/* Contenido principal: Contenedor centrado y limitado (max-w-7xl) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                
                {/* Encabezado de la Sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Elige tu Plan de Viaje Perfecto
                        {/* Subrayado simulado */}
                        <div className="relative inline-block">
                            <span className="sr-only">Subrayado</span>
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full h-3 bg-yellow-400 opacity-60 z-0 translate-y-1"></div>
                        </div>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Tanto si buscas una asesoría inicial, un paquete completo sin estrés o una experiencia de lujo, tenemos el servicio ideal para tu aventura maya.
                    </p>
                </div>

                {/* Grid de 3 Tarjetas de Precios */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    
                    {/* CARD 1: Asesoría Gratuita */}
                    <div className="bg-white p-8 rounded-xl border border-yellow-300 shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Asesoría Gratuita</h3>
                            <p className="text-5xl font-extrabold text-red-600 mb-6">$0</p>
                            <p className="text-gray-500 mb-6">El primer paso perfecto para planear tu viaje</p>
                            
                            <div className="space-y-4">
                                <FeatureItem text="Llamada de 15 min con un experto" />
                                <FeatureItem text="Análisis de tus gustos, fechas y presupuesto" />
                                <FeatureItem text="Propuesta inicial de 2-3 destinos." />
                                <FeatureItem text="Estimación de costo aproximado, sin compromiso." />
                            </div>
                        </div>
                        {/* Botón 1 */}
                        <button className="mt-8 border border-red-600 text-red-600 hover:bg-red-50 py-3 rounded-lg font-semibold transition duration-300">
                            Agendar llamada
                        </button>
                    </div>

                    {/* CARD 2: Paquete Completo (DESTACADA) */}
                    <div className="bg-red-800 text-white p-10 rounded-xl shadow-2xl transform scale-105 transition-transform duration-300 flex flex-col justify-between">
                        <div>
                            <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider block mb-1">Paquete Completo</span>
                            <h3 className="text-4xl font-extrabold mb-1">Costo personalizado</h3>
                            <p className="text-gray-300 mb-6">Tu viaje soñado, de principio a fin. Nosotros nos encargamos de todo.</p>
                            
                            <div className="space-y-4">
                                <FeatureItem text="Todo lo de la Asesoría Gratuita" isHighlighted={true} />
                                <FeatureItem text="Reserva de vuelos y transporte terrestre" isHighlighted={true} />
                                <FeatureItem text="Reserva de hoteles y alojamientos." isHighlighted={true} />
                                <FeatureItem text="Reserva de todos los tours y actividades." isHighlighted={true} />
                                <FeatureItem text="Guía digital con mapas y confirmaciones." isHighlighted={true} />
                                <FeatureItem text="Itinerario detallado y personalizado día por día" isHighlighted={true} />
                            </div>
                        </div>
                        {/* Botón 2 */}
                        <button className="mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition duration-300 shadow-md">
                            Seleccionar
                        </button>
                    </div>

                    {/* CARD 3: Experiencia Para Grupos VIP */}
                    <div className="bg-white p-8 rounded-xl border border-yellow-300 shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Experiencia Para Grupos VIP</h3>
                            <p className="text-4xl font-extrabold text-gray-900 mb-6">Costo personalizado</p>
                            <p className="text-gray-500 mb-6">Para viajeros que buscan lujo, exclusividad o viajan en grupo.</p>
                            
                            <div className="space-y-4">
                                <FeatureItem text="Todo lo del Paquete Completo" />
                                <FeatureItem text="Transporte privado de lujo (SUV o Van)" />
                                <FeatureItem text="Selección de Hoteles Boutique o 5 Estrellas." />
                                <FeatureItem text="Guías privados en todos los sitios arqueológicos." />
                                <FeatureItem text="Acceso a experiencias exclusivas (cenas, ceremonias)." />
                            </div>
                        </div>
                        {/* Botón 3 */}
                        <button className="mt-8 border border-gray-400 text-gray-600 hover:bg-gray-50 py-3 rounded-lg font-semibold transition duration-300">
                            Seleccionar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanSelectionSection;