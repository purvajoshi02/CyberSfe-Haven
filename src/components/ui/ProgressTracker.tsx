import React from 'react';
import { Check, Circle } from 'lucide-react';

interface Step {
  id: number;
  name: string;
  description: string;
  status: 'complete' | 'current' | 'upcoming';
}

interface ProgressTrackerProps {
  steps: Step[];
  currentStep: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ steps }) => {
  return (
    <div className="py-8">
      <ol className="relative border-l border-gray-300 dark:border-gray-700 ml-3 md:ml-6">
        {steps.map((step) => {
          const isComplete = step.status === 'complete';
          const isCurrent = step.status === 'current';
          
          return (
            <li key={step.id} className="mb-8 ml-6">
              <span 
                className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ${
                  isComplete 
                    ? 'bg-primary text-white'
                    : isCurrent
                      ? 'bg-primary-light text-primary ring-4 ring-white dark:ring-gray-900'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}
              >
                {isComplete ? (
                  <Check size={16} className="text-white" />
                ) : (
                  <Circle size={16} className={isCurrent ? 'text-primary' : 'text-gray-500 dark:text-gray-400'} />
                )}
              </span>
              
              <h3 className={`flex items-center text-lg font-semibold ${
                isComplete || isCurrent
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {step.name}
                {isCurrent && (
                  <span className="bg-primary-light text-primary text-sm font-medium ml-2 px-2.5 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </h3>
              
              <p className={`mt-1 ${
                isComplete || isCurrent
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ProgressTracker;