import React from "react";
import { Helmet } from "react-helmet";
import RegistrazioneAgenzia from "../components/RegistrazioneAgenzia";

const RegistrazioneAgenziaPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Helmet>
        <title>Registrazione Agenzia delle Entrate | Studio Amoroso</title>
        <meta
          name="description"
          content="Sistema per agenzie immobiliari per la registrazione di contratti di locazione, preliminari e comodati d'uso presso l'Agenzia delle Entrate."
        />
        <meta
          name="keywords"
          content="registrazione contratti, agenzia delle entrate, locazione, preliminare, comodato, agenzie immobiliari"
        />
        <link
          rel="canonical"
          href="https://studiofiscaleamoroso.com/registrazione-agenzia"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <RegistrazioneAgenzia />
      </div>
    </div>
  );
};

export default RegistrazioneAgenziaPage;