import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground font-inter text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-2 text-muted-foreground font-inter text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>MSS</span>
          </div>

          {/* Right */}
          <div className="flex gap-4">
            <a
              href="#home"
              className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
            >
              Top
            </a>
            <span className="text-border">|</span>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
