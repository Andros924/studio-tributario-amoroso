import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/dichiarazione-redditi-hero.jpg";

const DichiarazioneRedditi = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Dichiarazione dei Redditi
          </h1>
        </div>
      </div>

      {/* Introduzione */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Cos'è la Dichiarazione dei Redditi?
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          La dichiarazione dei redditi è un documento fiscale che permette di
          dichiarare i propri redditi e calcolare le imposte dovute allo Stato.
          Essa è obbligatoria per i contribuenti che superano determinate soglie
          di reddito e consente di beneficiare di deduzioni e detrazioni
          fiscali.
        </p>
        <p className="text-lg text-gray-700">
          Compilare la dichiarazione dei redditi in modo corretto e puntuale è
          fondamentale per evitare sanzioni e per ottimizzare il proprio carico
          fiscale. Con l’assistenza di un professionista qualificato, la
          gestione della dichiarazione diventa più semplice e sicura.
        </p>
      </div>

      {/* Sezioni Tematiche */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Modalità di Compilazione */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Modalità di Compilazione
          </h3>
          <p className="text-gray-700">
            La dichiarazione dei redditi può essere compilata autonomamente o
            con il supporto di un tributarista, che garantisce una corretta
            interpretazione delle normative fiscali, minimizzando il rischio di
            errori e di successive sanzioni.
          </p>
        </div>

        {/* Detrazioni e Deduzioni Fiscali */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Detrazioni e Deduzioni Fiscali
          </h3>
          <p className="text-gray-700">
            Le detrazioni e deduzioni fiscali consentono di ridurre l’importo
            delle imposte da pagare. Un tributarista esperto può identificare le
            agevolazioni applicabili alla tua situazione, massimizzando il
            risparmio fiscale in maniera legale.
          </p>
        </div>

        {/* Gestione delle Scadenze */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Gestione delle Scadenze
          </h3>
          <p className="text-gray-700">
            La gestione delle scadenze è cruciale per evitare sanzioni fiscali.
            Con il supporto di un professionista, puoi essere certo di
            rispettare tutte le tempistiche stabilite dalla legge, evitando
            ritardi e sovrapposizioni.
          </p>
        </div>

        {/* Assistenza in Caso di Controlli */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Assistenza in Caso di Controlli
          </h3>
          <p className="text-gray-700">
            In caso di controlli fiscali, è fondamentale avere il supporto di un
            tributarista che può rappresentarti e gestire le comunicazioni con
            l'Agenzia delle Entrate, assicurando che ogni aspetto della
            dichiarazione sia corretto e documentato.
          </p>
        </div>
      </div>

      {/* Conclusione */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Richiedi Assistenza per la tua Dichiarazione dei Redditi
        </h2>
        <p className="text-lg mb-6">
          La dichiarazione dei redditi è un momento cruciale per ogni
          contribuente. Affidati alla competenza di un tributarista per ottenere
          la massima tranquillità e per sfruttare ogni possibile vantaggio
          fiscale. Contattaci oggi stesso per una consulenza.
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

export default DichiarazioneRedditi;
