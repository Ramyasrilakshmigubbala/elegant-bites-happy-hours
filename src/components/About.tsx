
import React, { useEffect, useRef } from 'react';
import { Award, Leaf, UtensilsCrossed } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="about" className="section-padding bg-restaurant-cream dark:bg-restaurant-wood-light/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-restaurant-gold/20 text-restaurant-green px-3 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll opacity-0">
              Our Story
            </span>
            <h2 className="section-title mb-8 animate-on-scroll opacity-0">
              A Passion for Pure Vegetarian Excellence
            </h2>
            
            <div className="space-y-6">
              <p className="animate-on-scroll opacity-0">
                Founded in 2015, Happy Hours began with a simple vision: to create a sanctuary where vegetarian cuisine is elevated to an art form, and where each dessert tells a story of creativity and passion.
              </p>
              
              <p className="animate-on-scroll opacity-0">
                Our restaurant brings together time-honored culinary traditions and modern innovation, creating dishes that are not only exquisite in taste but also beautiful in presentation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg animate-on-scroll opacity-0">
                <Leaf className="text-restaurant-green mb-3" size={28} />
                <h3 className="text-lg font-medium mb-2">Fresh Ingredients</h3>
                <p className="text-sm text-muted-foreground">
                  Farm-to-table produce sourced from organic growers
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg animate-on-scroll opacity-0">
                <UtensilsCrossed className="text-restaurant-green mb-3" size={28} />
                <h3 className="text-lg font-medium mb-2">Master Chefs</h3>
                <p className="text-sm text-muted-foreground">
                  Internationally trained culinary artists
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg animate-on-scroll opacity-0">
                <Award className="text-restaurant-green mb-3" size={28} />
                <h3 className="text-lg font-medium mb-2">Award Winning</h3>
                <p className="text-sm text-muted-foreground">
                  Recognized for culinary excellence
                </p>
              </div>
            </div>
          </div>
          
          {/* Images */}
          <div className="relative h-[500px] animate-on-scroll opacity-0">
            <div 
              className="absolute top-0 right-0 w-2/3 h-2/3 bg-cover rounded-lg shadow-xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
                backgroundPosition: "center",
              }}
            />
            <div 
              className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-cover rounded-lg shadow-xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1551218370-a639d557ee9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-restaurant-gold rounded-full flex items-center justify-center">
              <p className="font-serif text-lg text-restaurant-green text-center leading-tight">
                Since<br />2015
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
