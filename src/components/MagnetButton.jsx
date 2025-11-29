import React, { useState, useEffect, useRef, forwardRef } from 'react';

const MagnetButton = forwardRef(({
  children,
  onClick,
  type = 'button', // Por defecto es tipo botón
  disabled = false,
  className = '', // Clases para el botón
  wrapperClassName = '', // Clases para el contenedor invisible
  magnetStrength = 20, // Ajustado para que el movimiento sea sutil pero notable
  magnetPadding = 50, // Radio de detección del imán
  activeTransition = 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  inactiveTransition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Efecto rebote suave
  style,
  ...props // Resto de props (aria-label, id, etc.) se pasan al botón
}, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  
  // Referencia interna para el contenedor que detecta el área
  const anchorRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      setIsActive(false);
      return;
    }

    const handleMouseMove = (e) => {
      if (!anchorRef.current) return;

      const { left, top, width, height } = anchorRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Distancia del mouse al centro del botón
      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      // Verificamos si el mouse está dentro del rango de acción (tamaño botón + padding)
      if (distX < width / 2 + magnetPadding && distY < height / 2 + magnetPadding) {
        setIsActive(true);
        
        // Calculamos el desplazamiento
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        
        setPosition({ x: offsetX, y: offsetY });
      } else {
        // Si salimos del área, reseteamos
        if (isActive || position.x !== 0) {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    // Optimización: Usar requestAnimationFrame si fuera necesario, 
    // pero para este caso el listener directo funciona bien.
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [disabled, magnetStrength, magnetPadding, isActive, position.x]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    // 1. Contenedor "Ancla": Define el espacio que ocupa el botón en el flujo normal
    <div
      ref={anchorRef}
      className={wrapperClassName}
      style={{ 
        position: 'relative', 
        display: 'inline-block',
        // Esto asegura que el contenedor no colapse si el botón se mueve mucho
        width: 'fit-content', 
        height: 'fit-content'
      }}
    >
      {/* 2. Botón Real: Recibe las props funcionales */}
      <button
        ref={ref} // ForwardRef para permitir acceso externo
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={className}
        style={{
          ...style,
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: 'transform',
          cursor: disabled ? 'not-allowed' : 'pointer',
          position: 'relative', // Necesario para z-index si se superpone
          zIndex: 1
        }}
        {...props}
      >
        {children}
      </button>
    </div>
  );
});

// DisplayName es útil para depuración en React DevTools
MagnetButton.displayName = 'MagnetButton';

export default MagnetButton;