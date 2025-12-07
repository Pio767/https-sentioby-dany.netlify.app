import React from 'react';
import { Section } from './Section';

export const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop", // Facial/Relaxation
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop", // Towels & Flowers
    "https://images.unsplash.com/photo-1598905858480-f03f19515c35?q=80&w=600&auto=format&fit=crop", // Oils & Stones
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop", // Spa Interior
  ];

  return (
    <Section id="gallery" className="bg-royal">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative group overflow-hidden aspect-square rounded-sm">
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-royal/20 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};