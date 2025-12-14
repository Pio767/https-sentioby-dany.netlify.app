
import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 relative z-10 overflow-hidden">
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Column */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <RevealOnScroll direction="right" delay={100}>
              <div className="inline-block mb-4 px-4 py-1 border border-gold/20 rounded-full bg-white/5 backdrop-blur-md">
                 <h3 className="text-gold text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium">{t.about.badge}</h3>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="right" delay={200}>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 md:mb-10 leading-tight drop-shadow-2xl">
                {t.about.title}
              </h2>
            </RevealOnScroll>
            
            <div className="space-y-6 md:space-y-8 text-gray-100 leading-relaxed font-light text-base md:text-xl">
              <RevealOnScroll direction="up" delay={300}>
                <p>
                  {t.about.p1}
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll direction="up" delay={400}>
                <p className="text-white/70">
                  {t.about.p2}
                </p>
              </RevealOnScroll>

            </div>
          </div>

          {/* Image Column - Responsive Frame */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative mt-8 lg:mt-0">
             {/* Background Atmosphere */}
             <div className="absolute w-[140%] h-[140%] bg-gradient-to-tr from-flyer-pink/10 via-flyer-violet/5 to-royal/40 blur-[80px] rounded-full opacity-60 animate-pulse-slower pointer-events-none"></div>
             
             <RevealOnScroll direction="zoom" delay={200} duration={1500}>
               <div className="relative group perspective-1000 w-[85vw] max-w-[320px] md:max-w-[480px]">
                 
                 {/* 1. Decorative Wireframe - Rectangular & Pink-ish Gold */}
                 <div className="absolute -inset-6 border border-magenta/20 z-0 transform rotate-3 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105 opacity-60"></div>
                 
                 {/* 2. Backdrop - MAGENTA/PINK LAYER */}
                 <div className="absolute -inset-4 bg-magenta/30 border border-magenta/50 backdrop-blur-sm z-0 transform -rotate-2 transition-transform duration-700 group-hover:-rotate-3 group-hover:scale-105 shadow-[0_0_30px_rgba(219,39,119,0.3)]"></div>

                 {/* 3. Main Frame Container - SOLID GOLD GRADIENT */}
                 {/* Aspect Ratio hack or explicit height - responsive */}
                 <div className="relative w-full aspect-[3/4] p-1.5 md:p-2 bg-gradient-to-br from-[#F9D976] via-[#D4AF37] to-[#B38728] border border-white/30 shadow-2xl z-10 isolate transition-transform duration-700 hover:scale-[1.01]">
                    
                    {/* Inner Content Container */}
                    <div className="relative w-full h-full overflow-hidden bg-royal shadow-inner">
                        
                        {/* Inner Shine Effect */}
                        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-gold/10 via-transparent to-transparent opacity-20 mix-blend-overlay"></div>
                        
                        <img 
                          src="/assets/daniela-bohme.jpeg" 
                          alt="Daniela Böhme" 
                          className="w-full h-full object-cover object-top transition-transform duration-[2000ms] ease-out group-hover:scale-105 will-change-transform"
                        />
                        
                        {/* Floating Glass Name Badge - Rectangular */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-[85%]">
                           <div className="bg-black/60 backdrop-blur-xl border border-gold/30 p-3 md:p-4 text-center transform transition-all duration-500 hover:bg-black/80 hover:border-gold hover:-translate-y-1 shadow-lg">
                              <span className="block font-serif italic text-gold text-lg md:text-3xl tracking-wide drop-shadow-md">Daniela Böhme</span>
                              <div className="h-[1px] w-10 md:w-12 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2"></div>
                           </div>
                        </div>
                    </div>
                 </div>
               </div>
             </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
