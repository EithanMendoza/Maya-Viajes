import React from 'react'
import HeroSection from './Sections/HeroSection'
import CustomPlansSection from './Sections/CustomPlanSection'
import ExpertTravelSection from './Sections/ExpertTravelSection'
import AssuranceCTA from './Sections/AssuranceCTA'
import SecuritySection from './Sections/SecuritySection'
import PlanSelectionSection from './Sections/PlanSelectionSection'
import PartnerSection from './Sections/PartnerSection'
import TestimonialsSection from './Sections/TestimonialSection'
import FinalCTA from './Sections/FinalCTA'

function HomePage() {

    return (
        <div className="w-full">           
            <div >
                <HeroSection /> {/* 👈 Inicia justo debajo del Navbar */}
                <CustomPlansSection />
                <ExpertTravelSection />
                <AssuranceCTA />
                <SecuritySection />
                <PlanSelectionSection />
                <PartnerSection />
                <TestimonialsSection />
                <FinalCTA/>
            </div>
        </div>
    );
}

export default HomePage // 👈 ¡Asegúrate de que exporta HomePage!
