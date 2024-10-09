import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        <p className="text-lg text-text mb-6">
          La tua privacy è importante per noi. Questa informativa sulla privacy
          spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati
          personali.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Raccolta dei Dati</h2>
          <p className="text-text">
            Raccogliamo dati personali come nome, indirizzo email, ecc., quando
            interagisci con il nostro sito.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Uso dei Dati</h2>
          <p className="text-text">
            Utilizziamo i tuoi dati per migliorare i nostri servizi e per
            comunicazioni occasionali relative alle novità fiscali.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Protezione dei Dati</h2>
          <p className="text-text">
            Garantiamo che i tuoi dati siano protetti secondo le migliori pratiche di sicurezza.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Diritti degli Utenti</h2>
          <p className="text-text">
            Puoi richiedere la modifica o la cancellazione dei tuoi dati in qualsiasi momento.
          </p>
        </section>

        <p className="text-sm text-text mt-6">
          Se hai domande sulla nostra informativa sulla privacy, non esitare a contattarci.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
