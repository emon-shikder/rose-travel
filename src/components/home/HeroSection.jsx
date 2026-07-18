import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2940&auto=format&fit=crop')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6">
        <h1 
          className="text-5xl md:text-7xl font-extrabold font-heading leading-tight mb-6 tracking-tight animate-fade-in-up"
          style={{ animationDelay: '0ms' }}
        >
          Discover the World with <span className="text-primaryRed">RoseTravel</span>
        </h1>
        <p 
          className="text-lg md:text-xl mb-10 opacity-90 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          Experience premium journeys, unforgettable adventures, and luxurious stays tailored just for you.
        </p>
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <button className="btn bg-primaryRed text-white hover:bg-primaryDark border-none rounded-full px-8 py-3 text-lg h-auto min-h-0 shadow-lg hover:-translate-y-1 transition-transform">
            Start Your Journey
          </button>
          <button className="btn glass text-white hover:bg-white/30 border-white/30 rounded-full px-8 py-3 text-lg h-auto min-h-0 hover:-translate-y-1 transition-transform">
            Explore Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
