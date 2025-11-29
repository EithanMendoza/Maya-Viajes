import { motion } from "framer-motion";

const FadeIn = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up" // puede ser 'up', 'down', 'left', 'right' o 'none'
}) => {
  
  // Configuración de la dirección del movimiento
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 20, x: 0 };
      case "down": return { y: -20, x: 0 };
      case "left": return { x: 20, y: 0 };
      case "right": return { x: -20, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        filter: "blur(4px)", // Efecto borroso inicial
        ...getInitialPosition()
      }}
      whileInView={{ 
        opacity: 1, 
        filter: "blur(0px)", // Se vuelve nítido
        y: 0, 
        x: 0 
      }}
      viewport={{ once: true, margin: "-50px" }} // Se anima una sola vez cuando entra en pantalla
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Curva suave tipo iOS
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;