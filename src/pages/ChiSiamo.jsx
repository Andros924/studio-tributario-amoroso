import React from "react";
import {
  UsersIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const ChiSiamo = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Chi Siamo
        </h1>

        {/* Sezione Storia e Servizi Combinata */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-12">
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
            Il nostro viaggio è iniziato con una visione chiara: rendere la
            gestione fiscale non solo più semplice, ma anche più intuitiva e
            accessibile per tutti. Abbiamo costruito il nostro studio sulla
            premessa che la tecnologia, se utilizzata saggiamente, può
            rivoluzionare il modo in cui le persone e le aziende affrontano le
            loro responsabilità fiscali.
          </p>
          <p className="text-gray-700 mb-4">
            Offriamo una gamma completa di servizi tributari, dalla
            pianificazione fiscale strategica alla gestione quotidiana della
            contabilità. Ciò che ci distingue è il nostro approccio: utilizziamo
            strumenti all'avanguardia e software intelligenti per automatizzare
            i processi, ridurre gli errori e fornire insights in tempo reale.
            Questo ci permette di dedicare più tempo alla consulenza
            personalizzata, assicurando che ogni cliente riceva soluzioni su
            misura per le proprie esigenze specifiche.
          </p>
          <p className="text-gray-700">
            In breve tempo, ci siamo affermati come punto di riferimento per
            privati e aziende che cercano non solo competenza fiscale, ma anche
            un partner che guardi al futuro. La nostra squadra cresce e si
            evolve costantemente, sempre alla ricerca di nuove tecnologie e
            approcci innovativi per servire meglio i nostri clienti e anticipare
            le sfide del domani.
          </p>
        </div>

        {/* Griglia con 3 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
            <UsersIcon className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
              Il Nostro Team
            </h3>
            <p className="text-gray-700">
              Un gruppo di giovani professionisti appassionati, che uniscono
              competenza fiscale e abilità tecnologiche per offrire un servizio
              all'avanguardia.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
            <RocketLaunchIcon className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
              Innovazione Tecnologica
            </h3>
            <p className="text-gray-700">
              Utilizziamo le più recenti tecnologie per semplificare i processi
              fiscali, garantendo efficienza e precisione in ogni aspetto del
              nostro lavoro.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
            <LightBulbIcon className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
              La Nostra Missione
            </h3>
            <p className="text-gray-700">
              Semplificare il complesso mondo fiscale con soluzioni innovative,
              garantendo tranquillità e successo ai nostri clienti nel presente
              e nel futuro.
            </p>
          </div>
        </div>

        {/* Sezione Valori */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
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
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;
