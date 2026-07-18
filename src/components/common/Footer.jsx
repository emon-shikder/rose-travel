import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content mt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <a className="text-3xl font-heading font-extrabold mb-4 inline-block">
            Rose<span className="text-primaryRed">Travel</span>
          </a>
          <p className="opacity-80 max-w-sm">
            Your premium travel partner for unforgettable journeys and luxurious experiences around the globe.
          </p>
        </div> 
        <div>
          <span className="footer-title opacity-100 text-lg font-bold">Quick Links</span> 
          <div className="flex flex-col gap-2 mt-2">
            <a href="#destinations" className="link link-hover hover:text-primaryRed transition-colors">Destinations</a> 
            <a href="#tours" className="link link-hover hover:text-primaryRed transition-colors">Tours</a> 
            <a href="#about" className="link link-hover hover:text-primaryRed transition-colors">About Us</a> 
            <a href="#contact" className="link link-hover hover:text-primaryRed transition-colors">Contact</a>
          </div>
        </div> 
        <div>
          <span className="footer-title opacity-100 text-lg font-bold">Connect</span> 
          <div className="grid grid-flow-col gap-4 mt-2">
            <a href="#fb" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primaryRed hover:text-white transition-all transform hover:-translate-y-1 shadow-sm font-bold">
              FB
            </a>
            <a href="#ig" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primaryRed hover:text-white transition-all transform hover:-translate-y-1 shadow-sm font-bold">
              IG
            </a>
            <a href="#tw" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primaryRed hover:text-white transition-all transform hover:-translate-y-1 shadow-sm font-bold">
              TW
            </a>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-base-200 mt-10 pt-6">
        <div className="max-w-7xl mx-auto w-full text-center opacity-70 text-sm">
          <p>&copy; {new Date().getFullYear()} RoseTravel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
