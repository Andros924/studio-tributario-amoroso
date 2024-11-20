import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/contabilita-fiscale-hero.jpg";

const ContabilitaFiscale = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Servizio di Contabilità Fiscale
          </h1>
        </div>
      </div>

      {/* Introduzione */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Contabilità Fiscale per Professionisti e Aziende
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          La contabilità fiscale varia notevolmente tra professionisti e
          aziende, in base alle loro esigenze amministrative e fiscali. Il
          nostro servizio offre supporto specializzato per entrambe le
          categorie, aiutandoti a scegliere e gestire il regime contabile più
          adatto.
        </p>
      </div>

      {/* Sezione Contabilità per Professionisti */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Contabilità per Professionisti
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Regime Forfettario per Professionisti */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Regime Forfettario
            </h3>
            <p className="text-gray-700">
              Il regime forfettario è ideale per professionisti con ricavi
              inferiori a 85.000 euro annui. Questo regime agevolato prevede una
              flat tax a aliquota ridotta e una gestione contabile semplificata,
              senza l'obbligo di tenere registri IVA o bilanci, riducendo gli
              oneri burocratici.
            </p>
          </div>

          {/* Regime di Contabilità Semplificata per Professionisti */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Regime di Contabilità Semplificata
            </h3>
            <p className="text-gray-700">
              La contabilità semplificata è indicata per i professionisti che
              superano i limiti del regime forfettario. Si basa sul principio di
              cassa, con registrazioni degli incassi e pagamenti nei registri
              IVA, permettendo una gestione finanziaria più accessibile e
              snella.
            </p>
          </div>

          {/* Regime di Contabilità Ordinaria per Professionisti */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Regime di Contabilità Ordinaria
            </h3>
            <p className="text-gray-700">
              Il regime ordinario è obbligatorio per professionisti con volumi
              di affari superiori a determinati limiti. Questo sistema offre una
              visione completa della situazione finanziaria, includendo bilanci
              e una registrazione dettagliata di ogni operazione economica.
            </p>
          </div>

          {/* Supporto nella Scelta del Regime per Professionisti */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Consulenza per la Scelta del Regime
            </h3>
            <p className="text-gray-700">
              La scelta del regime contabile è essenziale per ottimizzare il
              carico fiscale. Offriamo consulenza per aiutare i professionisti a
              scegliere il regime fiscale più vantaggioso, supportando ogni fase
              della gestione fiscale.
            </p>
          </div>
        </div>
      </div>

      {/* Sezione Contabilità per Aziende */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Contabilità per Aziende
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contabilità Ordinaria per Aziende */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Contabilità Ordinaria
            </h3>
            <p className="text-gray-700">
              La contabilità ordinaria è il sistema principale per le aziende.
              Include la registrazione di tutte le operazioni finanziarie e
              richiede la redazione del bilancio d'esercizio annuale, offrendo
              una visione completa della gestione economica e patrimoniale.
            </p>
          </div>

          {/* Regime Semplificato per Piccole Imprese */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Regime Semplificato
            </h3>
            <p className="text-gray-700">
              Le piccole imprese con ricavi annui entro limiti specifici possono
              optare per la contabilità semplificata. Questo regime prevede un
              sistema di registrazioni meno complesso e costi amministrativi
              ridotti, pur garantendo il rispetto delle normative fiscali.
            </p>
          </div>

          {/* Supporto per Dichiarazioni e Adempimenti Fiscali */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Dichiarazioni e Adempimenti Fiscali
            </h3>
            <p className="text-gray-700">
              Il nostro servizio include la gestione delle dichiarazioni fiscali
              aziendali (IVA, IRAP, Modello 770) e la preparazione di tutta la
              documentazione necessaria per rispettare le scadenze e le
              normative.
            </p>
          </div>

          {/* Consulenza per Pianificazione e Strategia Fiscale */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Pianificazione e Strategia Fiscale
            </h3>
            <p className="text-gray-700">
              Aiutiamo le aziende a pianificare le loro operazioni fiscali e
              finanziarie, individuando le migliori strategie per ottimizzare il
              carico fiscale e sostenere la crescita aziendale.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusione */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Richiedi una Consulenza per la tua Contabilità
        </h2>
        <p className="text-lg mb-6">
          Siamo qui per supportarti nella gestione contabile, qualunque sia la
          tua attività. Contattaci per scoprire come possiamo aiutarti.
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

export default ContabilitaFiscale;
