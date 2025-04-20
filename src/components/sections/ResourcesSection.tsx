import React, { useState } from 'react';
import ResourceCard from '../ui/ResourceCard';
import { Resource } from '../../types';

const resources: Resource[] = [
  {
    id: '1',
    title: 'Legal Protection Guide',
    description: 'Learn about restraining orders, police reports, and legal resources available to cyberstalking victims.',
    icon: 'scale',
    url: '/resources/legal',
    isProtected: false,
  },
  {
    id: '2',
    title: 'Digital Security Toolkit',
    description: 'Essential tools and techniques to secure your devices, accounts, and digital footprint.',
    icon: 'shield',
    url: '/resources/security',
    isProtected: false,
  },
  {
    id: '3',
    title: 'Safety Planning Workbook',
    description: 'Create a personalized safety plan to protect yourself online and offline.',
    icon: 'clipboard',
    url: '/resources/safety-plan',
    isProtected: true,
  },
  {
    id: '4',
    title: 'Documentation Guide',
    description: 'How to properly document harassment and build a case for authorities.',
    icon: 'file',
    url: '/resources/documentation',
    isProtected: false,
  },
  {
    id: '5',
    title: 'Support Network Directory',
    description: 'Connect with therapists, support groups, and specialized resources in your area.',
    icon: 'users',
    url: '/resources/support-network',
    isProtected: false,
  },
  {
    id: '6',
    title: 'Recovery & Healing',
    description: 'Coping strategies, therapeutic resources, and steps toward healing and recovery.',
    icon: 'heart',
    url: '/resources/recovery',
    isProtected: true,
  },
];

const ResourcesSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleResourceSelect = (resource: Resource) => {
    setSelectedResource(resource);
    if (resource.isProtected) {
      setShowModal(true);
    } else {
      // Navigate to resource
      console.log(`Navigating to ${resource.url}`);
    }
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would be replaced with actual authentication logic
    if (password === '1234') {
      setShowModal(false);
      setPassword('');
      setError('');
      // Navigate to resource
      console.log(`Authenticated successfully for ${selectedResource?.url}`);
    } else {
      setError('Incorrect password. Please try again or contact support.');
    }
  };
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Resources & Support
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Access our comprehensive collection of guides, tools, and resources designed to help you address cyberstalking situations safely and effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onSelect={handleResourceSelect}
            />
          ))}
        </div>
      </div>
      
      {/* Password Protection Modal */}
      {showModal && selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 relative animate-fadeIn">
            <button
              onClick={() => {
                setShowModal(false);
                setPassword('');
                setError('');
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Protected Resource
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This resource contains sensitive information. Please enter the access password provided by your support professional.
            </p>
            
            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Access Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
              )}
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setPassword('');
                    setError('');
                  }}
                  className="mr-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  Access Resource
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResourcesSection;