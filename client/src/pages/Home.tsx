import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * Personal Portfolio - Minimalist Tech Professional Design
 * 
 * Design Philosophy:
 * - Dark Navy background (#0a0e1a) with light text for contrast
 * - Neon Green (#00ff88) primary accent for interactive elements
 * - Clean, minimalist layout with clear section separation
 * - Smooth transitions and hover effects throughout
 * - Professional typography using Poppins (headers) and Inter (body)
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
