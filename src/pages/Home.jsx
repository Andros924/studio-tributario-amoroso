import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { articoliEvidenza } from '../components/Data';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["src/assets/images/carousel-1.jpg", "src/assets/images/carousel-2.jpg", "src/assets/images/carousel-3.jpg"];

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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const servizi = [
    "Consulenza fiscale",
    "Dichiarazione dei redditi",
    "Pianificazione fiscale",
    "Contabilità aziendale",
    "Assistenza in caso di controlli fiscali"
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Modern Carousel */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
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
                index === currentIndex ? 'bg-blue-500' : 'bg-white/50 hover:bg-white/75'
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
              Naviga nel complesso mondo fiscale con i nostri esperti a Palermo, pronti a fornirti assistenza personalizzata.
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
              src="/images/hero-office.jpg"
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
            Pronto a semplificare la tua situazione fiscale a Palermo?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            I nostri esperti di Palermo sono qui per aiutarti. Contattaci oggi stesso per una consulenza personalizzata.
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