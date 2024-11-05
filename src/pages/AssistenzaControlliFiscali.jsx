import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/controlli-fiscali-hero.jpg"; // Assicurati di avere l'immagine adeguata nella cartella assets/images

const AssistenzaControlliFiscali = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Assistenza in Caso di Controlli Fiscali
          </h1>
        </div>
      </div>

      {/* Introduzione */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Affrontare un Controllo Fiscale
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          I controlli fiscali possono includere verifiche automatiche, controlli
          formali e verifiche sostanziali condotte dall'Agenzia delle Entrate.
          In caso di controllo, è essenziale avvalersi di un supporto
          professionale che aiuti a gestire ogni fase del processo, minimizzando
          il rischio di sanzioni e contestazioni.
        </p>
      </div>

      {/* Sezioni Tematiche */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Analisi della Comunicazione Fiscale */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Analisi della Comunicazione Fiscale
          </h3>
          <p className="text-gray-700">
            Quando il contribuente riceve una comunicazione di irregolarità, il
            nostro team esamina la documentazione inviata dall'Agenzia delle
            Entrate per identificare la natura delle irregolarità e valutare le
            opzioni di risposta. Forniamo una guida dettagliata su come
            procedere in modo rapido e corretto.
          </p>
        </div>

        {/* Assistenza in caso di Accessi e Ispezioni */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Assistenza in caso di Accessi e Ispezioni
          </h3>
          <p className="text-gray-700">
            In caso di accesso diretto presso l’azienda o lo studio
            professionale da parte dell’Agenzia delle Entrate o della Guardia di
            Finanza, è fondamentale la presenza di un esperto fiscale. Forniamo
            assistenza immediata durante le ispezioni, rappresentando il
            contribuente e assicurando il rispetto di tutte le procedure.
          </p>
        </div>

        {/* Preparazione e Presentazione della Documentazione */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Preparazione e Presentazione della Documentazione
          </h3>
          <p className="text-gray-700">
            Supportiamo nella raccolta e presentazione dei documenti richiesti,
            inclusi bilanci, registri contabili e fatture. La nostra assistenza
            garantisce che ogni documento sia preparato correttamente e
            consegnato nei tempi richiesti, riducendo il rischio di sanzioni.
          </p>
        </div>

        {/* Assistenza in Contenzioso e Ricorsi */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Assistenza in Contenzioso e Ricorsi
          </h3>
          <p className="text-gray-700">
            Nel caso di contestazioni irrisolte, assistiamo il cliente nella
            preparazione e presentazione del ricorso presso la Commissione
            Tributaria. Forniamo supporto durante tutte le fasi del contenzioso,
            consigliando la migliore strategia per proteggere gli interessi del
            contribuente.
          </p>
        </div>
      </div>

      {/* Conclusione */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Richiedi Assistenza per i Controlli Fiscali
        </h2>
        <p className="text-lg mb-6">
          I nostri esperti sono a disposizione per assisterti in ogni fase di un
          controllo fiscale. Contattaci per proteggere al meglio i tuoi
          interessi e gestire la tua posizione fiscale con serenità.
        </p>
        <Link
          to="/contatti"
          className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Contattaci Ora
        </Link>
      </div>
    </div>
  );
};

export default AssistenzaControlliFiscali;
