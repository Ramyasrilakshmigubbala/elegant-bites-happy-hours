
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Happy Hours has redefined vegetarian cuisine for me. The attention to detail in every dish is remarkable, and the desserts are simply divine. A true culinary gem!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "I've been coming here every week for the past year. The Royal Paneer Thali is exceptional, and the staff always makes me feel like family. Couldn't recommend it more!"
  },
  {
    id: 3,
    name: "Olivia Garcia",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    rating: 4,
    text: "The ambiance at Happy Hours is as exquisite as their food. Their dessert selection is unparalleled, and I particularly love their Signature Deconstructed Tiramisu. A must-visit!"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "I hosted a business dinner at Happy Hours and my clients were thoroughly impressed. The service was impeccable, and the vegetarian options were innovative and delicious."
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    intervalRef.current = setInterval(nextTestimonial, 8000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  // Reset interval when manually navigating
  const handleManualNav = (callback: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    callback();
    intervalRef.current = setInterval(nextTestimonial, 8000);
  };
  
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
    <section ref={sectionRef} id="testimonials" className="section-padding bg-restaurant-cream dark:bg-restaurant-wood-light/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-restaurant-gold/20 text-restaurant-green px-3 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll opacity-0">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 animate-on-scroll opacity-0">
            What Our Guests Say
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground animate-on-scroll opacity-0">
            Discover why our guests keep returning to Happy Hours for unforgettable vegetarian dining experiences.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto animate-on-scroll opacity-0">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-restaurant-wood-light/5 shadow-lg p-8 md:p-12">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                display: 'flex',
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full flex flex-col"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < testimonial.rating ? "fill-restaurant-gold text-restaurant-gold" : "text-muted"}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg italic mb-6">
                    "{testimonial.text}"
                  </blockquote>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNav(() => setActiveIndex(index))}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-restaurant-gold w-8"
                      : "bg-muted hover:bg-restaurant-gold/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Arrow Navigation */}
          <button
            onClick={() => handleManualNav(prevTestimonial)}
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-restaurant-wood-light/20 shadow-lg flex items-center justify-center hover:bg-restaurant-gold/10 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => handleManualNav(nextTestimonial)}
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-restaurant-wood-light/20 shadow-lg flex items-center justify-center hover:bg-restaurant-gold/10 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 animate-on-scroll opacity-0">
          <div className="bg-white dark:bg-restaurant-wood-light/5 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-restaurant-gold text-3xl md:text-4xl font-medium mb-2">4.9</h3>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          
          <div className="bg-white dark:bg-restaurant-wood-light/5 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-restaurant-gold text-3xl md:text-4xl font-medium mb-2">15k+</h3>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          
          <div className="bg-white dark:bg-restaurant-wood-light/5 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-restaurant-gold text-3xl md:text-4xl font-medium mb-2">30+</h3>
            <p className="text-sm text-muted-foreground">Signature Dishes</p>
          </div>
          
          <div className="bg-white dark:bg-restaurant-wood-light/5 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-restaurant-gold text-3xl md:text-4xl font-medium mb-2">7</h3>
            <p className="text-sm text-muted-foreground">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
