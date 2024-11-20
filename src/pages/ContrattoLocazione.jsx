import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import heroImage from "../assets/images/contratto-locazione-hero.jpg";

const ContrattoLocazione = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Contratto di Locazione | Stesura e Registrazione</title>
        <meta
          name="description"
          content="Assistenza completa per la stesura e registrazione del contratto di locazione, inclusa consulenza su cedolare secca, modifiche e risoluzioni."
        />
        <meta
          name="keywords"
          content="contratto di locazione, stesura contratto, registrazione contratto, cedolare secca, Agenzia delle Entrate, modifiche contratto"
        />
        <meta name="author" content="Studio Tributario Alessandro Amoroso" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <header
        className="relative w-full h-64 bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Stesura e Registrazione del Contratto di Locazione
          </h1>
        </div>
      </header>

      {/* Introduzione */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Servizio di Stesura e Registrazione del Contratto
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          La corretta stesura e registrazione di un contratto di locazione è
          essenziale per tutelare i diritti di locatore e conduttore. Il nostro
          servizio ti supporta in tutte le fasi, dalla redazione del contratto
          alla registrazione presso l'Agenzia delle Entrate.
        </p>
      </section>

      {/* Sezioni Tematiche */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <article className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Stesura del Contratto di Locazione
          </h3>
          <p className="text-gray-700">
            Offriamo assistenza completa nella redazione del contratto di
            locazione, includendo tutti gli elementi essenziali: dati delle
            parti, descrizione dell’immobile, durata e canone di locazione,
            clausole di rinnovo e modalità di pagamento. Verifichiamo inoltre
            che il contratto rispetti tutte le normative vigenti, incluse quelle
            riguardanti l'attestato di prestazione energetica (APE).
          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Registrazione presso l'Agenzia delle Entrate
          </h3>
          <p className="text-gray-700">
            Dopo la firma, il contratto deve essere registrato entro 30 giorni
            presso l'Agenzia delle Entrate. Ci occupiamo della compilazione del
            modello RLI e della gestione telematica della registrazione, inclusa
            la verifica e pagamento delle imposte di bollo e registro. In
            alternativa, possiamo effettuare la registrazione in ufficio.
          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Opzione Cedolare Secca
          </h3>
          <p className="text-gray-700">
            Per i contratti di locazione abitativa, forniamo consulenza
            sull’opzione della cedolare secca, un regime fiscale agevolato che
            consente di evitare le imposte di registro e bollo, applicando
            un'imposta sostitutiva sul reddito da locazione.
          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Consulenza su Risoluzioni e Modifiche Contrattuali
          </h3>
          <p className="text-gray-700">
            Offriamo supporto per le modifiche contrattuali, come la proroga, la
            cessione e la risoluzione del contratto. Gestiamo la documentazione
            e la comunicazione delle variazioni all'Agenzia delle Entrate,
            garantendo la conformità fiscale e amministrativa.
          </p>
        </article>
      </section>

      {/* Conclusione */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Richiedi Assistenza per il tuo Contratto di Locazione
        </h2>
        <p className="text-lg mb-6">
          Il nostro team è a disposizione per aiutarti a redigere e registrare
          il tuo contratto di locazione. Contattaci per maggiori dettagli.
        </p>
        <Link
          to="/contatti"
          className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Contattaci Ora
        </Link>
      </section>
    </div>
  );
};

export default ContrattoLocazione;