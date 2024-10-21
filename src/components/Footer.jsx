import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Sezione: Informazioni */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Informazioni</h3>
            <p className="mb-2">Studio Tributarista Amoroso</p>
            <p className="mb-2">Via villa rosato, 28</p>
            <p className="mb-2">90146 Palermo, Italia</p>
            <p>P.IVA: <span className="text-blue-400">06955710824</span></p>
          </div>

          {/* Sezione: Navigazione */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Navigazione</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-blue-400 transition duration-300">Chi Siamo</Link></li>
              <li><Link to="/servizi" className="hover:text-blue-400 transition duration-300">Servizi</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition duration-300">Blog</Link></li>
              <li><Link to="/contatti" className="hover:text-blue-400 transition duration-300">Contatti</Link></li>
            </ul>
          </div>

          {/* Sezione: Legal */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition duration-300">Termini e Condizioni</Link></li>
              <li><Link to="/pubblicazioni" className="hover:text-blue-400 transition duration-300">Pubblicazioni</Link></li>
            </ul>
          </div>

          {/* Sezione: Contatti e Social */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Contatti e Social</h3>
            <p className="mb-4">Email: <a href="mailto:studiotrib.amoroso@gmail.com" className="text-blue-400 hover:underline">studiotrib.amoroso@gmail.com</a></p>
            <div className="flex justify-center sm:justify-start space-x-4 mb-4">
              <a href="https://www.facebook.com/studiotributarioAmoroso/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.linkedin.com/in/alessandro-amoroso-9b5681123/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-300">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.tiktok.com/@dottamoroso_alessandro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-300">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Linea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm sm:text-base">© {new Date().getFullYear()} Studio Tributario Alessandro Amoroso. Tutti i diritti riservati.</p>
          <p className="text-xs sm:text-sm mt-2">Partita IVA: 06955710824</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;