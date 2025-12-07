import React from 'react';
import { Section } from './Section';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Maria Rodriguez",
    text: "Una experiencia maravillosa. El masaje Bowen me ayudó muchísimo con mi dolor de espalda. ¡Daniela tiene unas manos mágicas!",
    rating: 5
  },
  {
    name: "Thomas Schmidt",
    text: "Sehr professionell und entspannend. Die Atmosphäre im Studio ist traumhaft und ich fühle mich wie neu geboren. Kann ich nur empfehlen!",
    rating: 5
  },
  {
    name: "Elena García",
    text: "Un oasis de paz en Benissa. El tratamiento personalizado fue justo lo que necesitaba para desconectar del estrés diario.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="relative">
      {/* Decorative Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-royal-light/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <Quote className="w-10 h-10 text-gold/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gold-light uppercase tracking-widest text-xs font-medium">
            Client Experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-xl border-t border-white/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="font-serif text-lg text-white/90 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-magenta to-royal flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{review.name}</p>
                  <p className="text-white/50 text-xs">Verifizierter Kunde</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};