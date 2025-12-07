import React, { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { BookingModal } from './BookingModal';

export const Hero: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 1. Dynamic Background Layer with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&auto=format&fit=crop" 
          alt="Relaxing Spa Background" 
          className="w-full h-full object-cover opacity-50 animate-zoom-slow"
        />
        {/* Gradient Overlays for Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal/60 via-royal/40 to-royal"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-royal/20 to-royal/90"></div>
      </div>

      {/* 2. Ethereal Floating Orbs (The "Spiritual" Energy) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left Magenta Glow */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-magenta/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        {/* Bottom Right Gold Glow */}
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-gold/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        {/* Center Deep Purple Pulse */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-light/20 rounded-full mix-blend-overlay filter blur-[80px] animate-pulse-slow"></div>
      </div>

      {/* 3. Main Content with Staggered Entrance */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Icon - Synced slightly before headline or with it */}
        <div className="mb-4 opacity-0 animate-fade-in-up delay-200">
          <div className="relative">
            <Sparkles className="text-gold w-10 h-10 animate-pulse drop-shadow-[0_0_15px_rgba(255,183,3,0.6)]" />
          </div>
        </div>
        
        {/* Main Headline - 0.2s Delay */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-tight drop-shadow-2xl opacity-0 animate-fade-in-up delay-200">
          <span className="block">Tu Momento</span>
          <span className="block italic text-shimmer pb-2">
            de Belleza
          </span>
        </h1>

        {/* Subheadline - 0.5s Delay */}
        <h2 className="opacity-0 animate-fade-in-up delay-500 text-gold-light tracking-[0.4em] uppercase text-xs md:text-sm font-semibold mb-8 drop-shadow-md">
          Sentio by Dany
        </h2>
        
        {/* Description - Synced with Subheadline for clean flow */}
        <p className="opacity-0 animate-fade-in-up delay-500 text-white/90 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide drop-shadow-lg leading-relaxed">
          Un santuario de paz donde el cuerpo sana y el alma descansa.
        </p>

        {/* CTA Button - 0.9s Delay */}
        <div className="opacity-0 animate-fade-in-up delay-900">
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-full shadow-[0_0_20px_rgba(255,183,3,0.2)] hover:shadow-[0_0_40px_rgba(219,39,119,0.4)] transition-all duration-500"
          >
            {/* Button Gradient Background */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold via-gold-light to-gold opacity-90 group-hover:opacity-100 transition-opacity"></span>
            {/* Button Shine Effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
            
            <span className="relative z-10 font-bold tracking-widest uppercase text-royal-dark group-hover:text-black transition-colors">
              Reservar Cita
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Appears last */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-1000">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors duration-300">
          <span className="text-[10px] uppercase tracking-widest">Descubre</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};