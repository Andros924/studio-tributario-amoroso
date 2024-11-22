import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Helmet>
        <title>Privacy Policy | Tributarista Alessandro Amoroso</title>
        <meta
          name="description"
          content="Scopri come proteggiamo i tuoi dati personali. Leggi la nostra Privacy Policy per maggiori informazioni."
        />
        <meta
          name="keywords"
          content="privacy policy, protezione dati, GDPR, tributarista"
        />
        <link rel="canonical" href="https://studiofiscaleamoroso.com/privacy" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          La tua privacy è importante per noi. Questa informativa sulla privacy
          spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati
          personali.
        </p>

        {/* Section: Raccolta dei Dati */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Raccolta dei Dati
          </h2>
          <p className="text-gray-700">
            Raccogliamo dati personali come nome, indirizzo email, e altre
            informazioni rilevanti, quando interagisci con il nostro sito o i
            nostri servizi.
          </p>
        </section>

        {/* Section: Uso dei Dati */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Uso dei Dati
          </h2>
          <p className="text-gray-700">
            Utilizziamo i tuoi dati per migliorare i nostri servizi, fornire
            supporto, e inviare comunicazioni occasionali relative alle novità
            fiscali o promozionali.
          </p>
        </section>

        {/* Section: Protezione dei Dati */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Protezione dei Dati
          </h2>
          <p className="text-gray-700">
            Adottiamo misure di sicurezza tecniche e organizzative per garantire
            che i tuoi dati siano protetti contro accessi non autorizzati,
            alterazioni o perdite.
          </p>
        </section>

        {/* Section: Diritti degli Utenti */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Diritti degli Utenti
          </h2>
          <p className="text-gray-700">
            Hai il diritto di accedere, correggere, aggiornare o richiedere la
            cancellazione dei tuoi dati personali in qualsiasi momento. Per
            esercitare questi diritti, contattaci tramite i nostri canali
            ufficiali.
          </p>
        </section>

        {/* Footer Note */}
        <p className="text-sm text-gray-600 mt-6">
          Se hai domande o dubbi sulla nostra informativa sulla privacy, non
          esitare a{" "}
          <a href="/contatti" className="text-blue-700 hover:underline">
            contattarci
          </a>
          . Siamo qui per aiutarti.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
