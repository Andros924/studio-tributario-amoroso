import React, { useState } from 'react';

const pubblicazioni = [
  {
    titolo: "REDDITI PF FLAT TAX, REGIMI SPECIALI",
    autore: "ALESSANDRO AMOROSO",
    anno: 2024,
    immagine: "/assets/images/LIBRO_1.jpg",
    descrizione:
      "Il libro offre una guida completa alla dichiarazione dei redditi delle persone fisiche, con particolare attenzione alle detrazioni, deduzioni, flat tax incrementale e novità ISA 2023. Un valido strumento per professionisti e contribuenti che desiderano ottimizzare la propria posizione fiscale.",
    link: "https://www.amazon.it/gp/product/B0D9KDN24N",
  },
  {
    titolo: "GESTIONE DEI CREDITI D'IMPOSTA E NOVITÀ FISCALI 2024",
    autore: "ALESSANDRO AMOROSO",
    anno: 2024,
    immagine: "/assets/images/LIBRO_2.jpg",
    descrizione:
      "Una guida aggiornata per imprenditori e professionisti sui crediti d'imposta in Italia. Esplora le novità fiscali 2024, le agevolazioni per investimenti nelle ZES e bonus edilizi, con esempi pratici e best practices per una gestione fiscale sicura e ottimizzata.",
    link: "https://www.amazon.it/dp/B0DKQVG3ZG",
  },
];

const Pubblicazioni = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra i libri in base al termine di ricerca
  const libriFiltrati = pubblicazioni.filter((libro) => {
    const term = searchTerm.toLowerCase();
    return (
      libro.titolo.toLowerCase().includes(term) ||
      libro.autore.toLowerCase().includes(term) ||
      libro.descrizione.toLowerCase().includes(term)
    );
  });

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 flex-grow">
      {/* Contenuto - 2/3 dello spazio su schermi grandi */}
      <section className="lg:col-span-2 bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Chi è Alessandro Amoroso</h2>
        <p className="text-gray-700 mb-6">
          Alessandro Amoroso è un tributarista professionista qualificato ai sensi della legge n.4 del 14 gennaio 2013, appassionato di economia e dedito a gestire con professionalità i propri clienti, offrendo soluzioni fiscali personalizzate e aggiornate.
        </p>

        {/* Card Visualizzata al Click */}
        {selectedBook && (
          <div className="mt-6 bg-gray-100 p-6 rounded shadow-lg">
            <img
              src={selectedBook.immagine}
              alt={selectedBook.titolo}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{selectedBook.titolo}</h3>
            <p className="text-sm text-gray-600 mb-1">di {selectedBook.autore}</p>
            <p className="text-sm text-gray-600 mb-2">Anno: {selectedBook.anno}</p>
            <p className="text-gray-700 mb-4 text-sm">{selectedBook.descrizione}</p>
            <a
              href={selectedBook.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300 text-center"
            >
              Acquista su Amazon
            </a>
          </div>
        )}
      </section>

      {/* Sidebar - 1/3 dello spazio su schermi grandi */}
      <aside className="bg-gray-200 p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Pubblicazioni</h2>

        {/* Barra di Ricerca */}
        <input
          type="text"
          placeholder="Cerca una pubblicazione..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
        />

        {/* Lista dei Risultati Filtrati */}
        <ul>
          {libriFiltrati.map((libro, index) => (
            <li
              key={index}
              onClick={() => setSelectedBook(libro)}
              className="cursor-pointer text-blue-800 hover:text-blue-600 mb-3"
            >
              {libro.titolo}
            </li>
          ))}
          {/* Messaggio di nessun risultato trovato */}
          {libriFiltrati.length === 0 && (
            <p className="text-gray-500">Nessuna pubblicazione trovata.</p>
          )}
        </ul>
      </aside>
    </main>
  );
};

export default Pubblicazioni;