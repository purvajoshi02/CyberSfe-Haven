import React from 'react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="mb-4">
        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 italic mb-6 flex-grow">
        {testimonial.quote}
      </p>
      
      <div>
        <p className="text-gray-900 dark:text-white font-semibold">{testimonial.author}</p>
        {testimonial.role && (
          <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;