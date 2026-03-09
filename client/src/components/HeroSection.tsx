import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663274859105/fPorkgXGZqGmVjukeueJKS/hero-bg-EZpchBFxUmMgmGj2rtbqRS.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60"></div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary bg-card/50 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
            <img 
          src="/avatar.png" 
          alt="Mohammed Saleh"
          className="w-full h-full rounded-full object-cover"
        />    
        </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-4 animate-fade-in">
          Hello, I&#39;m Mohammed Saleh Samman
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 font-inter animate-fade-in">
          Crafting intelligent full‑stack web applications
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
          <a href="#about" className="cta-button">
            Learn more about me
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-poppins font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            Contact me
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
}
