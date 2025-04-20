import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    
    if (!hasConsented) {
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };
  
  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };
  
  if (!showConsent) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 p-4 md:p-6 border-t border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-4 md:mb-0 pr-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Cookie Consent</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
            By clicking "Accept", you consent to our use of cookies.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <a href="/privacy" className="text-primary hover:underline">Learn more about our Privacy Policy</a>
          </p>
        </div>
        
        <div className="flex items-center">
          <button
            onClick={declineCookies}
            className="mr-3 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setShowConsent(false)}
            className="ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            aria-label="Close cookie consent banner"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;