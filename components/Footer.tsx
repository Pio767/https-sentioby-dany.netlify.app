
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { getContactInfo } from '../utils/dataLoader';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';
import BookingModal from './BookingModal';
import PrivacyPolicy from './PrivacyPolicy';
import LegalNotice from './LegalNotice';
import CookiePolicy from './CookiePolicy';

// Custom WhatsApp Icon Component for brand consistency
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-[18px] md:h-[18px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isCookiePolicyOpen, setIsCookiePolicyOpen] = useState(false);
  const contactInfo = getContactInfo();

  useEffect(() => {
    const handleOpenPrivacy = () => {
      setIsPrivacyOpen(true);
    };
    window.addEventListener('openPrivacyPolicy', handleOpenPrivacy);
    return () => window.removeEventListener('openPrivacyPolicy', handleOpenPrivacy);
  }, []);

  // Format phone number for WhatsApp link (remove spaces and +)
  const waNumber = contactInfo.phoneDe.replace(/[^0-9]/g, '');

  return (
    <footer id="contact" className="relative pt-10 pb-10 overflow-x-hidden mt-10">
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <LegalNotice isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
      <CookiePolicy isOpen={isCookiePolicyOpen} onClose={() => setIsCookiePolicyOpen(false)} />

      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl border-t border-white/10"></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[300px] h-[300px] bg-magenta/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <RevealOnScroll direction="zoom" duration={1500}>
          <div className="w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-gold/30 mb-12 md:mb-16 grayscale hover:grayscale-0 transition-all duration-700 relative group">
            <div className="absolute inset-0 bg-royal/20 pointer-events-none group-hover:opacity-0 transition-opacity z-10"></div>
            <iframe 
              src="https://maps.google.com/maps?q=Sentio+by+Dany+Benissa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sentio by Dany Location"
            ></iframe>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-12 items-start">
          
          {/* Brand Section */}
          <RevealOnScroll direction="up" delay={100}>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                SENTIO <span className="text-gold text-xs md:text-sm font-sans tracking-widest uppercase font-normal">by Dany</span>
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed font-light text-sm md:text-base">
                {t.footer.brandDesc}
              </p>
              <div className="flex justify-center md:justify-start">
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact Details - Separated & Cleaned */}
          <RevealOnScroll direction="up" delay={200}>
            <div className="flex flex-col gap-6">
              <h3 className="text-lg md:text-xl font-serif text-white text-center md:text-left border-b border-white/10 pb-2 inline-block md:block">{t.footer.contactTitle}</h3>
              
              <ul className="space-y-6">
                {/* Address */}
                <li className="flex items-start justify-center md:justify-start gap-4 group text-sm md:text-base">
                  <div className="mt-1 p-2 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors text-gold shrink-0">
                    <MapPin size={16} className="md:w-[18px] md:h-[18px]" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-center md:text-left max-w-[200px]">{contactInfo.address}</span>
                </li>

                {/* Phone 1: Spanish (Calls) */}
                <li className="flex items-start justify-center md:justify-start gap-4 group text-sm md:text-base">
                  <div className="mt-1 p-2 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors text-gold shrink-0">
                    <Phone size={16} className="md:w-[18px] md:h-[18px]" />
                  </div>
                  <div className="flex flex-col text-center md:text-left">
                    <span className="text-[10px] text-gold/70 uppercase tracking-wider mb-0.5">Llamadas / Anrufe (ES)</span>
                    <a href={`tel:${contactInfo.phoneEs.replace(/\s/g, '')}`} className="text-white hover:text-gold transition-colors text-lg">{contactInfo.phoneEs}</a>
                  </div>
                </li>

                {/* Phone 2: German (WhatsApp) */}
                <li className="flex items-start justify-center md:justify-start gap-4 group text-sm md:text-base">
                  <div className="mt-1 p-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 group-hover:bg-[#25D366]/20 transition-colors text-[#25D366] shrink-0">
                    <WhatsAppIcon />
                  </div>
                  <div className="flex flex-col text-center md:text-left">
                    <span className="text-[10px] text-[#25D366]/70 uppercase tracking-wider mb-0.5">WhatsApp (DE/ES)</span>
                    <a 
                      href={`https://wa.me/${waNumber}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-[#25D366] transition-colors text-lg flex items-center gap-2 justify-center md:justify-start"
                    >
                      {contactInfo.phoneDe}
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-center justify-center md:justify-start gap-4 group text-sm md:text-base">
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors text-gold shrink-0">
                    <Mail size={16} className="md:w-[18px] md:h-[18px]" />
                  </div>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-gold transition-colors break-all">{contactInfo.email}</a>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Booking & Note - Span across 2 cols on md if needed or stack */}
          <RevealOnScroll direction="up" delay={300} className="md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg md:text-xl font-serif text-white mb-6 border-b border-white/10 pb-2 w-full text-center md:text-left">{t.footer.appointmentsTitle}</h3>
              
              <div className="glass-panel p-6 md:p-8 rounded-2xl w-full border border-gold/20 bg-gradient-to-br from-white/5 to-transparent shadow-xl relative overflow-hidden">
                 <div className="absolute -top-10 -right-10 w-20 h-20 bg-gold/10 rounded-full blur-xl"></div>
                 
                <p className="text-gold font-medium mb-3 uppercase tracking-wider text-[10px] md:text-xs">{t.footer.policyBadge}</p>
                <p className="text-white italic font-serif text-base md:text-lg mb-6 text-center md:text-left leading-relaxed">"{t.footer.policyNote}"</p>
                
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex w-full items-center justify-center gap-2 py-4 text-center rounded-lg bg-gradient-to-r from-gold to-[#b38728] text-royal hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 text-xs md:text-sm font-bold uppercase tracking-widest cursor-pointer"
                >
                  <span>{t.footer.bookAction}</span>
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Footer Bottom - Zawsze widoczny, bez RevealOnScroll dla lepszej widoczności na tabletach */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-white/30 text-xs md:text-sm font-light tracking-wider text-center md:text-left">
              &copy; {new Date().getFullYear()} Sentio by Dany. {t.footer.rights} | SeRenDipity Studio
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm items-center">
              <button
                onClick={() => setIsLegalOpen(true)}
                className="text-white/50 hover:text-gold transition-colors underline whitespace-nowrap"
              >
                {language === 'de' ? 'Impressum' : language === 'en' ? 'Legal Notice' : 'Aviso Legal'}
              </button>
              <span className="text-white/30 hidden md:inline">|</span>
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-white/50 hover:text-gold transition-colors underline whitespace-nowrap"
              >
                {t.privacy.title}
              </button>
              <span className="text-white/30 hidden md:inline">|</span>
              <button
                onClick={() => setIsCookiePolicyOpen(true)}
                className="text-white/50 hover:text-gold transition-colors underline whitespace-nowrap"
              >
                {t.cookies.title}
              </button>
              {/* Ukryty przycisk Admin - widoczny na tabletach i większych ekranach */}
              <span className="text-white/30 hidden md:inline">|</span>
              <span 
                className="text-white/40 md:text-white/50 hover:text-white/80 active:text-white transition-colors cursor-pointer text-[10px] md:text-xs opacity-50 md:opacity-60 hover:opacity-80 active:opacity-100 whitespace-nowrap"
                title="Admin Panel (Ctrl+Shift+A)"
                onClick={() => {
                  const event = new CustomEvent('openAdminPanel');
                  window.dispatchEvent(event);
                }}
              >
                Admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
