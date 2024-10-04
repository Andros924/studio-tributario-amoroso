import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10"> {/* Sfondo nero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Sezione: Informazioni */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informazioni</h3>
            <p className="mb-2">Studio Tributarista Amoroso</p>
            <p className="mb-2">Via villa rosato, 28</p>
            <p className="mb-2">90146 Palermo, Italia</p>
            <p>Partita IVA: <span className="text-blue-400">06955710824</span></p>
          </div>

          {/* Sezione: Link Utili */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-400">Termini e Condizioni</a></li>
              <li><a href="/contatti" className="hover:text-blue-400">Contattaci</a></li>
            </ul>
          </div>

          {/* Sezione: Contatti e Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Seguici</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="https://www.facebook.com/studiotributarioAmoroso/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82V14.708h-3.296v-3.63h3.296V8.413c0-3.26 1.994-5.043 4.902-5.043 1.392 0 2.587.103 2.933.15v3.4l-2.013.001c-1.577 0-1.883.75-1.883 1.849v2.423h3.767l-.492 3.63h-3.275V24h6.422C23.408 24 24 23.408 24 22.676V1.325C24 .592 23.408 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alessandro-amoroso-9b5681123/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.74v20.52C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.74V1.74C24 .77 23.21 0 22.23 0zM7.12 20.44H3.56V9h3.56v11.44zm-1.78-13a2.07 2.07 0 010-4.14 2.06 2.06 0 010 4.14zM20.44 20.44h-3.56v-5.85c0-3.5-4.19-3.23-4.19 0v5.85h-3.56V9h3.56v1.44c1.65-3.06 8.19-3.29 8.19 2.94v7.06z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M24 4.557a9.837 9.837 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.936 13.936 0 011.671 3.149a4.916 4.916 0 001.523 6.574A4.897 4.897 0 01.96 9.575v.062a4.916 4.916 0 003.946 4.816 4.897 4.897 0 01-2.212.084 4.919 4.919 0 004.588 3.416A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.508 14.01-14.01 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@dottamoroso_alessandro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1.53 18.28a4.99 4.99 0 01-2.65.77 4.92 4.92 0 01-2.6-.7 5.024 5.024 0 01-2.6-4.34 4.94 4.94 0 01.07-.82h1.73c-.02.14-.03.29-.03.44a2.97 2.97 0 002.97 2.97 2.96 2.96 0 001.55-.43 3.05 3.05 0 001.2-1.77c.13-.55.2-1.12.2-1.67V7.48h1.64a3.77 3.77 0 002.13.98v1.56a5.32 5.32 0 01-2.12-.45v2.42c0 1.33-.46 2.63-1.31 3.64-.34.42-.75.78-1.2 1.08z" />
                </svg>
              </a>
            </div>
            <p>Contattaci: <a href="mailto:studiotrib.amoroso@gmail.com" className="text-blue-400 hover:underline">studiotrib.amoroso@gmail.com</a></p>
          </div>

        </div>

        {/* Linea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Studio Tributario a Palermo. Tutti i diritti riservati.</p>
          <p className="text-sm">Partita IVA: 06955710824</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
