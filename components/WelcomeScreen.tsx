
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  const { t } = useLanguage();
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    setIsExiting(true);
    // Increased timeout to 2000ms to match the new slower duration
    setTimeout(() => {
      onEnter();
      setIsVisible(false);
    }, 2000); 
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex items-center justify-center transition-all duration-[2000ms] ease-in-out ${
        isExiting ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100'
      }`}
    >
      {/* Glass Background Layer */}
      <div className="absolute inset-0 bg-royal/80 backdrop-blur-3xl"></div>
      
      {/* Gradient Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-flyer-violet/20 via-transparent to-flyer-pink/20 opacity-60"></div>
      
      {/* Content Container */}
      <div className={`relative z-10 flex flex-col items-center text-center p-8 transition-all duration-[1500ms] ${isExiting ? 'translate-y-[-50px]' : 'translate-y-0'}`}>
        
        {/* Logo / Brand */}
        <div className="mb-8 animate-fade-in-up">
          <span className="block text-gold text-xs md:text-sm uppercase tracking-[0.4em] mb-2">SeRenDipity Studio</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            SENTIO <span className="font-light italic text-white/80">by Dany</span>
          </h1>
        </div>

        {/* Welcome Message */}
        <p className="text-white/70 font-light text-lg md:text-xl mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          {t.welcome.title}
        </p>

        {/* The Golden Key (Button) - REPLACED EMOJI WITH TEXT */}
        <button 
          onClick={handleEnter}
          className="group relative p-8 md:px-10 bg-transparent border-2 border-gold/60 rounded-full overflow-hidden animate-pulse hover:border-gold transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] hover:scale-110"
          style={{animationDelay: '0.6s', animationDuration: '2s'}}
          aria-label="Enter Site"
        >
          <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/30 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <span className="relative z-10 flex items-center justify-center text-gold group-hover:text-white transition-colors font-serif uppercase tracking-widest text-sm md:text-base font-bold">
            CLICK HERE
          </span>
        </button>

        {/* Footer Hint */}
        <p className="absolute bottom-[-100px] text-white/20 text-xs uppercase tracking-widest animate-pulse">
          Sound On
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
