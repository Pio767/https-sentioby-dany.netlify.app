
import React, { useState, useEffect } from 'react';
import { getGalleryImages } from '../utils/dataLoader';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const galleryImages = getGalleryImages();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Auto-play functionality (pauses on hover or if lightbox is open)
  useEffect(() => {
    if (!isAutoPlaying || isLightboxOpen) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isLightboxOpen, galleryImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    setIsAutoPlaying(false);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-royal/0 via-royal/40 to-royal/0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16">
          <RevealOnScroll direction="right">
            <div>
              <h3 className="text-gold text-xs uppercase tracking-[0.3em] mb-4 ml-1">{t.gallery.badge}</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-xl">{t.gallery.title}</h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="left" delay={200}>
            <div className="mt-6 md:mt-0 text-right">
               <div className="h-[1px] w-32 bg-gold/50 ml-auto mb-2"></div>
               <p className="text-white/60 italic font-serif text-lg">{t.gallery.location}</p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Carousel Container */}
        <RevealOnScroll direction="up" delay={100} duration={1200}>
          <div 
            className="relative w-full h-[50vh] md:h-[76vh] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group border border-white/10 cursor-zoom-in bg-royal/40"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => !isLightboxOpen && setIsAutoPlaying(true)}
            onClick={openLightbox}
          >
            {/* Images */}
            {galleryImages.map((src, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentIndex 
                    ? 'opacity-100 z-10' 
                    : 'opacity-0 z-0'
                }`}
              >
                {/* Main Image (Cover - Zoomed In) */}
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="relative z-10 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  style={{ 
                    // Special cropping for the LAST image (Stones) to show the top
                    // Centered for others
                    objectPosition: index === GALLERY_IMAGES.length - 1 ? 'center 0%' : 'center center' 
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-royal/80 via-transparent to-transparent pointer-events-none z-20"></div>
                
                {/* View Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100 z-30">
                    <div className="bg-black/40 backdrop-blur-md p-4 rounded-full border border-white/20">
                        <ZoomIn className="text-white w-8 h-8" />
                    </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons (Desktop Only - Hidden on mobile to keep clear view) */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/30 text-white backdrop-blur-md border border-white/10 hover:bg-gold hover:text-royal hover:border-gold transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
              aria-label="Previous Image"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/30 text-white backdrop-blur-md border border-white/10 hover:bg-gold hover:text-royal hover:border-gold transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
              aria-label="Next Image"
            >
              <ChevronRight size={32} />
            </button>
            
            {/* Mobile Arrows (Always visible, smaller) */}
             <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-black/20 text-white backdrop-blur-sm border border-white/10"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>
             <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-black/20 text-white backdrop-blur-sm border border-white/10"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-3" onClick={(e) => e.stopPropagation()}>
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'bg-gold w-6 md:w-8 shadow-[0_0_10px_rgba(212,175,55,0.8)]' 
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Current Image Indicator */}
            <div className="absolute bottom-6 right-8 z-40 text-white/80 font-serif italic text-sm md:text-lg tracking-widest hidden md:block">
              {String(currentIndex + 1).padStart(2, '0')} <span className="text-gold mx-2">/</span> {String(galleryImages.length).padStart(2, '0')}
            </div>
          </div>
        </RevealOnScroll>
        
        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mt-4 text-white/30 text-xs uppercase tracking-widest animate-pulse">
           Tap to zoom
        </div>
      </div>

      {/* FULL SCREEN LIGHTBOX */}
      {isLightboxOpen && (
        <div 
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fade-in-up"
            onClick={() => setIsLightboxOpen(false)}
        >
            {/* The Main Frame (Limited size container) */}
            <div 
              className="relative w-full max-w-5xl h-auto max-h-[85vh] bg-royal/95 border border-gold/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-zoom-in-luxury"
              onClick={(e) => e.stopPropagation()} 
            >
                {/* Close Button Attached to Frame */}
                <button 
                    className="absolute top-3 right-3 md:top-4 md:right-4 text-white/70 hover:text-white bg-black/40 hover:bg-flyer-pink transition-colors p-2 rounded-full z-50 backdrop-blur-md border border-white/10"
                    onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
                    aria-label="Close Lightbox"
                >
                    <X size={24} />
                </button>

                {/* Main Image Container */}
                <div className="flex-1 w-full h-full relative flex items-center justify-center p-2 bg-black/20">
                   <img 
                        src={galleryImages[currentIndex]} 
                        alt="Gallery Fullscreen" 
                        className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                    />
                </div>
                
                {/* Caption / Counter */}
                 <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none">
                    <span className="bg-black/40 backdrop-blur-sm px-4 py-1 rounded-full text-white/70 text-xs font-light tracking-widest border border-white/5">
                        {currentIndex + 1} / {galleryImages.length}
                    </span>
                </div>
            </div>

            {/* Lightbox Navigation - Outside the frame for clarity */}
            <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 text-white/50 hover:text-gold transition-colors z-[10000] hover:bg-white/5 rounded-full"
            >
                <ChevronLeft size={40} className="md:w-12 md:h-12" />
            </button>

            <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 text-white/50 hover:text-gold transition-colors z-[10000] hover:bg-white/5 rounded-full"
            >
                <ChevronRight size={40} className="md:w-12 md:h-12" />
            </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
