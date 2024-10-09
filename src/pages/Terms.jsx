import React from "react";

const TerminiCondizioni = () => {
  return (
    <div className="bg-background min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Termini e Condizioni</h1>
        <p className="text-lg text-text mb-6">
          Benvenuti sul nostro sito. Continuando a navigare o utilizzare i
          nostri servizi, accetti i seguenti termini e condizioni.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Utilizzo del Sito</h2>
          <p className="text-text">
            Questo sito è destinato a fornire informazioni e servizi fiscali. L'utilizzo è a rischio
            dell'utente.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Proprietà Intellettuale</h2>
          <p className="text-text">
            I contenuti presenti sul sito, inclusi testi, immagini e loghi, sono protetti da
            copyright. È vietata la riproduzione senza autorizzazione.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Limitazioni di Responsabilità</h2>
          <p className="text-text">
            Non siamo responsabili per eventuali danni derivanti dall'uso del sito o dei servizi offerti.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Modifiche ai Termini</h2>
          <p className="text-text">
            Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche
            saranno comunicate attraverso il sito.
          </p>
        </section>

        <p className="text-sm text-text mt-6">
          Se hai domande sui nostri termini e condizioni, ti preghiamo di contattarci.
        </p>
      </div>
    </div>
  );
};

export default TerminiCondizioni;
