
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-restaurant-wood text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#" className="text-2xl font-serif font-medium inline-block mb-4">
              <span className="text-restaurant-gold">Happy</span> Hours
            </a>
            <p className="text-white/70 mb-6 max-w-md">
              Discover the perfect blend of pure vegetarian cuisine and exquisite desserts in an elegant dining atmosphere.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-restaurant-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-restaurant-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-restaurant-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-restaurant-gold transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-restaurant-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-restaurant-gold transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-restaurant-gold transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-restaurant-gold transition-colors">
                  Special Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-restaurant-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-restaurant-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-white/70">
                <span>Monday - Friday</span>
                <span>12pm - 10pm</span>
              </li>
              <li className="flex justify-between text-white/70">
                <span>Saturday</span>
                <span>11am - 11pm</span>
              </li>
              <li className="flex justify-between text-white/70">
                <span>Sunday</span>
                <span>11am - 11pm</span>
              </li>
              <li className="mt-4 pt-4 border-t border-white/20">
                <p className="text-restaurant-gold">
                  Happy Hours: Daily 4pm - 7pm
                </p>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for special deals, new items, and exclusive offers.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-restaurant-gold/50"
              />
              <button
                type="submit"
                className="w-full py-3 bg-restaurant-gold text-restaurant-green rounded-lg font-medium hover:bg-restaurant-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60">
            © {currentYear} Happy Hours Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
