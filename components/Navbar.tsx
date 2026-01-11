import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import BookingModal from './BookingModal';
import NewsModal from './NewsModal'; // Import the new modal

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
  const [isNewsOpen, setIsNewsOpen] = useState(false); // State for the news modal
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
    } else if (href === '#news') {
      setIsNewsOpen(true);
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

  const LanguageButton = ({ lang, Flag, label, mobileCompact = false, mobileMenu = false }: { lang: 'es' | 'de' | 'en', Flag: React.FC, label: string, mobileCompact?: boolean, mobileMenu?: boolean }) => (
    <button 
      onClick={() => { setLanguage(lang); setIsOpen(false); }}
      className={`group flex items-center justify-center transition-all duration-300 rounded-full ${mobileMenu ? 'p-2' : mobileCompact ? 'p-1' : 'p-2 gap-2'}`}
      aria-label={`Switch to ${label}`}
    >
      <div className={`rounded-full overflow-hidden border-2 transition-all duration-300 ${mobileMenu ? 'w-12 h-12' : mobileCompact ? 'w-9 h-9' : 'w-8 h-8'} ${language === lang ? 'border-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] scale-110' : 'border-white/30 opacity-70 group-hover:opacity-100 group-hover:border-white'}`}>
        <Flag />
      </div>
      {!mobileCompact && !mobileMenu && <span className="hidden lg:block text-white/80 text-xs font-medium uppercase tracking-wider hover:text-white">{lang}</span>}
    </button>
  );
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-royal-dark/95 backdrop-blur-xl shadow-2xl h-[70px]' : 'h-[80px]'}`}
      >
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 group">
            <h1 className="text-white text-lg md:text-xl font-serif font-bold tracking-wider group-hover:text-gold transition-colors">
              SENTIO <span className="text-[10px] font-sans font-light tracking-widest opacity-80">by DANY</span>
            </h1>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white/80 hover:text-white uppercase text-xs tracking-[0.15em] font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            {/* News button with animation */}
            <a 
              href="#news" 
              onClick={(e) => handleLinkClick(e, '#news')}
              className="relative text-white/80 hover:text-white uppercase text-xs tracking-[0.15em] font-medium transition-colors p-2 rounded-full animate-pulse-border"
            >
              {t.nav.news}
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <LanguageButton lang="es" Flag={SpanishFlag} label="Spanish" />
            <LanguageButton lang="de" Flag={GermanFlag} label="German" mobileCompact />
            <LanguageButton lang="en" Flag={UKFlag} label="English" mobileCompact />
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-royal-dark/95 backdrop-blur-2xl transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-white text-lg font-serif">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-white p-2">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 gap-8 pb-20">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white text-2xl font-serif hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
           <a 
              href="#news" 
              onClick={(e) => handleLinkClick(e, '#news')}
              className="relative text-white text-2xl font-serif hover:text-gold transition-colors p-2 rounded-full animate-pulse-border"
            >
              {t.nav.news}
            </a>
          
          {/* Language Selector in Mobile Menu */}
          <div className="mt-8 pt-8 border-t border-white/10 w-full max-w-xs">
            <div className="flex flex-col items-center gap-4">
              <span className="text-white/60 text-sm uppercase tracking-widest mb-2">{t.language && t.language.label ? t.language.label : 'Language'}</span>
              <div className="flex items-center justify-center gap-4">
                <LanguageButton lang="es" Flag={SpanishFlag} label="Español" mobileMenu={true} />
                <LanguageButton lang="de" Flag={GermanFlag} label="Deutsch" mobileMenu={true} />
                <LanguageButton lang="en" Flag={UKFlag} label="English" mobileMenu={true} />
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <NewsModal isOpen={isNewsOpen} onClose={() => setIsNewsOpen(false)} />
    </>
  );
};

export default Navbar;
