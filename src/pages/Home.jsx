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
      <section className="bg-darkred text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Soluzioni Fiscali su Misura</h1>
          <p className="text-xl mb-8">Naviga il complesso mondo fiscale con i nostri esperti al tuo fianco</p>
          <Link to="/contatti" className="bg-white text-darkred font-bold py-3 px-6 rounded-full hover:bg-lightred hover:text-white transition duration-300">
            Richiedi una Consulenza
          </Link>
        </div>
      </section>

      {/* Servizi Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-darkred mb-12">I Nostri Servizi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servizi.map((servizio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CheckIcon className="w-8 h-8 text-lightred mb-4" />
                <h3 className="text-xl font-semibold mb-2">{servizio}</h3>
                <p className="text-gray-600">Offriamo soluzioni personalizzate per ogni tua esigenza fiscale.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articoli in Evidenza Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-darkred mb-12">Articoli in Evidenza</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articoliEvidenza.map((articolo) => (
              <div key={articolo.id} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{articolo.titolo}</h3>
                <p className="text-gray-600 mb-4">{articolo.excerpt}</p>
                <Link to={`/blog/${articolo.id}`} className="text-lightred font-semibold hover:underline flex items-center">
                  Leggi di più <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="bg-darkred text-white font-bold py-3 px-6 rounded-full hover:bg-lightred transition duration-300">
              Esplora il Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-lightred text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto a semplificare la tua situazione fiscale?</h2>
          <p className="text-xl mb-8">I nostri esperti sono qui per aiutarti. Contattaci oggi stesso per una consulenza personalizzata.</p>
          <Link to="/contatti" className="bg-white text-darkred font-bold py-3 px-6 rounded-full hover:bg-darkred hover:text-white transition duration-300">
            Contattaci Ora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;