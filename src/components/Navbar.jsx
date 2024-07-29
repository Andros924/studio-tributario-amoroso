import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-blue-700 text-white p-5 flex justify-between items-center">
      <div className="text-2xl font-bold">Studio Tributario Amoroso</div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/services" className="hover:underline">Servizi</Link></li>
          <li><Link to="/about" className="hover:underline">Chi Siamo</Link></li>
          <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          <li><Link to="/contact" className="hover:underline">Contatti</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
