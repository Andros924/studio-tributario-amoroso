import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { articoliEvidenza } from "../components/Data";

// Dynamic image imports
import carousel1 from "../assets/images/carousel-1.jpg";
import carousel2 from "../assets/images/carousel-2.jpg";
import carousel3 from "../assets/images/carousel-3.jpg";
import heroOffice from "../assets/images/hero-office.jpg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
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
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const handleRejectCookies = () => {
    setShowCookieBanner(false);
    localStorage.setItem('cookiesRejected', 'true');
  };

  const servizi = [
    { nome: "Consulenza fiscale", path: "/consulenza-fiscale" },
    { nome: "Dichiarazione dei redditi", path: "/dichiarazione-redditi" },
    { nome: "Pianificazione fiscale", path: "/pianificazione-fiscale" },
    { nome: "Contabilità", path: "/contabilita-aziendale" },
    { nome: "Assistenza controlli fiscali", path: "/assistenza-controlli" },
    { nome: "Registrazioni preliminari", path: "/registrazione-preliminare" },
    { nome: "Stesura Contratto di Locazione", path: "/contratto-locazione" },
    { nome: "Successioni", path: "/successioni-servizio" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen relative">
      <Helmet>
        <title>Soluzioni Fiscali su Misura a Palermo | Assistenza Fiscale</title>
        <meta name="description" content="Naviga nel complesso mondo fiscale con i nostri esperti a Palermo. Offriamo consulenza fiscale, dichiarazioni dei redditi, e pianificazione fiscale personalizzata." />
        <meta name="keywords" content="consulenza fiscale Palermo, dichiarazione redditi, pianificazione fiscale, assistenza fiscale Palermo, servizi contabili" />
        <meta name="author" content="Your Company Name" />
        <link rel="canonical" href="https://studiofiscaleamoroso.com/" />
      </Helmet>

      {/* Responsive Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 z-50">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left flex-grow md:mr-4">
              Utilizziamo i cookie per migliorare l'esperienza utente. Per saperne
              di più, consulta la nostra{" "}
              <Link to="/privacy" className="underline text-blue-400 hover:text-blue-500">
                Privacy Policy
              </Link>{" "}
              e{" "}
              <Link to="/terms" className="underline text-blue-400 hover:text-blue-500">
                Termini e Condizioni
              </Link>
              .
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
              <button
                onClick={handleAcceptCookies}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 w-full md:w-auto mb-2 md:mb-0"
              >
                Accetta
              </button>
              <button
                onClick={handleRejectCookies}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 w-full md:w-auto"
              >
                Rifiuta
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Carousel */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
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
      <section className="bg-blue-500 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Soluzioni Fiscali su Misura a Palermo
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Naviga nel complesso mondo fiscale con i nostri esperti a Palermo,
              pronti a fornirti assistenza personalizzata.
            </p>
            <Link
              to="/contatti"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
            >
              Richiedi una Consulenza
            </Link>
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
            I Nostri Servizi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.map((servizio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CheckIcon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{servizio.nome}</h3>
                <Link
                  to={servizio.path}
                  className="text-blue-500 font-semibold hover:underline flex items-center mt-2"
                >
                  Vai al servizio <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articoli in Evidenza Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
            Articoli in Evidenza
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articoliEvidenza.map((articolo) => (
              <div key={articolo.id} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  {articolo.titolo}
                </h3>
                <p className="text-gray-600 mb-4">{articolo.excerpt}</p>
                <Link
                  to={`/blog/${articolo.slug}`}
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
      <section className="bg-blue-500 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hai bisogno di assistenza fiscale?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            I nostri esperti sono pronti ad aiutarti con soluzioni su misura per te.
          </p>
          <Link
            to="/contatti"
            className="inline-block bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
          >
            Contattaci Ora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;