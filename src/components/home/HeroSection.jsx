import React from 'react';
import { FaStar, FaLocationDot, FaUserGroup, FaCalendarDay, FaChevronDown } from 'react-icons/fa6';
import heroImage from '../../assets/images/Group 13 (1) (1).png';
import card1 from '../../assets/images/Rectangle 8.png';
import card2 from '../../assets/images/Rectangle 9.png';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[110vh] w-full flex flex-col items-center justify-center bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: `url('${heroImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a3c24]/80 via-[#2a3c24]/40 to-[#2a3c24]/90 z-0 mix-blend-multiply"></div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 text-center text-white w-full max-w-6xl px-6 flex flex-col items-center mt-20">
        
        <h1 
          className="text-5xl md:text-7xl font-sans font-medium leading-tight mb-6 tracking-tight animate-fade-in-up drop-shadow-lg"
          style={{ animationDelay: '0ms' }}
        >
          The Adventures Begin Here
        </h1>
        <p 
          className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in-up max-w-2xl font-light drop-shadow-md"
          style={{ animationDelay: '200ms' }}
        >
          We guide you to explore the world, starting your adventure.
        </p>

        {/* Filter Bar */}
        <div 
          className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl md:rounded-full p-4 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in-up shadow-2xl"
          style={{ animationDelay: '400ms' }}
        >
          {/* Destination */}
          <div className="flex flex-col items-start px-6 border-b md:border-b-0 md:border-r border-white/20 w-full md:w-auto pb-4 md:pb-0">
            <span className="text-accentLime text-xs font-semibold uppercase tracking-wider mb-1">Select Destination</span>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white/80 transition-colors w-full justify-between md:justify-start">
              <FaLocationDot className="h-4 w-4 opacity-70" />
              <span className="font-medium text-lg">Choose</span>
              <FaChevronDown className="h-3 w-3 ml-2 opacity-70" />
            </div>
          </div>

          {/* Travel Plan */}
          <div className="flex flex-col items-start px-6 border-b md:border-b-0 md:border-r border-white/20 w-full md:w-auto pb-4 md:pb-0">
            <span className="text-accentLime text-xs font-semibold uppercase tracking-wider mb-1">Select Travel Plan</span>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white/80 transition-colors w-full justify-between md:justify-start">
              <FaUserGroup className="h-4 w-4 opacity-70" />
              <span className="font-medium text-lg">Choose</span>
              <FaChevronDown className="h-3 w-3 ml-2 opacity-70" />
            </div>
          </div>

          {/* Budget */}
          <div className="flex flex-col items-start px-6 border-b md:border-b-0 md:border-r border-white/20 w-full md:w-auto pb-4 md:pb-0">
            <span className="text-accentLime text-xs font-semibold uppercase tracking-wider mb-1">Set Budget</span>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white/80 transition-colors w-full justify-between md:justify-start">
              <span className="font-medium text-lg opacity-70">$</span>
              <span className="font-medium text-lg">Set Range</span>
              <FaChevronDown className="h-3 w-3 ml-2 opacity-70" />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col items-start px-6 w-full md:w-auto pb-4 md:pb-0">
            <span className="text-accentLime text-xs font-semibold uppercase tracking-wider mb-1">Select Date</span>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white/80 transition-colors w-full justify-between md:justify-start">
              <FaCalendarDay className="h-4 w-4 opacity-70" />
              <span className="font-medium text-lg">Choose</span>
              <FaChevronDown className="h-3 w-3 ml-2 opacity-70" />
            </div>
          </div>

          {/* Search Button */}
          <button className="btn bg-white text-primaryDark hover:bg-gray-100 border-none rounded-full px-8 py-3 text-base h-auto min-h-0 font-bold shadow-md hover:-translate-y-0.5 transition-transform w-full md:w-auto mt-2 md:mt-0">
            Search Destination
          </button>
        </div>
      </div>

      {/* Overlapping Cards Container */}
      <div className="absolute -bottom-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 justify-center z-20">
        
        {/* Card 1 */}
        <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex items-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer h-48">
          <div className="w-2/5 h-full relative">
            <img src={card1} alt="Yogyakarta" className="w-full h-full object-cover" />
          </div>
          <div className="w-3/5 p-6 text-white text-left">
            <h3 className="text-xl font-bold font-heading mb-2 leading-tight">3D2N Yogyakarta Historical Tour</h3>
            <p className="text-xs text-white/70 mb-1">For reservation, contact us now.</p>
            <p className="text-xs text-white/70">Special discount for this month.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex items-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer h-48">
          <div className="w-2/5 h-full relative">
            <img src={card2} alt="Nusa Penida" className="w-full h-full object-cover" />
          </div>
          <div className="w-3/5 p-6 text-white text-left">
            <h3 className="text-xl font-bold font-heading mb-2 leading-tight">Nusa Penida 4 Days 3 Night Trip</h3>
            <p className="text-xs text-white/70 mb-1">For reservation, contact us now.</p>
            <p className="text-xs text-white/70">Special discount for this month.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
