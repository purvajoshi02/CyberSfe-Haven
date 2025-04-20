import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3760611/pexels-photo-3760611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            Take Back Control of Your Digital Life
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fadeIn animation-delay-200">
            Expert resources and support for individuals experiencing cyberstalking. You're not alone on this journey.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-400">
            <a
              href="/resources"
              className="bg-white text-primary hover:bg-gray-100 transition-colors font-semibold py-3 px-6 rounded-lg flex items-center justify-center"
            >
              Get Help Now
              <ArrowRight size={20} className="ml-2" />
            </a>
            
            <a
              href="/emergency"
              className="bg-red-600 hover:bg-red-700 text-white transition-colors font-semibold py-3 px-6 rounded-lg flex items-center justify-center"
            >
              Emergency Resources
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;