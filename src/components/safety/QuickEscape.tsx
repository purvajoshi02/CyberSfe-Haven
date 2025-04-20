import React from 'react';
import { XCircle } from 'lucide-react';
import { useSafety } from '../../context/SafetyContext';

interface QuickEscapeProps {
  isMobile?: boolean;
}

const QuickEscape: React.FC<QuickEscapeProps> = ({ isMobile }) => {
  const { quickEscape } = useSafety();
  
  if (isMobile) {
    return (
      <button
        onClick={quickEscape}
        className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 transition-colors"
        aria-label="Quick escape - immediately leave this site"
      >
        <XCircle size={20} />
      </button>
    );
  }
  
  return (
    <button
      onClick={quickEscape}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md flex items-center transition-colors"
      aria-label="Quick escape - immediately leave this site"
    >
      <XCircle size={16} className="mr-2" />
      Quick Escape
    </button>
  );
};

export default QuickEscape;