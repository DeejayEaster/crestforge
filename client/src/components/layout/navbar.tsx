import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-slate-200' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="font-display text-3xl font-bold text-primary tracking-tight hover:text-accent transition-colors duration-200"
            >
              LUXE
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-primary font-medium text-sm tracking-wider transition-colors duration-200 uppercase"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-slate-600 hover:text-primary font-medium text-sm tracking-wider transition-colors duration-200 uppercase"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-primary font-medium text-sm tracking-wider transition-colors duration-200 uppercase"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-600 hover:text-primary font-medium text-sm tracking-wider transition-colors duration-200 uppercase"
              >
                Testimonials
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3 text-sm tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-primary p-2 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="pt-4 pb-6 space-y-3 px-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-primary block py-3 text-base font-medium w-full text-left tracking-wider uppercase transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-600 hover:text-primary block py-3 text-base font-medium w-full text-left tracking-wider uppercase transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-slate-600 hover:text-primary block py-3 text-base font-medium w-full text-left tracking-wider uppercase transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-600 hover:text-primary block py-3 text-base font-medium w-full text-left tracking-wider uppercase transition-colors duration-200"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-primary font-semibold w-full mt-4 py-3 text-sm tracking-wider uppercase"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}