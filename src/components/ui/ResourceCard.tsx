import React from 'react';
import { Lock } from 'lucide-react';
import { Resource } from '../../types';

interface ResourceCardProps {
  resource: Resource;
  onSelect: (resource: Resource) => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onSelect }) => {
  const handleCardClick = () => {
    onSelect(resource);
  };
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="text-primary dark:text-primary-light" aria-hidden="true">
            {/* This would be replaced with appropriate icon based on resource.icon */}
            <span className="text-3xl">📄</span>
          </div>
          
          {resource.isProtected && (
            <Lock size={18} className="text-gray-500 dark:text-gray-400" />
          )}
        </div>
        
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
          {resource.title}
        </h3>
        
        <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">
          {resource.description}
        </p>
        
        <div className="mt-4 flex justify-end">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-light text-primary">
            {resource.isProtected ? 'Protected Resource' : 'Resource'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;