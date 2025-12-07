
import React from 'react';
import { X } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      {/* Container - kept compact as per previous requests */}
      <div className="relative bg-transparent w-full max-w-md rounded-lg shadow-2xl overflow-hidden animate-fade-in-up max-h-[85vh] flex flex-col items-center">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-white bg-white/80 hover:bg-flyer-pink z-50 transition-all p-2 rounded-full shadow-lg border border-gray-200"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Certificate Image */}
        <div className="w-full bg-white rounded-lg overflow-hidden">
          <img 
            src="https://files.catbox.moe/lm8owe.jpeg" 
            alt="Official Bowen Therapy Certificate" 
            className="w-full h-auto object-contain"
          />
        </div>
        
      </div>
    </div>
  );
};

export default CertificateModal;
