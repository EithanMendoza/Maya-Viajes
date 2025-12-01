import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, MapPin } from "lucide-react";
//imagenes
import CENOTE_IMAGE from '../../../assets/images/lugares/cenote.jpg';
import CHICHENITZA_IMAGE from '../../../assets/images/lugares/chichenItza.jpg';
import IZAMAL_IMAGE from '../../../assets/images/lugares/izamal.jpg';
import PROGRESO_IMAGE from '../../../assets/images/lugares/progreso.jpg';
import UXMAL_IMAGE from '../../../assets/images/lugares/uxmal.jpg';

// --- DATOS DE EJEMPLO (Puedes mover esto a un archivo separado o pasarlo por props) ---
const TESTIMONIOS = [
  {
    id: 1,
    name: "Ana García",
    role: "Viajera Entusiasta",
    quote: "Fue el mejor viaje de mi vida. La conexión con la naturaleza y la historia es indescriptible.",
    visited: "Uxmal, Yucatán",
    rating: 5,
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    bgImage: UXMAL_IMAGE // Pirámide
  },
  {
    id: 2,
    name: "Carlos Méndez",
    role: "Fotógrafo",
    quote: "Los colores del agua son irreales. Jamás había nadado en un lugar tan mágico y puro.",
    visited: "Cenote Ik Kil",
    rating: 5,
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    bgImage: CENOTE_IMAGE // Cenote
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Digital Nomad",
    quote: "La tranquilidad de Izamal y la calidez de su gente me hicieron sentir como en casa.",
    visited: "Izamal, Pueblo Mágico",
    rating: 5,
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    bgImage: IZAMAL_IMAGE // Izamal
  }
];

// --- VARIANTES DE ANIMACIÓN ---
const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100, // Entra desde la derecha o izquierda según dirección
    opacity: 0,
    scale: 0.95
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100, // Sale hacia el lado opuesto
    opacity: 0,
    scale: 0.95
  })
};

const ImmersiveTestimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Lógica circular (Carousel infinito)
  const testimonialIndex = Math.abs(page % TESTIMONIOS.length);
  const currentTestimonial = TESTIMONIOS[testimonialIndex];

  // Funciones de navegación
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Detectar Swipe (Gestos para móvil)
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-black">
      
      {/* 1. FONDO INMERSIVO (Con Cross-fade) */}
      <AnimatePresence initial={false}>
        <motion.div
            key={page} // La clave es 'page' para que React detecte cambio y anime
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} // Transición suave de 1s
        >
            {/* Imagen de fondo */}
            <img 
                src={currentTestimonial.bgImage} 
                alt="background location" 
                className="w-full h-full object-cover blur-sm scale-110" // Blur y un poco de zoom para evitar bordes blancos
            />
            {/* Capa oscura (Overlay) */}
            <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>


      {/* 2. CONTENIDO PRINCIPAL (Tarjeta y Flechas) */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex items-center justify-between">
        
        {/* Flecha Izquierda (Desktop) */}
        <button 
            onClick={() => paginate(-1)}
            className="hidden md:flex p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all transform hover:scale-110 z-20"
        >
            <ArrowLeft size={24} />
        </button>


        {/* ZONA DE LA TARJETA (Swipeable) */}
        <div className="flex-1 flex justify-center items-center h-full relative perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={page}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x" // Habilitar arrastre horizontal
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1); // Swipe Izquierda -> Siguiente
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1); // Swipe Derecha -> Anterior
                        }
                    }}
                    className="absolute w-full max-w-lg cursor-grab active:cursor-grabbing font-lato"
                >
                    {/* DISEÑO DE LA TARJETA (Glassmorphism) */}
                    <div className="bg-rojo-secundario/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 text-center relative overflow-hidden">
                        
                        {/* Decoración sutil de comillas */}
                        <div className="absolute top-4 left-6 text-9xl text-gray-100 font-serif leading-none select-none -z-0">
                            &ldquo;
                        </div>

                        {/* Estrellas */}
                        <div className="flex justify-center space-x-1 mb-6 relative z-10">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    size={20} 
                                    className={`${i < currentTestimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                                />
                            ))}
                        </div>

                        {/* Cita */}
                        <blockquote className="relative z-10 mb-8">
                            <p className="text-2xl md:text-3xl font-lato font-medium text-gray-100 leading-snug">
                                "{currentTestimonial.quote}"
                            </p>
                        </blockquote>

                        {/* Información del Usuario */}
                        <div className="flex flex-col items-center justify-center relative z-10">
                            <div className="relative mb-3">
                                <img 
                                    src={currentTestimonial.userImage} 
                                    alt={currentTestimonial.name} 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md font-lato"
                                />
                            </div>
                            
                            <h4 className="text-lg font-bold text-gray-100 font lato">
                                {currentTestimonial.name}
                            </h4>
                            <p className="text-sm text-gray-100 mb-2 font-lato">
                                {currentTestimonial.role}
                            </p>
                            
                            {/* Etiqueta de lugar visitado */}
                            <div className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-600 mt-1 font-lato">
                                <MapPin size={12} />
                                Visitó: {currentTestimonial.visited}
                            </div>
                        </div>

                    </div>
                </motion.div>
            </AnimatePresence>
        </div>


        {/* Flecha Derecha (Desktop) */}
        <button 
            onClick={() => paginate(1)}
            className="hidden md:flex p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all transform hover:scale-110 z-20"
        >
            <ArrowRight size={24} />
        </button>

      </div>
      
      {/* Indicadores de Puntos (Opcional, ayuda a UX) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
            {TESTIMONIOS.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        const direction = idx > testimonialIndex ? 1 : -1;
                        setPage([idx, direction]);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === testimonialIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                    }`}
                />
            ))}
      </div>

    </div>
  );
};

export default ImmersiveTestimonials;