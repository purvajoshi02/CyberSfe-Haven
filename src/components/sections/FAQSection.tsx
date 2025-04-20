import React from 'react';
import Accordion from '../../components/ui/Accordion';
import { FAQ } from '../../types';

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is cyberstalking?',
    answer: 'Cyberstalking is the use of the Internet, email, or other electronic communications to stalk, harass, or threaten someone. It can include monitoring someone online, sending unwanted messages, spreading rumors, identity theft, or making threats. It\'s a form of stalking that uses technology to track, intimidate, or harass a victim.',
    category: 'basics',
  },
  {
    id: '2',
    question: 'How do I know if I\'m being cyberstalked?',
    answer: 'Signs of cyberstalking may include receiving multiple unwanted messages, having your online activities monitored, discovering your private information being shared without consent, receiving threats, or noticing someone consistently appearing in your digital spaces. If someone\'s online behavior makes you feel scared, threatened, or harassed, you may be experiencing cyberstalking.',
    category: 'basics',
  },
  {
    id: '3',
    question: 'What should I do first if I think I\'m being cyberstalked?',
    answer: 'First, prioritize your safety. Document everything, including messages, emails, and social media posts. Change your passwords and privacy settings on all accounts. Consider blocking the person on all platforms. Tell trusted friends or family about the situation. If there are threats to your physical safety, contact local law enforcement immediately. Then reach out to a cyberstalking support organization for further guidance.',
    category: 'first-steps',
  },
  {
    id: '4',
    question: 'Is cyberstalking illegal?',
    answer: 'Yes, cyberstalking is illegal in many jurisdictions. Laws vary by location, but many countries and states have specific statutes that address cyberstalking, online harassment, and electronic communications used to stalk or threaten. These laws typically classify serious cyberstalking as a criminal offense that can result in jail time, fines, and restraining orders.',
    category: 'legal',
  },
  {
    id: '5',
    question: 'How can I protect my devices from spyware or tracking?',
    answer: 'To protect your devices: regularly update your operating system and applications, use strong, unique passwords for all accounts, enable two-factor authentication, install reputable antivirus/anti-malware software, be cautious about which apps you install, regularly check for unfamiliar apps or processes running on your device, consider using a VPN for privacy, and have your devices professionally checked if you suspect tampering.',
    category: 'security',
  },
  {
    id: '6',
    question: 'What evidence should I collect about cyberstalking?',
    answer: 'Document everything related to the cyberstalking: take screenshots of messages, emails, social media posts, and comments (include visible dates and times); save phone records; keep a detailed log of all incidents with dates, times, and descriptions; note any witnesses; record any in-person encounters; and store this evidence securely in multiple locations. This documentation is crucial if you decide to pursue legal action or need to obtain a restraining order.',
    category: 'documentation',
  },
  {
    id: '7',
    question: 'How do I report cyberstalking to law enforcement?',
    answer: 'Contact your local police department to file a report. Bring all the evidence you\'ve collected, including screenshots, messages, and your incident log. Be specific about any threats made. If the response isn\'t helpful, try contacting your county sheriff\'s office or state police. For serious threats, consider reporting to the FBI\'s Internet Crime Complaint Center (IC3). Legal advocacy groups specializing in cyberstalking can also provide guidance through this process.',
    category: 'legal',
  },
  {
    id: '8',
    question: 'Can I get a restraining order against a cyberstalker?',
    answer: 'Yes, in many jurisdictions you can obtain a restraining order (also called a protection order or no-contact order) against a cyberstalker. The process varies by location, but typically involves filing a petition at your local courthouse, providing evidence of the stalking behavior, and attending a hearing. These orders can prohibit the stalker from contacting you through any medium, including digital communications.',
    category: 'legal',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Find answers to common questions about cyberstalking, digital safety, and available resources.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} defaultOpen="1" />
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Don't see your question here? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              Contact Our Support Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;