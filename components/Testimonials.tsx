
import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp, Languages } from 'lucide-react';
import { getTestimonialsData } from '../utils/dataLoader';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';
import { translateText } from '../utils/translator';

const TestimonialCard: React.FC<{ testimonial: any }> = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [isTranslated, setIsTranslated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();

  const MAX_LENGTH = 150;
  const originalText = testimonial.text;
  const isLongText = originalText.length > MAX_LENGTH;

  const currentText = isTranslated ? translatedText : originalText;
  
  const displayText = isExpanded || !isLongText 
    ? currentText 
    : `${currentText?.slice(0, MAX_LENGTH)}...`;

  const handleTranslate = async () => {
    if (isTranslated) {
      setIsTranslated(false);
      return;
    }
    
    setIsLoading(true);
    const translation = await translateText(originalText, testimonial.lang, language);
    setTranslatedText(translation);
    setIsTranslated(true);
    setIsLoading(false);
  };

  return (
    <div 
      className={`glass-panel p-6 md:p-10 rounded-2xl relative group flex flex-col transition-all duration-500 ${isExpanded ? 'h-auto' : 'h-full'}`}
    >
      <div className="absolute -top-6 -left-2 text-white/10 group-hover:text-white/20 transition-colors duration-700 transform group-hover:-translate-y-2">
        <Quote size={60} className="md:w-20 md:h-20" />
      </div>
      
      <div className="flex mb-6 text-gold relative z-10">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} size={16} fill="#D4AF37" strokeWidth={0} className="drop-shadow-md" />
        ))}
      </div>

      <div className="flex-grow relative z-10 mb-6">
        <p className="text-white/90 font-sans font-light leading-relaxed text-base md:text-lg tracking-wide transition-all duration-300">
          "{displayText}"
        </p>
        
        {isLongText && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-gold hover:text-white text-sm font-medium uppercase tracking-wider flex items-center gap-1 transition-colors focus:outline-none"
          >
            {isExpanded ? (
              <>Read Less <ChevronUp size={14} /></>
            ) : (
              <>Read More <ChevronDown size={14} /></>
            )}
          </button>
        )}
      </div>

      <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gold to-[#b38728] p-[2px] shadow-lg shrink-0">
           <div className="w-full h-full rounded-full bg-royal flex items-center justify-center">
              <span className="text-gold font-serif font-bold text-base md:text-lg">{testimonial.name.charAt(0)}</span>
           </div>
        </div>
        <div className="flex-grow">
           <span className="text-white font-medium tracking-widest text-xs md:text-sm uppercase block">
            {testimonial.name}
          </span>
          <span className="text-white/40 text-[10px] md:text-xs tracking-wider">Client</span>
        </div>
        
        {testimonial.lang !== language && (
          <button 
            onClick={handleTranslate} 
            className="text-gold/50 hover:text-gold transition-colors text-xs uppercase tracking-widest flex items-center gap-1.5 p-2 rounded-md bg-white/5 hover:bg-white/10"
            disabled={isLoading}
          >
            <Languages size={14} />
            {isLoading ? 'Translating...' : (isTranslated ? 'Original' : 'Translate')}
          </button>
        )}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const testimonialsData = getTestimonialsData();

  return (
    <section id="testimonials" className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <RevealOnScroll direction="down">
            <h3 className="text-gold text-xs uppercase tracking-[0.3em] mb-4 font-medium">{t.testimonials.badge}</h3>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">{t.testimonials.title}</h2>
            <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-6"></div>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <RevealOnScroll key={index} delay={index * 100} direction="up">
              <TestimonialCard testimonial={testimonial} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
