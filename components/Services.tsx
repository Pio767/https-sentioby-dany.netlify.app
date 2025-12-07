import React from 'react';
import { Section } from './Section';
import { Sparkles, Clock } from 'lucide-react';
import { Service, PricingTier } from '../types';

const servicesList: Service[] = [
  { 
    title: "Masajes Guacha", 
    description: "Una antigua técnica que restaura el flujo de energía y promueve una relajación profunda.\n\nEine alte Technik, die den Energiefluss wiederherstellt und tiefe Entspannung fördert." 
  },
  { 
    title: "Bowen Therapy", 
    description: "Terapia holística suave, certificada bajo el 'Bowen Therapie Konzept', que despierta la capacidad natural del cuerpo para sanar.\n\nSanfte ganzheitliche Therapie, zertifiziert nach dem 'Bowen Therapie Konzept', die die natürlichen Selbstheilungskräfte weckt.", 
    highlight: true 
  },
  { 
    title: "Relaxation Massage", 
    description: "Suaves movimientos que disuelven el estrés e invitan a una paz absoluta.\n\nSanfte Bewegungen, die Stress abbauen und zu absoluter Ruhe einladen." 
  },
  { 
    title: "Tibetan Massage", 
    description: "Un ritual para equilibrar las energías sutiles y revitalizar el espíritu.\n\nEin Ritual zum Ausgleich subtiler Energien und zur Revitalisierung des Geistes." 
  },
  { 
    title: "Personalized Treatment", 
    description: "Cuidado experto adaptado a ti, respaldado por formación en fisioterapia alemana.\n\nFachkundige, individuell abgestimmte Betreuung mit deutscher Physiotherapie-Ausbildung." 
  },
];

const pricing: PricingTier[] = [
  { duration: "60 min", price: "50,00 €" },
  { duration: "30 min", price: "30,00 €" },
];

export const Services: React.FC = () => {
  return (
    <Section id="services" className="relative overflow-hidden">
      {/* Background Bloom */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magenta/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-royal-light/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">Our Services</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gold"></div>
            <p className="text-gold-light font-sans uppercase tracking-widest text-sm font-medium">Holistic Therapies</p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className={`
                group relative p-8 rounded-xl transition-all duration-500 hover:-translate-y-2
                ${service.highlight 
                  ? 'glass-card border-gold/50 shadow-[0_0_30px_rgba(219,39,119,0.15)]' 
                  : 'glass-card border-white/10 hover:border-magenta/50 hover:shadow-[0_0_20px_rgba(219,39,119,0.1)]'
                }
              `}
            >
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl transition-colors duration-500 ${service.highlight ? 'bg-gold' : 'bg-transparent group-hover:bg-magenta'}`}></div>
              
              <div className="absolute top-6 right-6 text-gold group-hover:text-magenta-light transition-colors duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              
              <h3 className={`font-serif text-2xl mb-4 transition-colors ${service.highlight ? 'text-gold' : 'text-white group-hover:text-magenta-light'}`}>
                {service.title}
              </h3>
              <p className="font-sans text-white/80 text-sm leading-relaxed whitespace-pre-line group-hover:text-white transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="max-w-2xl mx-auto glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border-white/10">
          {/* Inner Glow */}
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-gold/20 rounded-full blur-[80px]"></div>
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-magenta/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="font-serif text-3xl text-white mb-10">Pricing</h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20">
              {pricing.map((tier, idx) => (
                <div key={idx} className="flex flex-col items-center relative group">
                  <div className="absolute inset-0 bg-gold/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center gap-2 text-gold-light mb-3">
                    <Clock className="w-4 h-4" />
                    <span className="uppercase tracking-wider text-xs font-semibold">Duration</span>
                  </div>
                  <span className="font-serif text-5xl md:text-6xl text-white font-medium mb-2 drop-shadow-md">
                    {tier.price}
                  </span>
                  <span className="text-white/70 font-sans text-lg">{tier.duration}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm font-light italic">
                * Consultations include a preliminary assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};