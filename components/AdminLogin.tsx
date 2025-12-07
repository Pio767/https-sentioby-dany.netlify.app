import React, { useState } from 'react';
import { X, Lock, Shield } from 'lucide-react';

interface AdminLoginProps {
  onSuccess: () => void;
  onClose: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Hasło - można zmienić w kodzie lub przechowywać w zmiennej środowiskowej
  // Dla bezpieczeństwa można użyć hash zamiast plain text
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'sentio2024';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Symulacja opóźnienia dla bezpieczeństwa
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminAuth', 'true');
      onSuccess();
    } else {
      setError('Nieprawidłowe hasło');
      setPassword('');
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in-up">
      <div className="bg-royal border border-gold/30 rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/50 hover:text-gold transition-colors p-1 rounded-full hover:bg-white/5"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/30">
            <Lock className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">Panel Administratora</h2>
          <p className="text-white/60 text-sm">Wprowadź hasło, aby kontynuować</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-white/70 text-sm mb-2">
              Hasło
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
              autoFocus
              disabled={isLoading}
            />
          </div>
          
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm flex items-center gap-2">
              <Shield size={16} />
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full py-3 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-royal border-t-transparent rounded-full animate-spin"></div>
                <span>Logowanie...</span>
              </>
            ) : (
              'Zaloguj się'
            )}
          </button>
        </form>

        <p className="text-white/30 text-xs text-center mt-6">
          Naciśnij Ctrl+Shift+A aby otworzyć panel
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;

