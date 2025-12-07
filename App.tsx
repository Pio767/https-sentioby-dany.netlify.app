import React, { useState } from 'react';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-royal text-white">
        {/* SIMPLE TEST - If you see this, React is working */}
        <div className="fixed top-4 left-4 z-[999999] bg-red-500 text-white p-8 rounded-lg text-2xl font-bold">
          REACT IS WORKING!
        </div>
        
        {/* Simple content test */}
        <div className="pt-20 px-8">
          <h1 className="text-4xl font-bold mb-4">Test Page</h1>
          <p className="text-xl">If you see this text, the page is working!</p>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;
