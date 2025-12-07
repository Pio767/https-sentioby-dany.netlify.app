
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import BookingModal from './BookingModal';

// Simple elegant flag components
const SpanishFlag = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
    <path fill="#AA151B" d="M0 0h640v480H0z"/>
    <path fill="#F1BF00" d="M0 120h640v240H0z"/>
  </svg>
);

const GermanFlag = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
    <path fill="#FFCE00" d="M0 320h640v160H0z"/>
    <path fill="#000" d="M0 0h640v160H0z"/>
    <path fill="#DD0000" d="M0 160h640v160H0z"/>
  </svg>
);

const UKFlag = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
    <path fill="#C8102E" d="M424 294l216 166v20h-43L366 315l-67 49 257 116h49L335 309l89-15zM0 480h43l231-172 74 53-256 119H0v-20zM0 0h44l217 165-60 42L0 24v-24zm640 0v26l-259 116 71 52 188-157V0z"/>
    <path fill="#FFF" d="M260 0h120v480H260z"/>
    <path fill="#FFF" d="M0 180h640v120H0z"/>
    <path fill="#C8102E" d="M280 0h80v480h-80z"/>
    <path fill="#C8102E" d="M0 200h640v80H0z"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); 

    if (href === '#contact') {
      setIsBookingOpen(true);
      setIsOpen(false); 
    } else {
      setIsOpen(false); 
      
      const element = document.querySelector(href);
      if (element) {
        const navHeight = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const LanguageButton = ({ lang, Flag, label, mobileCompact = false }: { lang: 'es' | 'de' | 'en', Flag: React.FC, label: string, mobileCompact?: boolean }) => (
    <button 
      onClick={() => { setLanguage(lang); setIsOpen(false); }}
      className={`group flex items-center justify-center transition-all duration-300 rounded-full ${mobileCompact ? 'p-1' : 'p-2 gap-2'}`}
      aria-label={`Switch to ${label}`}
    >
      <div className={`rounded-full overflow-hidden border-2 transition-all duration-300 ${mobileCompact ? 'w-9 h-9' : 'w-8 h-8'} ${language === lang ? 'border-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] scale-110' : 'border-white/30 opacity-70 group-hover:opacity-100 group-hover:border-white'}`}>
        <Flag />
      </div>
      {!mobileCompact && <span className="hidden lg:block text-white/80 text-xs font-medium uppercase tracking-wider hover:text-white">{lang}</span>}
    </button>
  );

  return (
    <>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* Main Navbar Bar */}
      <nav className={`fixed top-0 left-0 w-full z-[50] transition-all duration-500 ${isScrolled ? 'bg-royal/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
          
          {/* Left Side: Language Switcher */}
          <div className="flex items-center gap-2 relative z-[60]">
             <LanguageButton lang="es" Flag={SpanishFlag} label="Español" />
             <LanguageButton lang="de" Flag={GermanFlag} label="Deutsch" />
             <LanguageButton lang="en" Flag={UKFlag} label="English" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white/90 hover:text-gold transition-colors text-xs lg:text-sm uppercase tracking-widest font-medium relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button (Visible when closed) */}
          <div className="md:hidden relative z-[60] flex items-center">
            <button 
              className="text-white hover:text-gold transition-colors p-2" 
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={34} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu FULL SCREEN OVERLAY (Completely separate layer) */}
      <div 
        className={`fixed inset-0 z-[10000] bg-royal/98 backdrop-blur-xl transition-all duration-500 flex flex-col md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible delay-200'
        }`}
      >
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-magenta/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Close Button Area */}
        <div className="container mx-auto px-4 py-6 flex justify-end items-center">
           <button 
              className="text-white hover:text-gold transition-colors p-2 transform hover:rotate-90 duration-300" 
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X size={40} />
            </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 overflow-y-auto">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-white text-3xl font-serif font-light tracking-wide hover:text-gold transition-all duration-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${100 + (idx * 50)}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`mt-8 h-[1px] w-16 bg-gold/30 transition-all duration-500 ${isOpen ? 'w-16 opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '400ms' }}></div>
          
          <p className={`text-white/40 text-sm uppercase tracking-widest transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            Sentio by Dany
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
