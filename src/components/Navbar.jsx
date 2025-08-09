import React, { useState } from 'react';
import img1 from './assets/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#509A81] p-4 shadow-lg z-100">
      <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-10">
        <div className="flex items-center space-x-2">
          <img
            src={img1}
            alt="Custom Logo"
            className="lg:h-10 h-8 cursor-pointer"
          />
          <span className="text-white text-lg font-bold cursor-pointer">HGLO</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {['home', 'about', 'events', 'officers', 'join'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-white font-medium transition duration-300 ease-in-out hover:text-green-100 hover:scale-110 cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-[#509A81] p-4 shadow-xl transition-all duration-300 ease-in-out z-50">
          <div className="flex flex-col space-y-3">
            {['home', 'about', 'events', 'officers', 'join'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block text-white text-lg py-2 px-3 rounded-md hover:bg-green-900 transition duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
