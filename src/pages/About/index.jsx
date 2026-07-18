import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primaryDark mb-4">About Us</h1>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          Learn more about RoseTravel and our mission to provide you with the best travel experiences in the world.
        </p>
      </div>
      
      {/* Placeholder content for About Us */}
      <div className="flex items-center justify-center h-64 bg-base-200 rounded-2xl border-2 border-dashed border-base-300">
        <p className="text-xl text-base-content/50 font-medium">About Us content coming soon...</p>
      </div>
    </div>
  );
};

export default About;
