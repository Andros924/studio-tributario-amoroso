import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4"> {/* Sfondo blu scuro */}
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold text-xl">Tributarista Palermo</Link> {/* Testo principale in bianco */}
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-200 hover:text-gray-400">Home</Link> {/* Testo grigio chiaro con hover più scuro */}
          <Link to="/chi-siamo" className="text-gray-200 hover:text-gray-400">Chi Siamo</Link>
          <Link to="/servizi" className="text-gray-200 hover:text-gray-400">Servizi</Link>
          <Link to="/blog" className="text-gray-200 hover:text-gray-400">Blog</Link>
          <Link to="/contatti" className="text-gray-200 hover:text-gray-400">Contatti</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
