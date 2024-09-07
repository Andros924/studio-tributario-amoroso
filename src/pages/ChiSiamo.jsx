import React from 'react';
import { UsersIcon, BriefcaseIcon, LightBulbIcon } from '@heroicons/react/24/outline'; // Assicurati di avere installato @heroicons/react

const ChiSiamo = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Chi Siamo</h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">La Nostra Storia</h2>
          <p className="text-gray-700 mb-4">
            Fondata nel [Anno], la nostra società di consulenza tributaria si è affermata come punto di riferimento
            per privati e aziende in cerca di soluzioni fiscali affidabili e innovative. Con anni di esperienza
            nel settore, abbiamo costruito una reputazione basata sulla competenza, l'integrità e l'attenzione
            al cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <UsersIcon className="w-12 h-12 text-blue-900 mb-4" /> {/* Icona per il Team */}
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Il Nostro Team</h3>
            <p className="text-gray-700 text-center">
              Un gruppo di professionisti altamente qualificati, pronti a offrire consulenza personalizzata
              per ogni vostra esigenza fiscale.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <BriefcaseIcon className="w-12 h-12 text-blue-900 mb-4" /> {/* Icona per i Servizi */}
            <h3 className="text-xl font-semibold text-blue-900 mb-2">I Nostri Servizi</h3>
            <p className="text-gray-700 text-center">
              Offriamo una vasta gamma di servizi tributari, dalla pianificazione fiscale alla gestione
              della contabilità, sempre con un approccio su misura.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <LightBulbIcon className="w-12 h-12 text-blue-900 mb-4" /> {/* Icona per la Missione */}
            <h3 className="text-xl font-semibold text-blue-900 mb-2">La Nostra Missione</h3>
            <p className="text-gray-700 text-center">
              Miriamo a semplificare il complesso mondo fiscale per i nostri clienti, offrendo soluzioni
              innovative e conformi alle normative vigenti.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">I Nostri Valori</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrità e trasparenza in ogni aspetto del nostro lavoro</li>
            <li>Eccellenza professionale e formazione continua</li>
            <li>Attenzione personalizzata alle esigenze di ogni cliente</li>
            <li>Innovazione nell'approccio alle sfide fiscali</li>
            <li>Responsabilità sociale e contributo alla comunità</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;