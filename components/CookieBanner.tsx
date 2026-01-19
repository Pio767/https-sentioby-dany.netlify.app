import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
    
    // Dispatch event to notify other components
    window.dispatchEvent(new CustomEvent('cookieConsentAccepted'));
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99999] p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-6xl mx-auto bg-royal/98 backdrop-blur-xl border border-gold/30 rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-gold" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-lg font-serif font-bold text-white mb-2">{t.cookies.title}</h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
              {t.cookies.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-white/60">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); /* Open cookie settings */ }}
                className="hover:text-gold transition-colors underline"
              >
                {t.cookies.learnMore}
              </a>
              <span>•</span>
              <button
                onClick={(e) => { 
                  e.preventDefault();
                  const event = new CustomEvent('openPrivacyPolicy');
                  window.dispatchEvent(event);
                }}
                className="hover:text-gold transition-colors underline bg-transparent border-none cursor-pointer"
              >
                {t.cookies.privacyPolicy}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors text-sm font-medium"
            >
              {t.cookies.reject}
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-3 bg-gold text-royal rounded-lg hover:bg-gold/90 transition-colors text-sm font-bold"
            >
              {t.cookies.accept}
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={acceptCookies}
            className="absolute top-4 right-4 text-white/50 hover:text-gold transition-colors p-1"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

