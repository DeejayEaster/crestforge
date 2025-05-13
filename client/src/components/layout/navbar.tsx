import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header id="home" className={`fixed w-full z-50 transition-shadow ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            <a href="#home" className="flex items-center">
              Crestforge Capital
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-black hover:text-[#767676] transition-all font-medium">Home</a>
              <a href="#services" className="text-black hover:text-[#767676] transition-all font-medium">Services</a>
              <a href="#about" className="text-black hover:text-[#767676] transition-all font-medium">About</a>
              <a href="#contact" className="text-black hover:text-[#767676] transition-all font-medium">Contact</a>
              <a href="#contact">
                <Button className="bg-black text-white hover:bg-[#333333]">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMenu}
              className="text-gray-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white border-t border-gray-200 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1 px-2">
            <a href="#home" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-[#f5f5f5] transition-all">Home</a>
            <a href="#services" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-[#f5f5f5] transition-all">Services</a>
            <a href="#about" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-[#f5f5f5] transition-all">About</a>
            <a href="#contact" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-[#f5f5f5] transition-all">Contact</a>
            <a href="#contact" onClick={closeMenu} className="block px-3 py-2 mt-4 rounded-md text-base font-medium bg-black text-white hover:bg-[#333333] transition-all">Get Started</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
