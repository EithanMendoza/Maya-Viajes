// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'; // 🛑 Importar useEffect
import { FiChevronDown } from 'react-icons/fi'; 
import logoClaro from '../assets/LOGO_CHIDO_BLANCO-02.svg'; 
import logoOscuro from '../assets/LOGO_CHIDO-02.svg';

// Componente auxiliar para gestionar el estado de los enlaces
const NavLink = ({ text, isScrolled }) => (
    <a 
        href="#" 
        // Colores condicionales: Si hay scroll, texto oscuro sobre fondo blanco; sino, texto blanco sobre fondo transparente.
        className={`px-3 py-2 text-sm font-medium transition duration-300 
            ${isScrolled ? 'text-gray-800 hover:text-red-600' : 'text-white hover:text-yellow-400'}`}
    >
        {text}
    </a>
);

// Componente DropdownMenu (Ajustado para recibir el estado de scroll)
const DropdownMenu = ({ title, items, isActive, onToggle, isScrolled }) => {

    // Los colores del botón siguen el estado de scroll del padre
    const buttonClasses = isScrolled ? 'text-gray-800 hover:text-red-600' : 'text-white hover:text-yellow-400';

    return (
        <div className="relative">
            <button 
                onClick={() => onToggle(title)}
                className={`flex items-center px-3 py-2 text-sm font-medium transition duration-150 ${buttonClasses}`}
            >
                {title} 
                <FiChevronDown className={`ml-1 transition-transform duration-200 ${isActive ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {/* El menú desplegable en sí sigue siendo blanco sobre gris claro (legible en cualquier caso) */}
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
    // 🛑 1. NUEVO ESTADO: Controla si el usuario ha hecho scroll
    const [scrolled, setScrolled] = useState(false);
    
    // 🛑 2. LÓGICA DE SCROLL: Escucha el movimiento de la ventana
    useEffect(() => {
        const handleScroll = () => {
            // Verifica si el desplazamiento vertical es mayor a 100px (un buen punto de activación)
            const isScrolled = window.scrollY > 100;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Función de limpieza: Remueve el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]); // Dependencia para evitar warnings

    // ... (Lógica de estado y datos sin cambios) ...
    const [activeDropdown, setActiveDropdown] = useState(null);
    const handleDropdownToggle = (title) => { setActiveDropdown(prevTitle => prevTitle === title ? null : title); };
    // ... (experienciasItems y paquetesItems) ...

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


    // Clases Condicionales Principales
    const navClasses = scrolled 
        ? 'bg-white shadow-lg py-3' // Colores sólidos y sombra cuando hay scroll
        : 'pt-4 pb-4';            // Transparente y más padding cuando está arriba
    
    // 🛑 LÓGICA DE SELECCIÓN DEL LOGO 🛑
    const logoSrc = scrolled ? logoOscuro : logoClaro;

    // El texto también se invierte
    const textClasses = scrolled ? 'text-gray-900' : 'text-white';

    return (
        // CONTENEDOR PRINCIPAL: Añadimos las clases condicionales a la etiqueta nav
        <nav className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${navClasses}`}> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo y Nombre */}
                    <div className="shrink-0 flex items-center">
                        <img 
                            src={logoSrc} 
                            alt="Logo Viajes MAYA"
                            className='h-25 w-25 mr-2 object-contain transition duration-300'
                            // Opcional: Si el logo es blanco, 'invert' lo hace negro al scrollear
                        />
                        <span className={`text-xl font-bold tracking-widest ${textClasses}`}>
                             VIAJES MAYA
                        </span>
                    </div>
                    
                    {/* Enlaces de Navegación con Dropdowns */}
                    <div className="hidden md:flex md:space-x-4 lg:space-x-8">
                        <NavLink text="Explorar sitios" isScrolled={scrolled} />

                        <DropdownMenu 
                            title="Experiencias" 
                            items={experienciasItems} 
                            isActive={activeDropdown === 'Experiencias'}
                            onToggle={handleDropdownToggle}
                            isScrolled={scrolled} // Pasar el estado a los Dropdowns
                        />
                        <DropdownMenu 
                            title="Paquetes" 
                            items={paquetesItems} 
                            isActive={activeDropdown === 'Paquetes'}
                            onToggle={handleDropdownToggle}
                            isScrolled={scrolled} // Pasar el estado a los Dropdowns
                        />
                    </div>
                    
                    {/* Botones de Acción (Simplificados) */}
                    <div className="flex items-center space-x-4">
                        {/* Botón 1: Iniciar Sesión (Contorno condicional) */}
                        <a href="#" className={`text-sm font-medium py-2 px-4 rounded-lg transition duration-300 
                            ${scrolled 
                                ? 'border border-red-600 text-red-600 hover:bg-red-50' 
                                : 'border border-white text-white hover:bg-white hover:text-red-800'}`
                        }>
                            Iniciar Sesión
                        </a>

                        {/* Botón 2: Cotizar (Color sólido de marca) */}
                        <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
                            Cotizar
                        </a>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;