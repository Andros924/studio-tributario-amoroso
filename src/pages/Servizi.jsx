import React from 'react';
import { CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Servizi = () => {
  const serviziOfferti = [
    {
      titolo: "Consulenza Fiscale",
      descrizione: "Offriamo consulenza personalizzata per aiutarti a navigare nel complesso panorama fiscale, ottimizzando la tua situazione fiscale nel rispetto delle normative vigenti.",
      vantaggi: [
        "Analisi dettagliata della tua situazione fiscale",
        "Strategie di ottimizzazione fiscale su misura",
        "Aggiornamenti continui sulle novità fiscali"
      ]
    },
    {
      titolo: "Dichiarazione dei Redditi",
      descrizione: "Ci occupiamo della compilazione e presentazione delle dichiarazioni dei redditi per privati e aziende, assicurando la massima precisione e il rispetto delle scadenze.",
      vantaggi: [
        "Massimizzazione delle detrazioni e deduzioni fiscali",
        "Riduzione del rischio di errori e sanzioni",
        "Assistenza in caso di controlli da parte dell'Agenzia delle Entrate"
      ]
    },
    {
      titolo: "Pianificazione Fiscale",
      descrizione: "Sviluppiamo strategie di pianificazione fiscale a lungo termine per aiutarti a raggiungere i tuoi obiettivi finanziari minimizzando il carico fiscale nel rispetto della legge.",
      vantaggi: [
        "Ottimizzazione della struttura societaria",
        "Pianificazione delle successioni",
        "Strategie per la gestione del patrimonio"
      ]
    },
    {
      titolo: "Contabilità Aziendale",
      descrizione: "Gestiamo la contabilità della tua azienda, garantendo precisione, conformità alle normative e reportistica tempestiva per supportare le tue decisioni aziendali.",
      vantaggi: [
        "Tenuta dei libri contabili in regola",
        "Preparazione di bilanci e report finanziari",
        "Analisi finanziarie per il supporto decisionale"
      ]
    },
    {
      titolo: "Assistenza in Caso di Controlli Fiscali",
      descrizione: "Forniamo supporto completo in caso di verifiche e controlli fiscali, rappresentandoti davanti alle autorità fiscali e gestendo tutte le comunicazioni necessarie.",
      vantaggi: [
        "Rappresentanza qualificata davanti all'Agenzia delle Entrate",
        "Preparazione e revisione della documentazione richiesta",
        "Negoziazione di eventuali accordi o piani di rateizzazione"
      ]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8"> 
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">I Nostri Servizi</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {serviziOfferti.map((servizio, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">{servizio.titolo}</h2>
                <p className="text-gray-600 mb-6">{servizio.descrizione}</p>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Vantaggi:</h3>
                <ul className="space-y-2">
                  {servizio.vantaggi.map((vantaggio, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{vantaggio}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-center md:text-left"> 
                <Link to="/contatti" className="text-blue-500 font-semibold hover:text-blue-900 transition duration-300 flex items-center justify-center md:justify-start"> 
                  Richiedi una consulenza per questo servizio
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Hai domande sui nostri servizi?</h2> 
          <p className="text-gray-600 mb-8">Siamo qui per aiutarti a trovare la soluzione migliore per le tue esigenze fiscali.</p>
          <Link to="/contatti" className="bg-blue-900 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-500 transition duration-300">
            Contattaci Ora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Servizi;