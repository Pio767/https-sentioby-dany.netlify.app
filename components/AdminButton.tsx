import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

const AdminButton: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Sprawdź czy użytkownik jest zalogowany przy starcie
  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    const authExpiry = localStorage.getItem('adminAuthExpiry');
    
    if (auth === 'true' && authExpiry) {
      const expiryTime = parseInt(authExpiry);
      if (Date.now() < expiryTime) {
        setIsAuthenticated(true);
      } else {
        // Sesja wygasła
        localStorage.removeItem('adminAuth');
        localStorage.removeItem('adminAuthExpiry');
      }
    }
  }, []);

  // Kombinacja klawiszy: Ctrl+Shift+A
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        if (!isAuthenticated) {
          setShowLogin(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAuthenticated]);

  // Event listener dla ukrytego przycisku w Footer
  useEffect(() => {
    const handleOpenAdmin = () => {
      if (!isAuthenticated) {
        setShowLogin(true);
      }
    };
    window.addEventListener('openAdminPanel', handleOpenAdmin);
    return () => window.removeEventListener('openAdminPanel', handleOpenAdmin);
  }, [isAuthenticated]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
    // Sesja ważna przez 24 godziny
    localStorage.setItem('adminAuthExpiry', (Date.now() + 24 * 60 * 60 * 1000).toString());
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminAuthExpiry');
  };

  if (isAuthenticated) {
    return <AdminPanel onLogout={handleLogout} />;
  }

  return (
    <>
      {/* Ukryty przycisk - będzie dodany do Footer */}
      <button
        onClick={() => setShowLogin(true)}
        className="admin-access-button fixed bottom-4 left-4 w-10 h-10 bg-royal/30 hover:bg-royal/60 border border-gold/20 hover:border-gold/40 rounded-full flex items-center justify-center text-gold/40 hover:text-gold transition-all opacity-20 hover:opacity-100 z-50 shadow-lg backdrop-blur-sm"
        title="Panel Administratora (Ctrl+Shift+A)"
        aria-label="Admin Panel"
      >
        <Settings size={18} />
      </button>

      {showLogin && (
        <AdminLogin
          onSuccess={handleLoginSuccess}
          onClose={() => setShowLogin(false)}
        />
      )}
    </>
  );
};

export default AdminButton;

