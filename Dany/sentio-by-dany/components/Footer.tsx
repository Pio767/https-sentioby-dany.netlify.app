import React from 'react';
import { MapPin, Phone, Mail, Facebook, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-royal-dark border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a002e] to-royal pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-3xl text-white mb-2">Visit Us</h3>
              <p className="text-magenta-light uppercase tracking-widest text-sm font-semibold">SeRenDipity Studio</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-magenta/50 group-hover:bg-magenta/10 transition-colors">
                  <MapPin className="w-5 h-5 text-gold group-hover:text-magenta transition-colors" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Address</p>
                  <p className="text-white/70 font-light">Carrer Mossen Francisco Cabrera 5<br/>03720 Benissa, Alicante</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-magenta/50 group-hover:bg-magenta/10 transition-colors">
                  <Phone className="w-5 h-5 text-gold group-hover:text-magenta transition-colors" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Phone / WhatsApp</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+34711079714" className="text-white/70 hover:text-gold transition-colors font-light">+34 711 079 714</a>
                    <a href="tel:+491736292133" className="text-white/70 hover:text-gold transition-colors font-light">+49 173 62 92 133</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-magenta/50 group-hover:bg-magenta/10 transition-colors">
                  <Mail className="w-5 h-5 text-gold group-hover:text-magenta transition-colors" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Email</p>
                  <a href="mailto:sentio.wohlfuehlen@gmail.com" className="text-white/70 hover:text-gold transition-colors font-light">
                    sentio.wohlfuehlen@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6">
               <a 
                href="#" 
                className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              >
                 <Facebook className="w-6 h-6" />
                 <span className="text-sm uppercase tracking-widest hover:underline">Follow on Facebook</span>
               </a>
            </div>
          </div>

          {/* Booking Note / Map Container */}
          <div className="flex flex-col justify-between glass-card p-8 rounded-xl border-white/10">
             <div className="space-y-6">
                <h3 className="font-serif text-2xl text-white">Appointments</h3>
                <p className="text-white/80 font-light leading-relaxed">
                  Treatments are available by appointment only to ensure your privacy and tranquility.
                </p>
                
                <div className="bg-royal/60 p-6 rounded-lg border border-gold/20">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="w-5 h-5 text-magenta" />
                    <span className="text-magenta font-medium uppercase text-sm tracking-wider">Booking Info</span>
                  </div>
                  <p className="text-white italic font-serif text-lg">
                    "Booking by Ramona or by Dany"
                  </p>
                </div>
             </div>

             {/* Google Map Embed - Specific Business Location */}
             <div className="mt-8 h-64 w-full bg-royal rounded-lg overflow-hidden shadow-lg border border-white/10 relative group">
                <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=38.71384,0.04473+(Sentio%20by%20Dany)&z=16&output=embed"
                    title="Sentio by Dany Location"
                    className="w-full h-full filter grayscale-[30%] hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
                >
                </iframe>
             </div>
          </div>

        </div>

        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-white/40 text-xs font-light uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Sentio by Dany. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};