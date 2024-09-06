import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6"> {/* Sfondo nero */}
      <div className="container mx-auto text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Studio Tributarista Palermo. Tutti i diritti riservati.
        </p>

        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              {/* Icona di Facebook */}
              <path d="M22.675 0h-21.35c-..." />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              {/* Icona di LinkedIn */}
              <path d="M19.5 3h-15c-1.379..." />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              {/* Icona di Twitter */}
              <path d="M22.23 5.924c-0.817..." />
            </svg>
          </a>
        </div>

        <div className="mt-4">
          <p>Contattaci: <a href="mailto:studiotrib.amoroso@gmail.com" className="text-blue-400 hover:underline">studiotrib.amoroso@gmail.com</a></p> {/* Link in blu chiaro */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
