import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-base-100 shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="navbar-start max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-current">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content">
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#tours">Tours</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-2xl font-heading font-extrabold px-0">
            Rose<span className="text-primaryRed">Travel</span>
          </a>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            <li><a href="#destinations" className="hover:text-primaryRed transition-colors">Destinations</a></li>
            <li><a href="#tours" className="hover:text-primaryRed transition-colors">Tours</a></li>
            <li><a href="#about" className="hover:text-primaryRed transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-primaryRed transition-colors">Contact</a></li>
          </ul>
          <button className="btn bg-primaryRed text-white hover:bg-primaryDark border-none rounded-full px-8 shadow-md hover:shadow-lg transition-all">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
