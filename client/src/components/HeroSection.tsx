import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663274859105/fPorkgXGZqGmVjukeueJKS/hero-bg-EZpchBFxUmMgmGj2rtbqRS.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/60"></div>
      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-6 animate-fade-in">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-2 border-primary bg-card/50 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
              <img
                src="/avatar.png"
                alt="Mohammed Saleh"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-4 animate-fade-in leading-tight">
          Hello, I&#39;m Mohammed Saleh Samman
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-xl mb-8 font-inter animate-fade-in">
          Crafting intelligent full-stack web applications
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-in w-full sm:w-auto">
          <a href="#about" className="cta-button text-center">
            Learn more about me
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-poppins font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
          >
            Contact me
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
}
