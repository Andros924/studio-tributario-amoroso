import React from 'react';
import { Link } from 'react-router-dom';
import Contatti from './Contatti';
import heroImage from '../assets/images/successioni-hero.jpg'; // Aggiungi un'immagine adeguata nella cartella assets/images

const SuccessioniServizio = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 bg-cover bg-center mb-12" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Servizio Successioni</h1>
        </div>
      </div>

      {/* Introduzione */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <p className="text-lg text-gray-700 mb-4">
          La gestione delle successioni ereditarie in Italia richiede una comprensione approfondita delle normative e delle 
          procedure fiscali. Il nostro studio offre un servizio completo per semplificare ogni fase, dalla presentazione della 
          dichiarazione all'Agenzia delle Entrate alla consulenza sulla protezione del patrimonio.
        </p>
      </div>

      {/* Sezioni Tematiche */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Preparazione della Dichiarazione di Successione */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Preparazione della Dichiarazione di Successione</h3>
          <p className="text-gray-700">
            La <strong>dichiarazione di successione</strong> deve essere presentata entro 12 mesi dall'apertura della successione, che coincide 
            generalmente con la data del decesso. Include i dati del defunto, degli eredi, e la descrizione dettagliata dei beni ereditati. La 
            dichiarazione può essere presentata tramite il servizio telematico dell'Agenzia delle Entrate utilizzando lo SPID, la CIE, o la CNS.
          </p>
        </div>

        {/* Accettazione con Beneficio d'Inventario */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Accettazione con Beneficio d'Inventario</h3>
          <p className="text-gray-700">
            L'<strong>accettazione con beneficio d'inventario</strong> consente agli eredi di limitare la propria responsabilità per i debiti 
            ereditari al solo valore dei beni ricevuti. Questa modalità è essenziale quando vi sono dubbi sulla mole dei debiti del defunto.
          </p>
        </div>

        {/* Consulenza su Quote di Legittima e Successione Legittima */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Consulenza su Quote di Legittima e Successione Legittima</h3>
          <p className="text-gray-700">
            La legge italiana prevede che una parte dell'eredità sia riservata ai <strong>legittimari</strong> (coniuge, figli, ascendenti). 
            In caso di violazione di queste quote tramite testamento, gli eredi legittimari possono avviare un'azione legale per la riduzione. 
            La nostra consulenza garantisce il rispetto di queste disposizioni e la corretta gestione dei diritti ereditari.
          </p>
        </div>

        {/* Gestione Documentazione e Pratiche Fiscali */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Gestione Documentazione e Pratiche Fiscali</h3>
          <p className="text-gray-700">
            Assicuriamo un'assistenza completa nella raccolta di documenti come il <strong>certificato di morte</strong>, il <strong>certificato di 
            famiglia</strong> e, se presente, il testamento autenticato. Inoltre, ci occupiamo della trascrizione della dichiarazione e delle volture 
            catastali, necessarie per trasferire formalmente i beni agli eredi.
          </p>
        </div>
      </div>

      {/* Conclusione */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-16 text-center">
        <p className="text-lg text-gray-700">
          Contattaci per una consulenza iniziale e scopri come possiamo semplificare la gestione della tua pratica successoria. 
          Il nostro team garantisce un servizio personalizzato, aiutandoti a rispettare tutte le normative fiscali e a proteggere il tuo patrimonio.
        </p>
      </div>

      {/* Sezione Contatti */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Richiedi la tua Consulenza</h2>
        <p className="text-lg mb-6">
          Semplifica la gestione delle successioni con il supporto dei nostri esperti. Siamo qui per offrirti una consulenza su misura e garantire 
          una gestione professionale e accurata delle pratiche successorie.
        </p>
        <Link
          to="/contatti"
          className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Contattaci Ora
        </Link>
      </div>

      {/* Wrapping the contact form */}
      <Contatti />
    </div>
  );
};

export default SuccessioniServizio;
