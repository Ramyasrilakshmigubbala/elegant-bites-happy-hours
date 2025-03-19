
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
            opacity: 0.7,
            transform: isLoaded ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 1.5s ease-out, opacity 1.5s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="md:max-w-3xl lg:max-w-4xl stagger-animate">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block bg-restaurant-gold text-restaurant-green-light px-3 py-1 rounded-full text-sm font-medium mb-4">
              Pure Vegetarian & Desserts
            </span>
            <h1 className="text-white mb-6">
              Savor the Art of Pure Veg Dining & Exquisite Desserts
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 md:max-w-2xl">
              Handcrafted, Healthy, and Heavenly – The Ultimate Vegetarian Indulgence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <button className="px-8 py-3 bg-restaurant-green text-white rounded-full flex items-center justify-center hover:bg-restaurant-green-light transition-colors group">
              <span>Reserve a Table</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors">
              Explore Our Menu
            </button>
          </div>
          
          <div 
            className={cn(
              "mt-16 px-6 py-4 bg-restaurant-gold/90 backdrop-blur-sm rounded-lg max-w-max animate-fade-in",
              "transform transition-transform duration-500",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <p className="text-restaurant-green font-medium">
              Happy Hours Special: 20% off on Signature Desserts – Today 4 PM - 7 PM
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in">
        <span className="text-white/70 text-sm mb-2">Scroll Down</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-white to-transparent relative">
          <div className="absolute top-0 w-0.5 h-4 bg-white animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
