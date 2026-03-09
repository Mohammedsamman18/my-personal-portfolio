import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-muted-foreground font-inter text-sm text-center">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground font-inter text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>MSS</span>
          </div>
          <div className="flex gap-4">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm">
              Top
            </a>
            <span className="text-border">|</span>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
