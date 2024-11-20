import React from "react";
import { Helmet } from "react-helmet";
import {
  UsersIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const ChiSiamo = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Chi Siamo | Consulenza Tributaria e Innovazione</title>
        <meta
          name="description"
          content="Scopri chi siamo: un team di esperti tributari che unisce competenza e innovazione per offrire soluzioni fiscali su misura per privati e aziende."
        />
        <meta
          name="keywords"
          content="chi siamo, consulenza tributaria, team fiscale, innovazione fiscale, consulenza aziende"
        />
        <meta name="author" content="Studio Fiscale" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            Chi Siamo
          </h1>
        </header>

        {/* Sezione Storia e Servizi */}
        <section className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
            La Nostra Storia e I Nostri Servizi
          </h2>
          <p className="text-gray-700 mb-4">
            Nati nel cuore dell'era digitale, siamo un team giovane e dinamico
            di consulenti tributari che ha trasformato l'approccio tradizionale
            alla consulenza fiscale. Fin dall'inizio, abbiamo unito la nostra
            passione per l'innovazione tecnologica con una profonda comprensione
            delle esigenze dei nostri clienti.
          </p>
          <p className="text-gray-700 mb-4">
            Offriamo una gamma completa di servizi tributari, dalla pianificazione
            fiscale strategica alla gestione quotidiana della contabilità, utilizzando
            strumenti all'avanguardia per risultati ottimali.
          </p>
        </section>

        {/* Griglia con 3 Colonne */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <article
            className="bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center text-center"
            aria-labelledby="team-title"
          >
            <UsersIcon className="w-12 h-12 text-blue-900 mb-4" />
            <h3 id="team-title" className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
              Il Nostro Team
            </h3>
            <p className="text-gray-700">
              Un gruppo di giovani professionisti appassionati, che uniscono
              competenza fiscale e abilità tecnologiche per offrire un servizio
              all'avanguardia.
            </p>
          </article>

          <article
            className="bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center text-center"
            aria-labelledby="innovation-title"
          >
            <RocketLaunchIcon className="w-12 h-12 text-blue-900 mb-4" />
            <h3 id="innovation-title" className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
              Innovazione Tecnologica
            </h3>
            <p className="text-gray-700">
              Utilizziamo le più recenti tecnologie per semplificare i processi
              fiscali, garantendo efficienza e precisione in ogni aspetto del
              nostro lavoro.
            </p>
          </article>

          <article
            className="bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center text-center"
            aria-labelledby="mission-title"
          >
            <LightBulbIcon className="w-12 h-12 text-blue-900 mb-4" />
            <h3 id="mission-title" className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
              La Nostra Missione
            </h3>
            <p className="text-gray-700">
              Semplificare il complesso mondo fiscale con soluzioni innovative,
              garantendo tranquillità e successo ai nostri clienti nel presente
              e nel futuro.
            </p>
          </article>
        </section>

        {/* Sezione Valori */}
        <section className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
            I Nostri Valori
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Innovazione continua al servizio del cliente</li>
            <li>Trasparenza e integrità in ogni interazione</li>
            <li>Approccio proattivo alle sfide fiscali del futuro</li>
            <li>Formazione continua e aggiornamento tecnologico</li>
            <li>Personalizzazione e attenzione alle esigenze individuali</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ChiSiamo;