import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../../types';

interface AccordionProps {
  items: FAQ[];
  defaultOpen?: string | null;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpen = null }) => {
  const [openItem, setOpenItem] = useState<string | null>(defaultOpen);
  
  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };
  
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() => toggleItem(item.id)}
            aria-expanded={openItem === item.id}
            aria-controls={`accordion-content-${item.id}`}
          >
            <span className="text-lg font-medium text-gray-900 dark:text-white">
              {item.question}
            </span>
            <ChevronDown 
              size={20} 
              className={`text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                openItem === item.id ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          <div 
            id={`accordion-content-${item.id}`}
            className={`overflow-hidden transition-all duration-300 ${
              openItem === item.id
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
            aria-hidden={openItem !== item.id}
          >
            <div className="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;