import React from "react";
import CalcoloPreliminare from "../components/CalcoloPreliminare";
import heroImage from "../assets/images/real_estate_hero.webp"; // Ensure correct path to the image

const RegistrazionePreliminare = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-96 mb-12">
        <img
          src={heroImage}
          alt="Real Estate Agreement"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Registrazione Preliminare di Vendita
          </h1>
        </div>
      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Card 1 */}
        <div className="bg-white p-8 shadow-lg rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Che cos’è il contratto preliminare di compravendita?</h2>
          <p className="text-base text-text leading-relaxed mb-4">
            Il contratto preliminare di compravendita, conosciuto anche come compromesso, è un accordo con cui le due parti (venditore e acquirente di un immobile) si impegnano a stipulare il contratto definitivo di compravendita in un momento successivo. Questo contratto stabilisce l'obbligo reciproco di vendere o acquistare l'immobile, ma non determina un trasferimento immediato della proprietà, che avverrà solo con la firma del contratto definitivo. Solitamente, il compromesso è stipulato in forma scritta privatamente dalle parti o attraverso mediatori.
          </p>
          <p className="text-base text-text leading-relaxed mb-4">
            La norma di riferimento è l'art. 1350, primo comma n.1 c.c., che prevede che i contratti che trasferiscono la proprietà di beni immobili devono essere redatti in forma scritta, tramite atto pubblico o privato, a pena di nullità. La <strong>caparra confirmatoria</strong> è una somma di denaro che viene versata come garanzia reciproca contro l'inadempimento del contratto. L'immobile oggetto del compromesso viene quindi riservato esclusivamente all'acquirente firmatario o ai soggetti da lui rappresentati.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 shadow-lg rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-6 text-primary">La registrazione del compromesso è obbligatoria?</h2>
          <p className="text-base text-text leading-relaxed mb-4">
            La registrazione del contratto preliminare di compravendita non è obbligatoria se, entro 30 giorni dalla sua firma, si procede alla stipula dell'atto definitivo (rogito) presso un notaio. Tuttavia, in caso contrario, il compromesso deve essere registrato entro 30 giorni dalla sua sottoscrizione. La mancata registrazione può configurare un’evasione fiscale e comportare sanzioni da parte dell’Agenzia delle Entrate.
          </p>
          <p className="text-base text-text leading-relaxed mb-4">
            A differenza di quanto avveniva in passato, l’Agenzia delle Entrate addebita direttamente l’importo delle imposte dovute sul conto corrente del contribuente, rendendo superfluo il pagamento tramite modello F24.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 shadow-lg rounded-lg border border-border md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-primary">A quanto ammontano le spese di registrazione del compromesso?</h2>
          <p className="text-base text-text leading-relaxed mb-4">
            Quando si registra un contratto preliminare di compravendita, è necessario considerare le imposte da versare. Le principali spese da sostenere sono:
          </p>
          <ul className="list-disc list-inside mb-4 text-text">
            <li><strong>Imposta di registro fissa</strong>: 200€, solitamente suddivisa tra acquirente e venditore;</li>
            <li><strong>Imposta di bollo</strong>: 16€ ogni quattro facciate del compromesso o ogni 100 righe;</li>
            <li><strong>0,50%</strong> sull’importo versato come caparra confirmatoria;</li>
            <li><strong>3%</strong> sull’importo versato come acconto sul prezzo.</li>
          </ul>
          <p className="text-base text-text leading-relaxed mb-4">
            Questi costi devono essere versati al momento della registrazione del compromesso.
          </p>
        </div>
      </div>

      <CalcoloPreliminare />
    </div>
  );
};

export default RegistrazionePreliminare;
