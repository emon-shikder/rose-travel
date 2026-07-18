import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMagnifyingGlass, FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = !scrolled && location.pathname === '/';

  return (
    <div className={`navbar fixed top-0 w-full z-50 transition-all duration-500 ${!isTransparent ? 'bg-base-100/90 backdrop-blur-lg shadow-sm py-2 text-base-content border-b border-base-200/50' : 'bg-transparent py-6 text-white'}`}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Left: Brand */}
        <div className="flex justify-start shrink-0">
          <Link to="/" className="btn btn-ghost text-2xl font-heading font-extrabold px-0 hover:bg-transparent">
            Rose<span className="text-primaryRed">Travel</span>
          </Link>
        </div>
        
        {/* Center: Navigation Pill */}
        <div className="hidden lg:flex justify-center flex-1">
          <ul className={`menu menu-horizontal px-1 gap-1 font-medium rounded-full transition-all duration-300 flex-nowrap ${isTransparent ? 'bg-white/20 backdrop-blur-md border border-white/10 shadow-sm' : 'bg-base-200/50'}`}>
            <li><Link to="/" className="hover:text-accentLime transition-colors px-4 py-2 rounded-full whitespace-nowrap">Home</Link></li>
            <li><Link to="/tours" className="hover:text-accentLime transition-colors px-4 py-2 rounded-full whitespace-nowrap">Destinations</Link></li>
            <li><Link to="/about" className="hover:text-accentLime transition-colors px-4 py-2 rounded-full whitespace-nowrap">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accentLime transition-colors px-4 py-2 rounded-full whitespace-nowrap">Blog</Link></li>
          </ul>
        </div>
        
        {/* Right: Actions */}
        <div className="flex justify-end items-center gap-4 shrink-0">
          <button className={`btn btn-circle btn-sm md:btn-md border-none ${isTransparent ? 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30' : 'bg-base-200 text-base-content hover:bg-base-300'}`}>
            <FaMagnifyingGlass className="h-4 w-4" />
          </button>
          
          <Link to="/tours" className="btn bg-accentLime text-primaryDark hover:bg-[#c5df60] border-none rounded-full px-8 shadow-sm hover:shadow-md transition-all duration-300 font-bold hidden sm:inline-flex">
            Book Now
          </Link>

          {/* Mobile Menu Dropdown */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost text-current">
              <FaBars className="h-5 w-5" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tours">Destinations</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
