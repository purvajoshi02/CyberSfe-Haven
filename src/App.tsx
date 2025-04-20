import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { SafetyProvider } from './context/SafetyContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SafetyProvider>
          <Layout>
            <HomePage />
          </Layout>
        </SafetyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;