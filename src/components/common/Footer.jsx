import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content mt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link to="/" className="text-3xl font-heading font-extrabold mb-4 inline-block">
            Rose<span className="text-primaryRed">Travel</span>
          </Link>
          <p className="opacity-80 max-w-sm">
            Your premium travel partner for unforgettable journeys and luxurious experiences around the globe.
          </p>
        </div> 
        <div>
          <span className="footer-title opacity-100 text-lg font-bold">Quick Links</span> 
          <div className="flex flex-col gap-2 mt-2">
            <Link to="/" className="link link-hover hover:text-primaryRed transition-colors">Home</Link> 
            <Link to="/tours" className="link link-hover hover:text-primaryRed transition-colors">Tours</Link> 
            <Link to="/about" className="link link-hover hover:text-primaryRed transition-colors">About Us</Link> 
            <Link to="/contact" className="link link-hover hover:text-primaryRed transition-colors">Contact</Link>
          </div>
        </div> 
        <div>
          <span className="footer-title opacity-100 text-lg font-bold">Connect</span> 
          <div className="flex gap-4 mt-2">
            <a href="#fb" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm text-lg">
              <FaFacebookF />
            </a>
            <a href="#ig" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm text-lg">
              <FaInstagram />
            </a>
            <a href="#tw" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-sm text-lg">
              <FaXTwitter />
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
