
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm dark:bg-black/80'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-serif font-medium flex items-center gap-2">
            <span className="text-restaurant-gold">Happy</span>
            <span>Hours</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-restaurant-gold transition-colors">Home</a>
            <a href="#about" className="hover:text-restaurant-gold transition-colors">About</a>
            <a href="#menu" className="hover:text-restaurant-gold transition-colors">Menu</a>
            <a href="#testimonials" className="hover:text-restaurant-gold transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-restaurant-gold transition-colors">Contact</a>
            <button
              className="bg-restaurant-green text-white px-6 py-2 rounded-full hover:bg-restaurant-green-light transition-colors"
            >
              Reservations
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white dark:bg-restaurant-wood z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 text-xl">
          <a 
            href="#home" 
            className="hover:text-restaurant-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="hover:text-restaurant-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#menu" 
            className="hover:text-restaurant-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </a>
          <a 
            href="#testimonials" 
            className="hover:text-restaurant-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="hover:text-restaurant-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button
            className="bg-restaurant-green text-white px-6 py-2 rounded-full hover:bg-restaurant-green-light transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Reservations
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
