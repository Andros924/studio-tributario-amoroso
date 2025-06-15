import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Search, BookOpen, Calendar, User, ExternalLink, Star } from "lucide-react";

const pubblicazioni = [
  {
    titolo: "REDDITI PF FLAT TAX, REGIMI SPECIALI",
    autore: "ALESSANDRO AMOROSO",
    anno: 2024,
    immagine: "/assets/images/LIBRO_1.jpg",
    descrizione:
      "Guida completa alla dichiarazione dei redditi delle persone fisiche, con focus su detrazioni, deduzioni e novità ISA 2023.",
    link: "https://www.amazon.it/gp/product/B0D9KDN24N",
    categoria: "Fiscalità Personale",
    pagine: 280,
    rating: 4.8
  },
  {
    titolo: "GESTIONE DEI CREDITI D'IMPOSTA E NOVITÀ FISCALI 2024",
    autore: "ALESSANDRO AMOROSO",
    anno: 2024,
    immagine: "/assets/images/LIBRO_2.jpg",
    descrizione:
      "Guida per imprenditori e professionisti sui crediti d'imposta e novità fiscali 2024, con esempi pratici e strategie.",
    link: "https://www.amazon.it/dp/B0DKQVG3ZG",
    categoria: "Crediti d'Imposta",
    pagine: 320,
    rating: 4.9
  },
  {
    titolo: "Riciclaggio, segnalazione di operazioni sospette e reati fiscali",
    autore: "ALESSANDRO AMOROSO",
    anno: 2024,
    immagine: "/assets/images/LIBRO_3.jpg",
    descrizione:
      "Analisi completa sul riciclaggio e sui reati fiscali, con focus su indicatori di anomalia e ruolo dei professionisti come gatekeeper.",
    link: "https://www.amazon.it/dp/B0DLVC2NXW",
    categoria: "Compliance",
    pagine: 250,
    rating: 4.7
  },
  {
    titolo:
      "Fiscalità Internazionale: Strumenti e Strategie per la Compilazione del Modello Redditi 2024",
    autore: "ALESSANDRO AMOROSO",
    anno: 2024,
    immagine: "/assets/images/LIBRO_4.jpg",
    descrizione:
      "Guida alla fiscalità internazionale e alla compilazione del Modello Redditi, con focus su criptoattività, Quadro RW e convenzioni bilaterali.",
    link: "https://www.amazon.it/dp/B0DLV9Z75Q",
    categoria: "Fiscalità Internazionale",
    pagine: 380,
    rating: 4.8
  },
];

const Pubblicazioni = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutte");

  const categorie = ["Tutte", ...new Set(pubblicazioni.map(libro => libro.categoria))];

  const libriFiltrati = pubblicazioni.filter((libro) => {
    const matchesSearch = 
      libro.titolo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      libro.autore.toLowerCase().includes(searchTerm.toLowerCase()) ||
      libro.descrizione.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "Tutte" || libro.categoria === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Pubblicazioni | Studio Tributario Alessandro Amoroso</title>
        <meta
          name="description"
          content="Scopri le pubblicazioni di Alessandro Amoroso, tributarista esperto. Guide complete su fiscalità, crediti d'imposta e normative tributarie."
        />
        <meta
          name="keywords"
          content="pubblicazioni fiscali, libri tributari, Alessandro Amoroso, guide fiscali"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Le Mie Pubblicazioni
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Guide specializzate e approfondimenti fiscali per professionisti e aziende
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* About Author Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              AA
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Alessandro Amoroso
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tributarista qualificato ai sensi della legge n.4 del 14 gennaio 2013, 
                con esperienza pluriennale in economia e fiscalità. Autore di guide 
                specializzate che offrono soluzioni pratiche e aggiornate per 
                professionisti e aziende nel panorama fiscale italiano.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tributarista Qualificato
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Autore Specializzato
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Consulente Fiscale
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cerca nelle pubblicazioni..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categorie.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setSelectedCategory(categoria)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === categoria
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Books Grid */}
          <div className="lg:col-span-2">
            {libriFiltrati.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {libriFiltrati.map((libro, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedBook(libro)}
                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="relative">
                      <img
                        src={libro.immagine}
                        alt={libro.titolo}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {libro.anno}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(libro.rating)}
                        <span className="text-sm text-gray-600">({libro.rating})</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                        {libro.titolo}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {libro.descrizione}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {libro.pagine} pagine
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {libro.categoria}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Nessuna pubblicazione trovata
                </h3>
                <p className="text-gray-500">
                  Prova a modificare i filtri di ricerca
                </p>
              </div>
            )}
          </div>

          {/* Selected Book Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedBook ? (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={selectedBook.immagine}
                    alt={selectedBook.titolo}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {renderStars(selectedBook.rating)}
                      <span className="text-sm text-gray-600">({selectedBook.rating})</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {selectedBook.titolo}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="w-4 h-4" />
                        <span className="text-sm">{selectedBook.autore}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Anno: {selectedBook.anno}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-sm">{selectedBook.pagine} pagine</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedBook.categoria}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                      {selectedBook.descrizione}
                    </p>
                    
                    <a
                      href={selectedBook.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <span>Acquista su Amazon</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Seleziona una pubblicazione
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Clicca su una delle pubblicazioni per visualizzare i dettagli completi
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Le Pubblicazioni in Numeri
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {pubblicazioni.length}
              </div>
              <div className="text-gray-600 text-sm">Pubblicazioni</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {pubblicazioni.reduce((sum, libro) => sum + libro.pagine, 0)}
              </div>
              <div className="text-gray-600 text-sm">Pagine Totali</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {(pubblicazioni.reduce((sum, libro) => sum + libro.rating, 0) / pubblicazioni.length).toFixed(1)}
              </div>
              <div className="text-gray-600 text-sm">Rating Medio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                2024
              </div>
              <div className="text-gray-600 text-sm">Anno Corrente</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pubblicazioni;