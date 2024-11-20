import React from "react";
import { Helmet } from "react-helmet";
import CalcoloPreliminare from "../components/CalcoloPreliminare";
import heroImage from "../assets/images/real_estate_hero.webp";

const RegistrazionePreliminare = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Registrazione Preliminare di Vendita | Studio Amoroso</title>
        <meta
          name="description"
          content="Scopri tutto sulla registrazione del contratto preliminare di compravendita, i costi, le regole e perché è importante farlo correttamente."
        />
        <meta
          name="keywords"
          content="registrazione preliminare, compromesso di vendita, contratto preliminare, imposte registro"
        />
        <link rel="canonical" href="https://studiofiscaleamoroso.com/registrazione-preliminare" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-96 mb-12">
        <img
          src={heroImage}
          alt="Registrazione preliminare di compravendita immobiliare"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Registrazione Preliminare di Vendita
          </h1>
        </div>
      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Card 1 */}
        <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">
            Che cos’è il contratto preliminare di compravendita?
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Il contratto preliminare di compravendita, conosciuto anche come
            compromesso, è un accordo con cui le due parti (venditore e
            acquirente di un immobile) si impegnano a stipulare il contratto
            definitivo di compravendita in un momento successivo. Questo
            contratto stabilisce l'obbligo reciproco di vendere o acquistare
            l'immobile, ma non determina un trasferimento immediato della
            proprietà.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            La norma di riferimento è l'art. 1350, primo comma n.1 c.c., che
            prevede che i contratti che trasferiscono la proprietà di beni
            immobili devono essere redatti in forma scritta, tramite atto
            pubblico o privato, a pena di nullità.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">
            La registrazione del compromesso è obbligatoria?
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            La registrazione del contratto preliminare di compravendita non è
            obbligatoria se, entro 30 giorni dalla sua firma, si procede alla
            stipula dell'atto definitivo (rogito) presso un notaio. Tuttavia, in
            caso contrario, il compromesso deve essere registrato entro 30
            giorni dalla sua sottoscrizione.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            A differenza del passato, l’Agenzia delle Entrate addebita
            direttamente l’importo delle imposte dovute sul conto corrente del
            contribuente, rendendo superfluo il pagamento tramite modello F24.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">
            A quanto ammontano le spese di registrazione del compromesso?
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Quando si registra un contratto preliminare di compravendita, è
            necessario considerare le imposte da versare. Le principali spese da
            sostenere sono:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              <strong>Imposta di registro fissa</strong>: 200€, solitamente
              suddivisa tra acquirente e venditore;
            </li>
            <li>
              <strong>Imposta di bollo</strong>: 16€ ogni quattro facciate del
              compromesso o ogni 100 righe;
            </li>
            <li>
              <strong>0,50%</strong> sull’importo versato come caparra
              confirmatoria;
            </li>
            <li>
              <strong>3%</strong> sull’importo versato come acconto sul prezzo.
            </li>
          </ul>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Questi costi devono essere versati al momento della registrazione
            del compromesso.
          </p>
        </div>
      </div>

      {/* Calcolo Preliminare Component */}
      <CalcoloPreliminare />
    </div>
  );
};

export default RegistrazionePreliminare;
