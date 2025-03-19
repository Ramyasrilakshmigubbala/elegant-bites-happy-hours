
import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-restaurant-gold/20 text-restaurant-green px-3 py-1 rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Whether you have a question about our menu, want to book a special event, or just want to say hello, we'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-restaurant-green/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-restaurant-green" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Our Location</h3>
                <p className="text-muted-foreground">
                  123 Culinary Avenue<br />
                  Gourmet District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-restaurant-green/10 flex items-center justify-center flex-shrink-0">
                <Clock className="text-restaurant-green" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Opening Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 12pm - 10pm<br />
                  Saturday - Sunday: 11am - 11pm<br />
                  Happy Hours: Daily 4pm - 7pm
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-restaurant-green/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-restaurant-green" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  Reservations: (555) 123-4567<br />
                  Events: (555) 123-4568
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-restaurant-green/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-restaurant-green" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@happyhours.restaurant<br />
                  events@happyhours.restaurant
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white dark:bg-restaurant-wood-light/5 rounded-xl shadow-md p-6 md:p-8">
            <h3 className="font-medium text-xl mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full border border-border rounded-lg py-3 px-4 bg-background focus:outline-none focus:ring-2 focus:ring-restaurant-green/30"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-full border border-border rounded-lg py-3 px-4 bg-background focus:outline-none focus:ring-2 focus:ring-restaurant-green/30"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="How can we help you?"
                  className="w-full border border-border rounded-lg py-3 px-4 bg-background focus:outline-none focus:ring-2 focus:ring-restaurant-green/30"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  required
                  placeholder="Your message..."
                  rows={5}
                  className="w-full border border-border rounded-lg py-3 px-4 bg-background focus:outline-none focus:ring-2 focus:ring-restaurant-green/30"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-restaurant-green text-white rounded-lg font-medium hover:bg-restaurant-green-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16 rounded-xl overflow-hidden h-96 shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48372.63639696655!2d-73.9987924!3d40.7134227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1652901476319!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Happy Hours Restaurant Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
