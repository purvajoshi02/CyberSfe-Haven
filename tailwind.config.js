/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#8a85ff',
            DEFAULT: '#6c63ff',
            dark: '#5046e5',
          },
          secondary: {
            light: '#ffffff',
            DEFAULT: '#f8f9fa',
            dark: '#e9ecef',
          },
          success: {
            light: '#4ade80',
            DEFAULT: '#22c55e',
            dark: '#16a34a',
          },
          warning: {
            light: '#fcd34d',
            DEFAULT: '#f59e0b',
            dark: '#d97706',
          },
          error: {
            light: '#f87171',
            DEFAULT: '#ef4444',
            dark: '#dc2626',
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-in-out',
          slideInUp: 'slideInUp 0.3s ease-in-out',
          slideInRight: 'slideInRight 0.3s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          slideInUp: {
            '0%': { transform: 'translateY(1rem)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
          slideInRight: {
            '0%': { transform: 'translateX(1rem)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  };