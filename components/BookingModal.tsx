import React from 'react';
import { X, MessageCircle, Phone, Mail, Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-royal/95 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#2E004F] border border-gold/30 shadow-[0_0_50px_rgba(219,39,119,0.3)] rounded-2xl overflow-hidden transform transition-all animate-fade-in-up mx-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/50 hover:text-gold transition-colors rounded-full hover:bg-white/5"
          aria-label="Close Booking"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-royal to-royal-light p-8 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-magenta/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
           <div className="relative z-10">
             <div className="mx-auto w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 border border-gold/30">
               <Calendar className="w-8 h-8 text-gold" />
             </div>
             <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">Reservar Cita</h2>
             <p className="text-white/70 text-sm font-light">Select your preferred contact method</p>
           </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4">
          
          {/* Note */}
          <div className="text-center mb-6">
            <p className="text-magenta-light text-xs uppercase tracking-widest font-semibold border-b border-white/10 pb-4">
              Booking by Ramona or by Dany
            </p>
          </div>

          {/* WhatsApp (Primary) */}
          <a 
            href="https://wa.me/34711079714"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="p-3 bg-[#25D366] rounded-full text-white shadow-lg group-hover:shadow-[#25D366]/50">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <p className="text-white font-bold text-lg">WhatsApp</p>
              <p className="text-white/60 text-xs">Fastest response</p>
            </div>
            <span className="text-[#25D366] text-sm font-semibold group-hover:translate-x-1 transition-transform">Open &rarr;</span>
          </a>

          {/* Phone Numbers */}
          <div className="grid grid-cols-1 gap-3">
             <a href="tel:+34711079714" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all group">
                <Phone className="w-5 h-5 text-gold" />
                <div>
                   <p className="text-white/90 text-sm font-medium">ES: +34 711 079 714</p>
                </div>
             </a>
             <a href="tel:+491736292133" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all group">
                <Phone className="w-5 h-5 text-gold" />
                <div>
                   <p className="text-white/90 text-sm font-medium">DE: +49 173 62 92 133</p>
                </div>
             </a>
          </div>

          {/* Email */}
          <a 
            href="mailto:sentio.wohlfuehlen@gmail.com"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-magenta/50 hover:bg-white/10 transition-all group"
          >
            <Mail className="w-5 h-5 text-magenta" />
            <div className="overflow-hidden">
              <p className="text-white/90 text-sm font-medium truncate">sentio.wohlfuehlen@gmail.com</p>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};