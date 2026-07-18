import React from 'react';
import newsletterBg from '../../assets/images/Rectangle 11.png';

const Newsletter = () => {
  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
          style={{ backgroundImage: `url('${newsletterBg}')` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-primaryDark/80 mix-blend-multiply z-0"></div>
          
          <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-4">
                Get the best travel deals directly in your inbox!
              </h2>
              <p className="text-white/80 text-lg">
                Subscribe to our newsletter and never miss out on exclusive discounts, travel tips, and new destination launches.
              </p>
            </div>
            
            <div className="w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="input input-bordered w-full rounded-full focus:outline-none focus:border-accentGold focus:ring-1 focus:ring-accentGold text-base-content" 
                  required
                />
                <button type="submit" className="btn bg-accentGold text-primaryDark hover:bg-yellow-400 border-none rounded-full px-8 shadow-md">
                  Subscribe
                </button>
              </form>
              <p className="text-white/60 text-xs mt-3 text-center md:text-left">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
