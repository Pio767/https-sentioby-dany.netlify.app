
import React from 'react';
import { X, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { CONTACT_INFO } from '../constants';

// Custom WhatsApp Icon
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  
  if (!isOpen) return null;

  const waNumber = CONTACT_INFO.phoneDe.replace(/[^0-9]/g, '');

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-royal/90 backdrop-blur-xl border border-gold/30 rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.2)] p-8 animate-zoom-in-luxury overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold/50 via-white/50 to-gold/50"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-magenta/10 rounded-full blur-3xl"></div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-white/5 rounded-full p-2 hover:bg-white/10"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
           <h3 className="text-2xl font-serif font-bold text-white mb-2">{t.booking.title}</h3>
           <p className="text-white/60 text-sm">{t.booking.subtitle}</p>
        </div>

        <div className="space-y-4">
          {/* WhatsApp Option */}
          <a 
            href={`https://wa.me/${waNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 w-full p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(37,211,102,0.2)]"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg">
               <WhatsAppIcon />
            </div>
            <div className="text-left">
              <span className="block text-white font-serif text-lg tracking-wide group-hover:text-[#25D366] transition-colors">{t.booking.whatsapp}</span>
            </div>
          </a>

           {/* Call Option */}
           <a 
            href={`tel:${CONTACT_INFO.phoneEs.replace(/\s/g, '')}`}
            className="group flex items-center gap-4 w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-gold/10 hover:border-gold/40 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-[#B38728] text-royal flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
               <Phone size={22} />
            </div>
            <div className="text-left">
              <span className="block text-white font-serif text-lg tracking-wide group-hover:text-gold transition-colors">{t.booking.call}</span>
            </div>
          </a>

          {/* Email Option */}
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="group flex items-center gap-4 w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-gold/10 hover:border-gold/40 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-royal border border-white/20 text-white flex items-center justify-center shadow-lg group-hover:border-gold group-hover:text-gold transition-colors">
               <Mail size={22} />
            </div>
            <div className="text-left">
              <span className="block text-white font-serif text-lg tracking-wide group-hover:text-gold transition-colors">{t.booking.email}</span>
            </div>
          </a>
        </div>

        <div className="mt-8 text-center">
           <button 
            onClick={onClose}
            className="text-white/40 hover:text-white text-sm tracking-widest uppercase transition-colors"
           >
             {t.booking.cancel}
           </button>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
