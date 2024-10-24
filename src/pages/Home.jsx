import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { articoliEvidenza } from "../components/Data";

// Importazione dinamica delle immagini
import carousel1 from "../assets/images/carousel-1.jpg";
import carousel2 from "../assets/images/carousel-2.jpg";
import carousel3 from "../assets/images/carousel-3.jpg";
import heroOffice from "../assets/images/hero-office.jpg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCookieBanner, setShowCookieBanner] = useState(true); // Gestione banner cookie
  const images = [carousel1, carousel2, carousel3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    setShowCookieBanner(false);
  };

  const servizi = [
    "Consulenza fiscale",
    "Dichiarazione dei redditi",
    "Pianificazione fiscale",
    "Contabilità aziendale",
    "Assistenza in caso di controlli fiscali",
    "Registrazioni preliminari", // Aggiunto il servizio "Registrazioni preliminari"
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
          <p className="text-sm">
            Utilizziamo i cookie per migliorare l'esperienza utente. Per saperne
            di più, consulta la nostra{" "}
            <Link
              to="/privacy"
              className="underline text-blue-400 hover:text-blue-500"
            >
              Privacy Policy
            </Link>{" "}
            e{" "}
            <Link
              to="/terms"
              className="underline text-blue-400 hover:text-blue-500"
            >
              Termini e Condizioni
            </Link>
            .
          </p>
          <div className="space-x-4">
            <button
              onClick={handleAcceptCookies}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
            >
              Accetta
            </button>
            <button
              onClick={handleRejectCookies}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Rifiuta
            </button>
          </div>
        </div>
      )}

      {/* Modern Carousel */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6 text-blue-900" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition-colors"
        >
          <ChevronRightIcon className="w-6 h-6 text-blue-900" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-blue-500"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center sm:text-left">
              Soluzioni Fiscali su Misura a Palermo
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-center sm:text-left">
              Naviga nel complesso mondo fiscale con i nostri esperti a Palermo,
              pronti a fornirti assistenza personalizzata.
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
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={heroOffice}
              alt="Ufficio a Palermo"
              className="w-full h-auto rounded-lg shadow-lg"
            />
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
                {servizio === "Registrazioni preliminari" ? (
                  <Link
                    to="/registrazione-preliminare" // Link alla nuova pagina
                    className="text-blue-500 font-semibold hover:underline flex items-center mt-2"
                  >
                    Vai al servizio <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                ) : (
                  <p className="text-gray-600">
                    Offriamo soluzioni personalizzate per ogni tua esigenza
                    fiscale.
                  </p>
                )}
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
                <h3 className="text-xl font-semibold mb-2">
                  {articolo.titolo}
                </h3>
                <p className="text-gray-600 mb-4">{articolo.excerpt}</p>
                <Link
                  to={`/blog/${articolo.slug}`} // Usa lo slug invece dell'id
                  className="text-blue-500 font-semibold hover:underline flex items-center"
                >
                  Leggi di più <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
            Hai bisogno di assistenza fiscale?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            I nostri esperti sono pronti ad aiutarti con soluzioni su misura per
            te.
          </p>
          <Link
            to="/contatti"
            className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Contattaci Ora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;