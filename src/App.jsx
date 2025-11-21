import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CustomPlansSection from './components/CustomPlanSection'
import ExpertTravelSection from './components/ExpertTravelSection'
import AssuranceCTA from './components/AssuranceCTA'
import SecuritySection from './components/SecuritySection'
import PlanSelectionSection from './components/PlanSelectionSection'
import PartnerSection from './components/PartnerSection'
import TestimonialsSection from './components/TestimonialSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

 
    // Colores muy fuertes para asegurar la visibilidad
    return (
      // Asegúrate de que este div NO tenga clases como 'max-w-xl' o similar.
      // Un simple <div> es suficiente y toma el 100% por defecto.
      // Si quieres forzar el 100% explícitamente, puedes usar 'w-full'.
      <div className="w-full"> 
        <Navbar /> 
        <HeroSection />
        <CustomPlansSection />
        <ExpertTravelSection />
        <AssuranceCTA />
        <SecuritySection />
        <PlanSelectionSection/>
        <PartnerSection/>
        <TestimonialsSection/>
        <FinalCTA/>
        <Footer/>
        {/* Aquí irían más secciones de la landing page */}
      </div>  
  );
}

export default App
