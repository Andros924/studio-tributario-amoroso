const Pubblicazioni = () => {
  const libri = [
    {
      titolo: "REDDITI PF FLAT TAX, REGIMI SPECIALI",
      autore: "ALESSANDRO AMOROSO",
      immagine: "/assets/images/LIBRO_1.jpg", // Percorso nella cartella public
      descrizione:
        "Il libro offre una guida completa alla dichiarazione dei redditi delle persone fisiche, con particolare attenzione alle detrazioni, deduzioni, flat tax incrementale e novità ISA 2023. Un valido strumento per professionisti e contribuenti che desiderano ottimizzare la propria posizione fiscale.",
      link: "https://www.amazon.it/gp/product/B0D9KDN24N",
    },
    // Aggiungi qui altri libri seguendo lo stesso formato
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Le mie pubblicazioni
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {libri.map((libro, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative pt-[159%]">
                <img
                  src={libro.immagine}
                  alt={libro.titolo}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {libro.titolo}
                </h2>
                <p className="text-sm text-gray-600 mb-4">di {libro.autore}</p>
                <p className="text-gray-700 mb-4 flex-grow">
                  {libro.descrizione}
                </p>
                <a
                  href={libro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300 text-center"
                >
                  Acquista su Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pubblicazioni;
