import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* NOTE: Header and Footer are removed from here. 
        They are now handled in App.tsx using conditional rendering.
      */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ProcessSection />
        <ProjectsSection />
        <InfrastructureSection />
        <TestimonialsSection />
        <QuoteSection />
        <ContactSection />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;