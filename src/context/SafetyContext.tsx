import React, { createContext, useContext, useState, useEffect } from 'react';

type SafetyContextType = {
  quickEscape: () => void;
  clearHistory: () => void;
  sessionTimeoutWarning: boolean;
  acknowledgeTimeoutWarning: () => void;
  sessionTimeRemaining: number;
};

const SafetyContext = createContext<SafetyContextType | undefined>(undefined);

export const SafetyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessionTimeoutWarning, setSessionTimeoutWarning] = useState(false);
  const [sessionTimeRemaining, setSessionTimeRemaining] = useState(1800); // 30 minutes in seconds
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionTimeRemaining(prev => {
        if (prev <= 300 && prev > 0) { // Show warning in last 5 minutes
          setSessionTimeoutWarning(true);
        }
        return prev - 1 > 0 ? prev - 1 : 0;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Reset session time on user activity
  useEffect(() => {
    const resetTimer = () => {
      setSessionTimeRemaining(1800);
      setSessionTimeoutWarning(false);
    };
    
    window.addEventListener('click', resetTimer);
    window.addEventListener('keypress', resetTimer);
    
    return () => {
      window.removeEventListener('click', resetTimer);
      window.removeEventListener('keypress', resetTimer);
    };
  }, []);
  
  const quickEscape = () => {
    window.location.href = 'https://weather.com'; // Redirect to a neutral site
  };
  
  const clearHistory = () => {
    if (window.history && window.history.pushState) {
      const neutralUrl = 'https://weather.com';
      window.history.pushState({}, document.title, window.location.href);
      window.location.replace(neutralUrl);
    }
  };
  
  const acknowledgeTimeoutWarning = () => {
    setSessionTimeoutWarning(false);
    setSessionTimeRemaining(1800);
  };
  
  return (
    <SafetyContext.Provider 
      value={{ 
        quickEscape, 
        clearHistory,
        sessionTimeoutWarning,
        acknowledgeTimeoutWarning,
        sessionTimeRemaining
      }}
    >
      {children}
    </SafetyContext.Provider>
  );
};

export const useSafety = (): SafetyContextType => {
  const context = useContext(SafetyContext);
  if (context === undefined) {
    throw new Error('useSafety must be used within a SafetyProvider');
  }
  return context;
};