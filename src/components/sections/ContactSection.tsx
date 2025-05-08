import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Emergency Contact
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            If you're in immediate danger, please contact emergency services or reach out to one of our support channels.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <Phone size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">24/7 Hotline</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our crisis support line is available 24 hours a day, 7 days a week.
              </p>
              <a
                href="tel:+18001234567"
                className="text-primary hover:text-primary-dark font-semibold text-lg"
              >
                1-800-123-4567
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <Mail size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Send us a message and we'll respond as soon as possible.
              </p>
              <a
                href="mailto:help@cybersafehaven.org"
                className="text-primary hover:text-primary-dark font-semibold"
              >
                help@cybersafehaven.org
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Local Centers</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Find support centers and resources in your area.
              </p>
              <a
                href="/resources/local"
                className="text-primary hover:text-primary-dark font-semibold"
              >
                Find Local Resources
              </a>
            </div>
          </div>
          
          <div className="mt-12 bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Need Immediate Help?
            </h3>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700 dark:text-red-300">
                    If you believe you are in immediate physical danger, please contact emergency service number 112 right away.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  National Resources
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <span className="font-medium">National Domestic Violence Hotline:</span> 1800 212 9131
                  </li>
                  <li>
                    <span className="font-medium">National Sexual Assault Hotline:</span> 1800 656 4673
                  </li>
                  <li>
                    <span className="font-medium">Women Helpline number:</span> 181
                  </li>

                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Online Resources
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <a href="https://www.thehotline.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      The Hotline
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rainn.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      RAINN
                    </a>
                  </li>
                  <li>
                    <a href="https://www.stopbullying.gov" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      StopBullying.gov
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
