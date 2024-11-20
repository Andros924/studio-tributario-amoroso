import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl">
          Tributarista Alessandro Amoroso
        </Link>

        {/* Hamburger menu button (visible on mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div
          id="navbar-menu"
          className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-4 absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-blue-900 md:bg-transparent px-4 md:px-0 md:items-center ${
            isOpen ? 'flex' : 'hidden'
          } transition-all duration-300 ease-in-out`}
        >
          <Link to="/" className="text-gray-200 hover:text-gray-400 py-2 md:py-0">
            Home
          </Link>
          <Link to="/chi-siamo" className="text-gray-200 hover:text-gray-400 py-2 md:py-0">
            Chi Siamo
          </Link>
          <Link to="/servizi" className="text-gray-200 hover:text-gray-400 py-2 md:py-0">
            Servizi
          </Link>
          <Link to="/blog" className="text-gray-200 hover:text-gray-400 py-2 md:py-0">
            Blog
          </Link>
          <Link to="/contatti" className="text-gray-200 hover:text-gray-400 py-2 md:py-0">
            Contatti
          </Link>
          <Link to="/pubblicazioni" className="text-gray-200 hover:text-gray-400 py-2 md:py-0">
            Pubblicazioni
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
