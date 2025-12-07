import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import WelcomeScreen from './components/WelcomeScreen';
import CookieBanner from './components/CookieBanner';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-transparent text-white selection:bg-flyer-pink selection:text-white relative font-sans overflow-hidden">
        
        {/* Welcome Screen - The "Entrance Door" */}
        <WelcomeScreen onEnter={() => setHasEntered(true)} />

        {/* 1. Global Grain/Noise Overlay - The "Film" Texture */}
        <div className="bg-noise"></div>

        {/* 2. Deep Dynamic Background Gradient - Flyer Inspired */}
        
        {/* REMOVED Top-Right Gradient to prevent "rotten green" mixing and satisfy "only left side" request */}
        
        {/* 2.1 Secondary Flyer Violet (Swoosh) Glow from Bottom Left */}
        {/* This stays to provide the "breakthrough" on the left side */}
        <div className="fixed inset-[-50%] z-[-2] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-flyer-violet/60 via-transparent to-transparent animate-pulse-slow mix-blend-screen opacity-80"></div>

        {/* 3. Organic Living Light Orbs (Breathing & Floating) */}
        
        {/* REMOVED Top-Right Pink Orb */}
        
        {/* Electric Violet Orb - Bottom Left - The Flyer Purple Swoosh */}
        <div className="fixed bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] md:w-[700px] md:h-[700px] bg-flyer-violet/50 rounded-full blur-[100px] pointer-events-none z-[-1] mix-blend-screen animate-blob animation-delay-2000 opacity-90"></div>
        
        {/* REMOVED Gold Ambient Breath (Center) - This was causing the muddy/green tint */}

        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
        
        {/* Audio Player: Will auto-start when the user clicks "Enter" on the WelcomeScreen */}
        <AudioPlayer />
        
        {/* Cookie Banner - GDPR Compliance */}
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
};

export default App;
