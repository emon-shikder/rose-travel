import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primaryDark mb-4">Contact Us</h1>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          Have a question or ready to book your next trip? Reach out to us!
        </p>
      </div>
      
      {/* Placeholder content for Contact */}
      <div className="flex items-center justify-center h-64 bg-base-200 rounded-2xl border-2 border-dashed border-base-300">
        <p className="text-xl text-base-content/50 font-medium">Contact form coming soon...</p>
      </div>
    </div>
  );
};

export default Contact;
