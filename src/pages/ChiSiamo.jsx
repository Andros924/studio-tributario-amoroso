import React from 'react';
import { UsersIcon, BriefcaseIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const ChiSiamo = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Chi Siamo</h1>

        {/* Sezione Storia */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">La Nostra Storia</h2>
          <p className="text-gray-700 mb-4">
            Fondata nel 2021, il nostro studio di consulenza tributaria si è affermata come punto di riferimento
            per privati e aziende in cerca di soluzioni fiscali affidabili e innovative. Con anni di esperienza
            nel settore, abbiamo costruito una reputazione basata sulla competenza, l'integrità e l'attenzione
            al cliente.
          </p>
        </div>

        {/* Griglia con 3 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
            <UsersIcon className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">Il Nostro Team</h3>
            <p className="text-gray-700">
              Un gruppo di professionisti altamente qualificati, pronti a offrire consulenza personalizzata
              per ogni vostra esigenza fiscale.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
            <BriefcaseIcon className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">I Nostri Servizi</h3>
            <p className="text-gray-700">
              Offriamo una vasta gamma di servizi tributari, dalla pianificazione fiscale alla gestione
              della contabilità, sempre con un approccio su misura.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
            <LightBulbIcon className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">La Nostra Missione</h3>
            <p className="text-gray-700">
              Miriamo a semplificare il complesso mondo fiscale per i nostri clienti, offrendo soluzioni
              innovative e conformi alle normative vigenti.
            </p>
          </div>
        </div>

        {/* Sezione Valori */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">I Nostri Valori</h2>
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
