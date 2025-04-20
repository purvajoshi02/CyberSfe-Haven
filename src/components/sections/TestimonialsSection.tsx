import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "The resources and support from this center helped me understand what was happening and take concrete steps to protect myself. I finally feel like I'm regaining control of my life.",
    author: "Sarah K.",
    role: "Survivor",
  },
  {
    id: '2',
    quote: "After months of feeling helpless, the step-by-step safety plan gave me a clear path forward. The support team was compassionate and knowledgeable throughout my journey.",
    author: "Michael R.",
    role: "Community Member",
  },
  {
    id: '3',
    quote: "As a parent whose child experienced cyberstalking, the resources here were instrumental in helping us navigate the situation legally and emotionally. I'm forever grateful.",
    author: "Lisa T.",
    role: "Parent",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stories of Recovery
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Real experiences from individuals who have successfully navigated cyberstalking situations and found their path to safety and healing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Every story is unique, and recovery is a personal journey. With the right support and resources, it is possible to move forward.
          </p>
          <a
            href="/stories"
            className="inline-flex items-center text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors font-medium"
          >
            Read more stories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;