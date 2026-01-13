
import React, { useState, useEffect } from 'react';
import { getServicesData } from '../utils/dataLoader';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';
import { Home } from 'lucide-react';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  // Use useState to ensure data is loaded on client side
  const [servicesData, setServicesData] = useState(() => getServicesData());
  
  useEffect(() => {
    // Reload data when component mounts to get latest from localStorage
    const data = getServicesData();
    
    // Dodajemy usługę Mobile Massage jeśli jej nie ma
    const mobileService = {
      id: 'mobile',
      title: 'Mobile Massage',
      icon: Home,
      descriptionEs: "Masaje a domicilio. Disfrute de un masaje profesional en la comodidad de su propio hogar. Por favor, llámeme o escríbame para concretar los detalles.",
      descriptionDe: "Hausbesuche (Mobile Massage). Genießen Sie eine professionelle Massage ganz bequem bei Ihnen zu Hause. Bitte rufen Sie mich an oder schreiben Sie mir, um die Details zu besprechen.",
      descriptionEn: "Mobile Massage (Home Visits). Enjoy a professional massage in the comfort of your own home. Please call or text me to discuss the details.",
      price60: 50,
      price30: 30
    };
    
    // Sprawdź czy usługa już istnieje
    const hasMobile = data.some((s: any) => s.id === 'mobile');
    if (!hasMobile) {
      setServicesData([...data, mobileService]);
    } else {
      setServicesData(data);
    }
  }, []);

  const getDescription = (service: any) => {
    switch(language) {
      case 'de': return service.descriptionDe;
      case 'en': return service.descriptionEn;
      default: return service.descriptionEs;
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-royal-light/5 rounded-full blur-[100px] animate-breathe pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-24">
          <RevealOnScroll direction="down">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 md:mb-8 drop-shadow-2xl tracking-tight">
              {t.services.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9D976] via-[#FFF] to-[#D4AF37]">{t.services.titleHighlight}</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={100}>
            <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-4 md:mb-8"></div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={200}>
            <p className="text-white/70 max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed px-4">
              {t.services.subtitle}
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const description = getDescription(service);

            return (
              <RevealOnScroll key={service.id} delay={index * 200} direction="up">
                <div 
                  className="glass-panel rounded-3xl p-6 md:p-10 group relative overflow-hidden h-full flex flex-col justify-between"
                >
                  <div className="absolute inset-0 border border-white/5 rounded-3xl z-20 pointer-events-none group-hover:border-gold/30 transition-colors duration-1000"></div>
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/10 rounded-full blur-[80px] transition-all duration-1000 group-hover:bg-gold/20 group-hover:scale-150"></div>
                  
                  <div>
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-6 md:mb-8 relative z-10 gap-4 sm:gap-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
                        <div className="relative p-4 md:p-5 bg-gradient-to-br from-[#3a1c5e] to-[#1a0b2e] rounded-2xl border border-white/10 text-white shadow-2xl transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-700 ease-out">
                          <Icon size={28} className="md:w-8 md:h-8 group-hover:animate-pulse-slow text-white" strokeWidth={1} />
                        </div>
                      </div>

                      <div className="text-left sm:text-right w-full sm:w-auto">
                        <div className="text-gold font-serif font-bold text-xl md:text-2xl tracking-wide">
                          {service.price60.toFixed(2).replace('.', ',')} € <span className="text-xs md:text-sm font-sans font-light text-white/50 uppercase tracking-wider ml-1">{t.services.per60}</span>
                        </div>
                        <div className="text-gold/70 text-base md:text-lg mt-1">
                          {service.price30.toFixed(2).replace('.', ',')} € <span className="text-xs md:text-sm font-sans font-light text-white/30 uppercase tracking-wider ml-1">{t.services.per30}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-gold mb-4 md:mb-6 group-hover:text-white transition-colors duration-500 font-medium tracking-wide">
                      {service.title}
                    </h3>
                    
                    <div className="space-y-5 relative z-10">
                      <p className="text-gold leading-relaxed md:leading-loose text-base md:text-lg font-light tracking-wide group-hover:translate-x-2 transition-transform duration-700">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
