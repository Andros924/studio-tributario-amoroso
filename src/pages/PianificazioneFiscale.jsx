import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/pianificazione-fiscale-hero.jpg";

const PianificazioneFiscale = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Pianificazione Fiscale
          </h1>
        </div>
      </div>

      {/* Introduzione */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Che cos'è la Pianificazione Fiscale?
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          La pianificazione fiscale è un approccio strategico che permette a
          privati e aziende di gestire il proprio carico tributario in modo
          efficace e legale. L'obiettivo è ridurre le imposte, ottimizzare la
          gestione finanziaria e garantire la conformità alle normative fiscali.
        </p>
        <p className="text-lg text-gray-700">
          Un professionista esperto può aiutare a sfruttare le agevolazioni
          fiscali disponibili, proteggendo il patrimonio e massimizzando le
          risorse destinate a investimenti e crescita.
        </p>
      </div>

      {/* Sezioni Tematiche */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Riduzione del Carico Fiscale */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Riduzione del Carico Fiscale
          </h3>
          <p className="text-gray-700">
            La pianificazione fiscale permette di ridurre l'imposta grazie
            all'uso di deduzioni, detrazioni e regimi agevolati. Questo si
            traduce in maggiori risorse disponibili da reinvestire.
          </p>
        </div>

        {/* Protezione del Patrimonio */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Protezione del Patrimonio
          </h3>
          <p className="text-gray-700">
            Strategie di protezione del patrimonio consentono di salvaguardare
            gli attivi personali e aziendali, riducendo il rischio di perdite
            dovute a imprevisti o debiti.
          </p>
        </div>

        {/* Ottimizzazione della Struttura Aziendale */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Ottimizzazione della Struttura Aziendale
          </h3>
          <p className="text-gray-700">
            Un’analisi attenta della struttura aziendale aiuta a scegliere la
            forma giuridica più conveniente e a sfruttare i benefici fiscali,
            come il Patent Box e le agevolazioni per le PMI.
          </p>
        </div>

        {/* Accesso a Incentivi Fiscali */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Accesso a Incentivi Fiscali
          </h3>
          <p className="text-gray-700">
            I professionisti esperti in pianificazione fiscale aiutano a
            ottenere crediti d’imposta e incentivi per investimenti in ricerca e
            sviluppo, beni strumentali e nuove assunzioni.
          </p>
        </div>
      </div>

      {/* Conclusione */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Richiedi una Consulenza per la tua Pianificazione Fiscale
        </h2>
        <p className="text-lg mb-6">
          Ottimizza la gestione fiscale con una consulenza personalizzata.
          Contattaci per scoprire come possiamo aiutarti a raggiungere i tuoi
          obiettivi finanziari.
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

export default PianificazioneFiscale;
