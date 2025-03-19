import React, { useState } from 'react';
import { Calendar, Clock, Users, UtensilsCrossed } from 'lucide-react';

const Reservation = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to reservation system)
    console.log({ date, time, guests, name, phone, email, notes });
    
    // Clear form
    setDate('');
    setTime('');
    setGuests('2');
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    
    // Show confirmation (in real implementation would use toast)
    alert('Reservation request submitted! We will confirm shortly.');
  };
  
  return (
    <section id="reservation" className="section-padding bg-restaurant-green text-white clip-path-slant">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Make a Reservation
            </span>
            <h2 className="text-4xl font-serif font-medium mb-6">
              Reserve Your Table
            </h2>
            <p className="text-white/80 mb-8 max-w-lg">
              Secure your spot for an unforgettable dining experience at Happy Hours. For parties larger than 8, please call us directly.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="text-restaurant-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Opening Hours</h3>
                  <p className="text-white/70 text-sm">Mon-Sun: 12pm - 10pm</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <UtensilsCrossed className="text-restaurant-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Happy Hours</h3>
                  <p className="text-white/70 text-sm">Daily: 4pm - 7pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-restaurant-gold" size={18} />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-restaurant-gold/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-restaurant-gold" size={18} />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-restaurant-gold/50"
                    >
                      <option value="" className="bg-restaurant-green">Select time</option>
                      <option value="12:00" className="bg-restaurant-green">12:00 PM</option>
                      <option value="12:30" className="bg-restaurant-green">12:30 PM</option>
                      <option value="13:00" className="bg-restaurant-green">1:00 PM</option>
                      <option value="13:30" className="bg-restaurant-green">1:30 PM</option>
                      <option value="18:00" className="bg-restaurant-green">6:00 PM</option>
                      <option value="18:30" className="bg-restaurant-green">6:30 PM</option>
                      <option value="19:00" className="bg-restaurant-green">7:00 PM</option>
                      <option value="19:30" className="bg-restaurant-green">7:30 PM</option>
                      <option value="20:00" className="bg-restaurant-green">8:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 text-restaurant-gold" size={18} />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-restaurant-gold/50"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num} className="bg-restaurant-green">
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-restaurant-gold/50"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="Your phone"
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-restaurant-gold/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email"
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-restaurant-gold/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Special Requests (Optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requests or notes"
                  rows={3}
                  className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-restaurant-gold/50"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-restaurant-gold text-restaurant-green rounded-lg font-medium hover:bg-restaurant-gold-light transition-colors"
              >
                Reserve Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
