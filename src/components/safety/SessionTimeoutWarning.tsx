import React from 'react';
import { Clock } from 'lucide-react';
import { useSafety } from '../../context/SafetyContext';

const SessionTimeoutWarning: React.FC = () => {
  const { sessionTimeoutWarning, acknowledgeTimeoutWarning, sessionTimeRemaining } = useSafety();
  
  if (!sessionTimeoutWarning) return null;
  
  const minutes = Math.floor(sessionTimeRemaining / 60);
  const seconds = sessionTimeRemaining % 60;
  
  return (
    <div className="fixed bottom-4 right-4 max-w-md bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-800 rounded-lg shadow-lg p-4 z-50 animate-slideInRight">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Clock className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
            Session Timeout Warning
          </h3>
          <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
            <p>
              Your session will expire in {minutes}:{seconds < 10 ? `0${seconds}` : seconds} minutes due to inactivity.
            </p>
            <p className="mt-1">
              For security reasons, we automatically log you out after a period of inactivity. Any activity will reset this timer.
            </p>
          </div>
          <div className="mt-3">
            <button
              type="button"
              onClick={acknowledgeTimeoutWarning}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Continue Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionTimeoutWarning;