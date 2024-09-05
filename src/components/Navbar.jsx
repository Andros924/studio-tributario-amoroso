import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-darkred p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold text-xl">Tributarista Palermo</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/chi-siamo" className="text-white">Chi Siamo</Link>
          <Link to="/servizi" className="text-white">Servizi</Link>
          <Link to="/blog" className="text-white">Blog</Link>
          <Link to="/contatti" className="text-white">Contatti</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
