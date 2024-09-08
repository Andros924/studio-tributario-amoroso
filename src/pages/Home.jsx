import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';

const Home = () => {
  // Esempio di servizi offerti
  const servizi = [
    "Consulenza fiscale",
    "Dichiarazione dei redditi",
    "Pianificazione fiscale",
    "Contabilità aziendale",
    "Assistenza in caso di controlli fiscali"
  ];

  // Esempio di articoli in evidenza
  const articoliEvidenza = [
    { id: 1, titolo: "Novità fiscali 2024", excerpt: "Le principali modifiche alla normativa fiscale per l'anno in corso." },
    { id: 2, titolo: "Come ottimizzare le detrazioni fiscali", excerpt: "Consigli pratici per massimizzare i benefici fiscali per privati e aziende." },
    { id: 3, titolo: "Guida al regime forfettario", excerpt: "Tutto ciò che c'è da sapere sul regime agevolato per le partite IVA." }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center sm:text-left">
            Soluzioni Fiscali su Misura
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-center sm:text-left">
            Naviga il complesso mondo fiscale con i nostri esperti al tuo fianco
          </p>
          <div className="text-center sm:text-left">
            <Link
              to="/contatti"
              className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Richiedi una Consulenza
            </Link>
          </div>
        </div>
      </section>

      {/* Servizi Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-12">
            I Nostri Servizi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servizi.map((servizio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CheckIcon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{servizio}</h3>
                <p className="text-gray-600">
                  Offriamo soluzioni personalizzate per ogni tua esigenza fiscale.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articoli in Evidenza Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-12">
            Articoli in Evidenza
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articoliEvidenza.map((articolo) => (
              <div key={articolo.id} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{articolo.titolo}</h3>
                <p className="text-gray-600 mb-4">{articolo.excerpt}</p>
                <Link
                  to={`/blog/${articolo.id}`}
                  className="text-blue-500 font-semibold hover:underline flex items-center"
                >
                  Leggi di più <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/blog"
              className="bg-blue-900 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-500 transition duration-300"
            >
              Esplora il Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Pronto a semplificare la tua situazione fiscale?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            I nostri esperti sono qui per aiutarti. Contattaci oggi stesso per una consulenza personalizzata.
          </p>
          <Link
            to="/contatti"
            className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-900 hover:text-white transition duration-300"
          >
            Contattaci Ora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;