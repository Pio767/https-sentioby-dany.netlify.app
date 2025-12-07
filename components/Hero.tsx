
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import BookingModal from './BookingModal';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Force video play on mount to ensure autoplay works reliably across browsers
    if (videoRef.current) {
        videoRef.current.play().catch(error => {
            console.log("Video autoplay blocked by browser:", error);
        });
    }

    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY;
        // Limit parallax on mobile for performance
        if (window.innerWidth > 768) {
            const parallaxOffset = scrollY * 0.4;
            videoRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* Background Video Layer with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-[120%] -top-[10%] object-cover will-change-transform"
        >
          <source src="https://videos.pexels.com/video-files/6187085/6187085-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,0,79,0.0)_10%,rgba(46,0,79,0.6)_60%,rgba(46,0,79,0.95)_100%)]"></div>

        {/* SPANISH MOOD: Warm Golden Hour Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-spanish-orange/20 via-transparent to-flyer-violet/20 mix-blend-soft-light"></div>

        {/* Warm Pink Tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-flyer-pink/10 via-transparent to-royal/40 mix-blend-soft-light"></div>

        {/* Dynamic Breathing Overlay */}
        <div className="absolute inset-0 bg-royal mix-blend-multiply animate-slow-wave-overlay"></div>
        
        {/* Readability Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal/80 via-transparent to-royal/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center h-full">
        {/* Tagline */}
        <span className="inline-block py-1.5 px-4 md:py-2 md:px-6 border border-gold/30 rounded-full text-gold text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-8 backdrop-blur-md bg-white/5 shadow-[0_0_20px_rgba(212,175,55,0.1)] animate-fade-in-up opacity-0 hover:bg-white/10 transition-colors duration-500" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
          {t.hero.tagline}
        </span>
        
        {/* Main Headline - INCREASED SIZE significantly */}
        <div className="relative inline-block mb-4 md:mb-6 mx-auto text-center w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-royal/30 blur-3xl -z-10 rounded-full pointer-events-none"></div>

          <h1 className="font-serif font-bold animate-zoom-in-luxury opacity-0 leading-[1.1] md:leading-[0.95] tracking-tight text-center mx-auto" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            {/* Part 1: "Tu Momento" */}
            <span className="block text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] relative z-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              {t.hero.titlePart1}
            </span>
            
            {/* Part 2: "de Belleza" */}
            <span className="block mt-[-2px] md:mt-[-5px] italic text-transparent bg-clip-text bg-gradient-to-br from-[#FFFFF0] via-[#FCD34D] to-[#B45309] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] relative z-20 pb-4 px-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              {t.hero.titlePart2}
            </span>
          </h1>
        </div>
        
        {/* Subheadline - SENTIO BY DANY - DECREASED SIZE (~20%) */}
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-bold mb-8 md:mb-12 tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] animate-scale-up-luxury opacity-0 flex items-center justify-center gap-2 md:gap-6 flex-wrap leading-tight" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
          <span className="h-[1px] w-4 sm:w-8 md:w-12 bg-gradient-to-r from-transparent to-gold hidden sm:block"></span>
          <span className="break-words max-w-[90vw]">{t.hero.subtitle}</span>
          <span className="h-[1px] w-4 sm:w-8 md:w-12 bg-gradient-to-l from-transparent to-gold hidden sm:block"></span>
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 animate-fade-in-up opacity-0 px-4 sm:px-0 w-full sm:w-auto" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="group relative w-full sm:w-auto px-8 md:px-16 py-5 md:py-6 bg-gradient-to-b from-[#F9D976] to-[#D4AF37] text-royal font-bold rounded-full shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:shadow-[0_0_60px_rgba(212,175,55,0.9)] hover:-translate-y-1 transition-all duration-500 uppercase tracking-widest text-base md:text-lg overflow-hidden flex items-center justify-center animate-heartbeat border border-white/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.bookBtn}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>
          </button>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in-up cursor-pointer hidden md:block" 
        style={{animationDelay: '2s', animationFillMode: 'forwards'}}
        onClick={scrollToAbout}
      >
        <div className="animate-bounce p-2 rounded-full hover:bg-white/5 transition-colors duration-300">
           <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-white/40 hover:text-gold transition-colors duration-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
    