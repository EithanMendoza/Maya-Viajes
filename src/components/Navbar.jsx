// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FiChevronDown, FiGlobe } from 'react-icons/fi'; 

// Componente individual para el Dropdown (ADAPTADO)
// Ahora recibe: title, items, isActive, onToggle
const DropdownMenu = ({ title, items, isActive, onToggle }) => {

  return (
    <div 
      className="relative"
    >
      <button 
        onClick={() => onToggle(title)} // Llama a la función del padre con su propio título
        className="flex items-center text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition duration-150"
      >
        {title} 
        {/* Usamos isActive en lugar de isOpen */}
        <FiChevronDown className={`ml-1 transition-transform duration-200 ${isActive ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      {/* Menú Desplegable: SOLO se muestra si isActive es true */}
      {isActive && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
          {items.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};


const Navbar = () => {
  // 1. ESTADO COMPARTIDO: Guarda el nombre del dropdown activo.
  // Será 'Experiencias', 'Paquetes' o null.
  const [activeDropdown, setActiveDropdown] = useState(null); 

  // 2. FUNCIÓN DE TOGGLE: Maneja la lógica de abrir uno y cerrar el otro.
  const handleDropdownToggle = (title) => {
    setActiveDropdown(prevTitle => 
      prevTitle === title ? null : title // Si es el mismo, lo cierra (null). Si es diferente, lo abre.
    );
  };

  // --- Definición de datos para los Dropdowns ---
  const experienciasItems = [
    { name: 'Aventura y Naturaleza', link: '/experiencias/aventura' },
    { name: 'Cultura e Historia', link: '/experiencias/cultura' },
    { name: 'Relax y Bienestar', link: '/experiencias/relax' },
  ];

  const paquetesItems = [
    { name: 'Paquetes Premium', link: '/paquetes/premium' },
    { name: 'Ofertas Familiares', link: '/paquetes/familiares' },
    { name: 'Viajes de Grupo', link: '/paquetes/grupo' },
  ];


  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo y Nombre */}
          <div className="shrink-0 flex items-center">
            <FiGlobe className="h-6 w-6 text-red-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">
              <span className="text-red-600">Maya</span> Viajes MAYA
            </span>
          </div>
          
          {/* Enlaces de Navegación con Dropdowns */}
          <div className="hidden md:flex md:space-x-4 lg:space-x-8">
            <a href="#" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">
              Explorar sitios
            </a>

            {/* Dropdown de Experiencias */}
            <DropdownMenu 
              title="Experiencias" 
              items={experienciasItems} 
              isActive={activeDropdown === 'Experiencias'} // Le dice si está activo
              onToggle={handleDropdownToggle} // Le pasa la función de control
            />

            {/* Dropdown de Paquetes */}
            <DropdownMenu 
              title="Paquetes" 
              items={paquetesItems} 
              isActive={activeDropdown === 'Paquetes'} // Le dice si está activo
              onToggle={handleDropdownToggle} // Le pasa la función de control
            />

          </div>
          
          {/* Botones de Acción */}
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
              Iniciar Sesión
            </button>
            <a href="#" className="text-gray-900 hover:text-red-600 text-sm font-medium flex items-center">
              Crear cuenta 
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;