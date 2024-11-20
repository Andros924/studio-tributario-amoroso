import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import heroImage from "../assets/images/consulenza-fiscale-hero.jpg";

const ConsulenzaFiscale = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Consulenza Fiscale | Supporto Tributario per Privati e Aziende</title>
        <meta
          name="description"
          content="Scopri come la consulenza fiscale di Alessandro Amoroso, tributarista qualificato, può aiutarti a gestire e ottimizzare i tuoi obblighi fiscali con soluzioni personalizzate."
        />
        <meta
          name="keywords"
          content="consulenza fiscale, tributarista, pianificazione fiscale, ottimizzazione imposte, gestione patrimoniale, verifiche fiscali"
        />
        <meta name="author" content="Alessandro Amoroso" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <header
        className="relative w-full h-64 bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Consulenza Fiscale
          </h1>
        </div>
      </header>

      {/* Introduzione */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Chi Sono</h2>
        <p className="text-lg text-gray-700 mb-4">
          Mi chiamo Alessandro Amoroso, tributarista qualificato iscritto alla
          LAPET (Associazione Nazionale Tributaristi) ai sensi della legge n.4
          del 14 gennaio 2013. Tessera n. 10999082.
        </p>
        <p className="text-lg text-gray-700">
          Offro consulenza fiscale a privati e aziende per supportarli nella
          gestione e ottimizzazione degli obblighi fiscali. Con un approccio
          aggiornato e strategico, aiuto i miei clienti a navigare nel complesso
          mondo della fiscalità con sicurezza e vantaggi tangibili.
        </p>
      </section>

      {/* Sezioni Tematiche */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <article className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Pianificazione Fiscale
          </h3>
          <p className="text-gray-700">
            La pianificazione fiscale consente di analizzare in anticipo il
            carico fiscale, sviluppando strategie per ottimizzare la gestione
            dei redditi e degli investimenti. Un tributarista esperto offre
            soluzioni personalizzate che aiutano a ridurre le imposte in modo
            legale, sfruttando le deduzioni e agevolazioni disponibili.
          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Ottimizzazione delle Imposte
          </h3>
          <p className="text-gray-700">
            Un tributarista effettua una revisione approfondita delle pratiche
            fiscali esistenti, identificando aree in cui è possibile ottimizzare
            il carico fiscale. Questo processo include la revisione delle spese
            e dei redditi per garantire il pagamento delle imposte corrette,
            senza eccedenze.
          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Assistenza nelle Verifiche Fiscali
          </h3>
          <p className="text-gray-700">
            In caso di controlli fiscali, il tributarista rappresenta il cliente
            davanti all'Agenzia delle Entrate e supporta nella preparazione di
            tutta la documentazione richiesta. Questo aiuta a risolvere
            rapidamente le verifiche e a gestire le comunicazioni con le
            autorità fiscali per evitare sanzioni.
          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Gestione Patrimoniale e Pianificazione Successoria
          </h3>
          <p className="text-gray-700">
            Il tributarista fornisce consulenza per proteggere e ottimizzare il
            patrimonio. Attraverso una pianificazione successoria adeguata, è
            possibile ridurre le imposte di successione e facilitare il
            trasferimento di beni e capitali ai propri eredi.
          </p>
        </article>
      </section>

      {/* Conclusione */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Richiedi una Consulenza Fiscale
        </h2>
        <p className="text-lg mb-6">
          Un tributarista esperto può aiutarti a navigare nel complesso panorama
          fiscale con soluzioni su misura per le tue esigenze. Contattaci per
          maggiori informazioni e inizia a ottimizzare la tua gestione fiscale
          oggi stesso.
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

export default ConsulenzaFiscale;
