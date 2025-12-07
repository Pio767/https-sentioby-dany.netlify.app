import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

const AdminButton: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Sprawdź czy użytkownik jest zalogowany przy starcie
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
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
    } catch (e) {
      console.error('Error checking admin auth:', e);
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
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('adminAuthExpiry', (Date.now() + 24 * 60 * 60 * 1000).toString());
      }
    } catch (e) {
      console.error('Error setting auth expiry:', e);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('adminAuth');
        localStorage.removeItem('adminAuthExpiry');
      }
    } catch (e) {
      console.error('Error removing auth:', e);
    }
  };

  if (isAuthenticated) {
    return <AdminPanel onLogout={handleLogout} />;
  }

  return (
    <>
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

