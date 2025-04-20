import React from 'react';
import ProgressTracker from '../ui/ProgressTracker';

const steps = [
  {
    id: 1,
    name: 'Recognize & Document',
    description: 'Identify cyberstalking behaviors and begin documenting all incidents in detail.',
    status: 'complete' as const,
  },
  {
    id: 2,
    name: 'Secure Digital Footprint',
    description: 'Strengthen privacy settings, update passwords, and secure all accounts and devices.',
    status: 'current' as const,
  },
  {
    id: 3,
    name: 'Build Support Network',
    description: 'Connect with trusted friends, family, and professional support resources.',
    status: 'upcoming' as const,
  },
  {
    id: 4,
    name: 'Explore Legal Options',
    description: 'Understand your legal rights and the options available for protection.',
    status: 'upcoming' as const,
  },
  {
    id: 5,
    name: 'Create Safety Plan',
    description: 'Develop a comprehensive plan for both online and offline safety.',
    status: 'upcoming' as const,
  },
  {
    id: 6,
    name: 'Focus on Recovery',
    description: 'Engage in healing practices and self-care throughout your journey.',
    status: 'upcoming' as const,
  },
];

const StepsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Path to Safety
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Follow these guided steps to address cyberstalking effectively. Track your progress and move forward at your own pace.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ProgressTracker steps={steps} currentStep={2} />
          
          <div className="mt-10 flex justify-center">
            <a
              href="/resources/steps"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              Get Detailed Guidance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;