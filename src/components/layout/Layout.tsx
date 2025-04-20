import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from '../safety/CookieConsent';
import SessionTimeoutWarning from '../safety/SessionTimeoutWarning';
import ChatBot from '../chat/chatbot';
import EmergencyFab from '../EmergencyFab';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <ChatBot />
      <EmergencyFab />
      <CookieConsent />
      <SessionTimeoutWarning />
    </div>
  );
};

export default Layout;