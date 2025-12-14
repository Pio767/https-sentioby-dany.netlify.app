import React from 'react';
import { X, Rss } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';
import { getNewsData } from '../utils/dataLoader';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const newsData = getNewsData();

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-royal-dark/90 border border-gold/20 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 md:p-6 border-b border-gold/10">
          <div className="flex items-center gap-3">
            <Rss className="text-gold" size={24} />
            <h2 className="text-xl md:text-2xl font-serif text-white">{t.news.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <X className="text-white/70" size={20} />
          </button>
        </header>
        
        <main className="p-6 md:p-8 overflow-y-auto">
          {newsData.length === 0 ? (
            <RevealOnScroll>
              <div className="text-center py-12">
                <p className="text-white/60 italic text-lg">{t.news.noNews}</p>
              </div>
            </RevealOnScroll>
          ) : (
            <div className="space-y-8">
              {newsData.map((item, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                    <h3 className="text-gold font-serif text-xl mb-2">{item.title}</h3>
                    <p className="text-white/80 font-light">{item.content}</p>
                    <p className="text-white/40 text-xs mt-4">{item.date}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default NewsModal;
