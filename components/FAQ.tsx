
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { getFAQData } from '../utils/dataLoader';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqData = getFAQData();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getContent = (item: any) => {
    switch(language) {
      case 'de': return { q: item.questionDe, a: item.answerDe };
      case 'en': return { q: item.questionEn, a: item.answerEn };
      default: return { q: item.questionEs, a: item.answerEs };
    }
  };

  return (
    <section id="faq" className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <RevealOnScroll direction="down">
            <h3 className="text-gold text-xs uppercase tracking-[0.3em] mb-4 font-medium">{t.faq.badge}</h3>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">{t.faq.title}</h2>
            <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-6"></div>
          </RevealOnScroll>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => {
            const content = getContent(item);
            const isOpen = openIndex === index;

            return (
              <RevealOnScroll key={item.id} delay={index * 100} direction="up">
                <div className="mb-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                      isOpen 
                        ? 'bg-white/10 border-gold/40 shadow-[0_0_30px_rgba(212,175,55,0.15)]' 
                        : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-gold/30'
                    } border backdrop-blur-md`}
                    aria-expanded={isOpen}
                  >
                    <span className={`font-serif text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
                      {content.q}
                    </span>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-gold text-royal rotate-180' : 'bg-white/10 text-gold group-hover:bg-gold group-hover:text-royal'}`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 md:p-8 bg-royal/40 rounded-2xl border border-white/5 text-white/80 font-light leading-relaxed">
                      {content.a}
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

export default FAQ;