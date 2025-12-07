import React from 'react';
import { X, Award } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-royal/95 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Certificate Container */}
      <div className="relative w-full max-w-[650px] max-h-[90vh] overflow-y-auto bg-[#FFFAF0] shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-all animate-fade-in-up mx-auto rounded-sm scrollbar-hide">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="sticky top-3 right-3 z-20 float-right ml-auto block p-2 bg-black/5 hover:bg-black/10 text-[#8B0000] transition-colors rounded-full"
          aria-label="Close Certificate"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Frame Construction: Thick Outer Border + Padding + Thin Inner Border */}
        <div className="p-2 md:p-3 border-[6px] border-[#D4AF37]">
          <div className="h-full w-full border-2 border-[#D4AF37] p-4 md:p-8 relative flex flex-col items-center text-center bg-[#FFFAF0]">
            
            {/* Decorative Corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]"></div>

            {/* Institute Header */}
            <div className="mt-2 mb-4 flex flex-col items-center opacity-90">
               <Award className="w-8 h-8 text-[#D4AF37] mb-1 drop-shadow-sm" />
               <p className="font-serif text-[9px] font-bold text-gray-600 uppercase tracking-widest leading-tight px-4">
                 Lehrinstitut für wirkungsvolle &<br/>Traditionelle Therapiemethoden
               </p>
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl md:text-5xl text-[#8B0000] font-bold tracking-wide mb-1 drop-shadow-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                Zertifikat
            </h2>

            {/* Subtitle */}
            <p className="font-serif text-sm italic text-gray-500 mb-6">
                Wir bescheinigen
            </p>

            {/* Name */}
            <div className="w-full border-b border-gray-200 pb-3 mb-6 max-w-md mx-auto">
              <h3 className="font-serif text-2xl md:text-3xl text-black font-bold px-4">
                  Frau Daniela Böhme
              </h3>
            </div>

            {/* Achievement Text */}
            <p className="font-sans text-gray-800 text-xs leading-relaxed mb-4 max-w-md mx-auto px-4">
                die erfolgreiche Teilnahme an der<br/>
                <span className="font-semibold italic text-[#2E004F]">Intensiv-Ausbildung in Theorie & Praxis</span>
            </p>

            {/* Main Subject */}
            <div className="bg-[#D4AF37]/10 py-2 px-6 rounded-lg mb-6 border border-[#D4AF37]/30 mx-4">
              <h4 className="font-serif text-xl md:text-2xl text-[#2E004F] font-bold">
                  Bowen Therapie Konzept
              </h4>
            </div>

            {/* Seminar Content (Full List) */}
            <div className="w-full text-left mb-8 px-4 md:px-12">
              <p className="text-[10px] text-black font-bold mb-2 underline decoration-[#D4AF37] decoration-2 underline-offset-4 uppercase tracking-wider text-center md:text-left">Seminarinhalte:</p>
              <ul className="text-[10px] md:text-[11px] text-gray-800 font-medium leading-snug space-y-1 list-disc pl-5 marker:text-[#D4AF37]">
                 <li>Sequenzen in Theorie u. Praxis für definierte Körperbereiche</li>
                 <li>Einsatzmöglichkeiten, Grenzen, Indikationen u. Kontraindikationen</li>
                 <li>Verhalten während und nach den Behandlungen</li>
                 <li>Kombinationen von Sequenzen</li>
                 <li>Bedeutung der eigenen inneren Haltung zum Gelingen des Heilungsprozesses</li>
                 <li>Bewusst ausgewählte Körperhaltung/Körpereinsatz</li>
              </ul>
            </div>

            {/* Footer / Date & Signature */}
            <div className="w-full flex flex-row justify-between items-end mt-auto gap-4 px-2 pb-2">
                <div className="text-left">
                  <p className="font-serif text-[10px] text-gray-600">
                      Berlin den, 18.04.2021
                  </p>
                </div>
                
                <div className="text-right flex flex-col items-end max-w-[200px]">
                    <div className="h-10 w-28 relative mb-1">
                       {/* Simulated Signature */}
                       <svg className="absolute bottom-0 right-0 w-full h-full text-[#2E004F]/90" viewBox="0 0 150 50" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M10,40 C30,30 40,10 60,30 S90,45 110,30 S140,20 145,10" />
                          <path d="M20,35 C25,35 30,35 35,35" strokeOpacity="0.5" />
                          <path d="M80,40 C100,38 110,42 120,38" strokeWidth="1" />
                       </svg>
                    </div>
                    <div className="border-t border-gray-400 w-full pt-1">
                        <p className="font-sans text-[8px] font-bold text-gray-900 uppercase leading-tight">Agathe Englisch-Schöneck</p>
                        <p className="font-sans text-[7px] text-gray-600 leading-tight mt-0.5">
                          Dozentin für Ayurvedische & Tibetische Medizin &<br/>wirkungsvolle Therapiemethoden, Heilpraktikerin
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};