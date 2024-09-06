import React from 'react';

const ChiSiamo = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-darkred mb-12">Chi Siamo</h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-darkred mb-4">La Nostra Storia</h2>
          <p className="text-gray-700 mb-4">
            Fondata nel [Anno], la nostra società di consulenza tributaria si è affermata come punto di riferimento
            per privati e aziende in cerca di soluzioni fiscali affidabili e innovative. Con anni di esperienza
            nel settore, abbiamo costruito una reputazione basata sulla competenza, l'integrità e l'attenzione
            al cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            
            <h3 className="text-xl font-semibold text-darkred mb-2">Il Nostro Team</h3>
            <p className="text-gray-700 text-center">
              Un gruppo di professionisti altamente qualificati, pronti a offrire consulenza personalizzata
              per ogni vostra esigenza fiscale.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
           
            <h3 className="text-xl font-semibold text-darkred mb-2">I Nostri Servizi</h3>
            <p className="text-gray-700 text-center">
              Offriamo una vasta gamma di servizi tributari, dalla pianificazione fiscale alla gestione
              della contabilità, sempre con un approccio su misura.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            {/* Sostituisci LightBulbIcon con un'immagine SVG */}
            <svg className="w-12 h-12 text-lightred mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg> 
            <h3 className="text-xl font-semibold text-darkred mb-2">La Nostra Missione</h3>
            <p className="text-gray-700 text-center">
              Miriamo a semplificare il complesso mondo fiscale per i nostri clienti, offrendo soluzioni
              innovative e conformi alle normative vigenti.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-darkred mb-4">I Nostri Valori</h2>
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