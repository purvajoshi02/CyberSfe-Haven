import React, { useState } from 'react';
import { Phone, AlertTriangle, LifeBuoy, X, Plus } from 'lucide-react';

const EmergencyFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  const emergencyOptions = [
    { 
      id: 'call', 
      label: 'Call Emergency Hotline', 
      icon: <Phone size={20} />, 
      action: () => window.location.href = 'tel:+18001234567',
      color: 'bg-red-500 hover:bg-red-600'
    },
    { 
      id: 'report', 
      label: 'Report Incident', 
      icon: <AlertTriangle size={20} />, 
      action: () => window.location.href = '/report',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    { 
      id: 'support', 
      label: 'Get Immediate Support', 
      icon: <LifeBuoy size={20} />, 
      action: () => window.location.href = '/support/immediate',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
  ];
  
  return (
    <div className="fixed z-40 bottom-20 right-4">
      {/* Emergency options */}
      {isOpen && (
        <div className="flex flex-col items-end space-y-3 mb-4">
          {emergencyOptions.map((option, index) => (
            <button
              key={option.id}
              onClick={option.action}
              className={`${option.color} text-white rounded-full shadow-lg flex items-center animate-slideInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={option.label}
            >
              <div className="p-3">{option.icon}</div>
              <span className="pr-4 font-medium whitespace-nowrap">{option.label}</span>
            </button>
          ))}
        </div>
      )}
      
      {/* Main FAB button */}
      <button
        onClick={toggleOpen}
        className={`bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}
        aria-label={isOpen ? 'Close emergency options' : 'Open emergency options'}
      >
        {isOpen ? <X size={24} /> : <Plus size={24} />}
      </button>
    </div>
  );
};

export default EmergencyFab;