import React, { useState } from 'react';
import { Section } from './Section';
import { Quote, UserCheck, FileText, ChevronRight, Award, ZoomIn } from 'lucide-react';
import { CertificateModal } from './CertificateModal';

export const About: React.FC = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);

  return (
    <Section id="about" className="relative">
      {/* Background splash */}
      <div className="absolute inset-0 bg-royal/40 backdrop-blur-sm"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          {/* Frame decoration */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-magenta/30 rounded-sm transform -rotate-2"></div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 rounded-sm transform rotate-2"></div>
          
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
             <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop" 
                alt="Daniela Böhme - Therapy Session" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
             />
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-royal to-transparent p-6 pt-20">
                <p className="text-gold font-serif text-2xl italic">Daniela Böhme</p>
                <p className="text-xs text-white/80 uppercase tracking-wider mt-1">Physiotherapist</p>
             </div>
          </div>
        </div>

        <div className="space-y-8 order-1 md:order-2">
          <div className="space-y-4">
             <div className="flex items-center gap-3 text-magenta mb-2">
                <UserCheck className="w-5 h-5" />
                <span className="text-sm uppercase tracking-widest font-semibold">About the Specialist</span>
             </div>
             <h2 className="font-serif text-4xl md:text-5xl text-white">Expertise & <span className="text-gold-light">Care</span></h2>
             <div className="w-24 h-1 bg-gradient-to-r from-magenta to-gold"></div>
          </div>

          <div className="font-sans text-white/90 leading-relaxed space-y-6 text-lg font-light">
            <p>
              Welcome to <span className="text-magenta-light font-medium">Sentio by Dany</span>. I am Daniela Böhme, dedicated to restoring balance and wellness to your body and mind.
            </p>
            
            <p>
              My journey in physiotherapy began in Germany, where I was formally trained as a physiotherapist (<span className="italic text-gold">Formada como fisioterapeuta en Alemania</span>).
            </p>

            {/* High-Visibility Certificate Trigger */}
            <div className="py-4">
              <button 
                onClick={() => setIsCertOpen(true)}
                className="w-full group relative overflow-hidden rounded-xl bg-[#FFFAF0] border-2 border-gold/50 shadow-[0_0_20px_rgba(255,183,3,0.15)] hover:shadow-[0_0_30px_rgba(255,183,3,0.3)] transition-all duration-300 transform hover:-translate-y-1 text-left"
              >
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
                
                <div className="relative p-5 flex items-center gap-5">
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-14 h-14 bg-royal text-gold flex items-center justify-center rounded-full border-2 border-gold/30 shadow-inner">
                    <Award className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-royal font-serif font-bold text-lg leading-tight mb-1">
                      Zertifikat: Bowen Therapie
                    </p>
                    <p className="text-royal/70 text-xs uppercase tracking-wider font-semibold">
                      Click to view Official Credential
                    </p>
                  </div>

                  <div className="bg-gold/10 p-2 rounded-full group-hover:bg-gold/20 transition-colors">
                    <ZoomIn className="w-5 h-5 text-royal/60 group-hover:text-royal" />
                  </div>
                </div>
                
                {/* Hover Stripe */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-magenta to-gold group-hover:w-full transition-all duration-500"></div>
              </button>
            </div>
            
            <p>
               At <span className="text-magenta font-medium">SeRenDipity Studio</span>, I create a personalized sanctuary where every treatment is tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>

      <CertificateModal isOpen={isCertOpen} onClose={() => setIsCertOpen(false)} />
    </Section>
  );
};