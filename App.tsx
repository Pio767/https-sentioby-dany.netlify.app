import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen candlelight-bg selection:bg-magenta selection:text-white">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
      
      {/* Background Music Player */}
      <AudioPlayer />
      
      {/* Sticky CTA for Mobile (WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="https://wa.me/34711079714" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-colors border-2 border-white"
          aria-label="Chat on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          </svg>
        </a>
      </div>
    </main>
  );
};

export default App;