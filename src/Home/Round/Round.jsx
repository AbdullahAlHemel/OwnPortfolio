import React from 'react';
import Group1910 from '../../assets/Group1910.png';

const Round = () => {
  return (
    <section className="py-12  relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Image Container */}
          <div 
            className="relative w-full max-w-4xl mx-auto"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div className="absolute inset-0 rounded-2xl  -z-10"></div>
            <img 
              src={Group1910} 
              alt="Decorative" 
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Round;
