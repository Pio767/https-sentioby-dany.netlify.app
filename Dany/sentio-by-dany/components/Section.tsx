import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, fullWidth = false }) => {
  return (
    <section id={id} className={`relative py-16 md:py-24 ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          {children}
        </div>
      )}
    </section>
  );
};