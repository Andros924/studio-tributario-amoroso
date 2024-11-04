import React from 'react';
import Contatti from './Contatti'; // Ensure the path is correct

const SuccessioniServizio = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '30px' }}>
        Servizio Successioni
      </h1>
      <p>
        La gestione delle successioni ereditarie in Italia richiede una comprensione approfondita delle normative e delle procedure fiscali. Il nostro studio offre un servizio completo per semplificare ogni fase, dalla presentazione della dichiarazione all'Agenzia delle Entrate alla consulenza sulla protezione del patrimonio.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', boxShadow: '0 3px 8px rgba(0,0,0,0.1)' }}>
          <h3><strong>Preparazione della Dichiarazione di Successione</strong></h3>
          <p>
            La <strong>dichiarazione di successione</strong> deve essere presentata entro 12 mesi dall'apertura della successione, che coincide generalmente con la data del decesso. Include i dati del defunto, degli eredi, e la descrizione dettagliata dei beni ereditati. La dichiarazione può essere presentata tramite il servizio telematico dell'Agenzia delle Entrate utilizzando lo SPID, la Carta d'identità elettronica (CIE), o la Carta nazionale dei servizi (CNS).
          </p>
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', boxShadow: '0 3px 8px rgba(0,0,0,0.1)' }}>
          <h3><strong>Accettazione con Beneficio d'Inventario</strong></h3>
          <p>
            L'<strong>accettazione con beneficio d'inventario</strong> consente agli eredi di limitare la propria responsabilità per i debiti ereditari al solo valore dei beni ricevuti. Questa modalità è essenziale quando vi sono dubbi sulla mole dei debiti del defunto. Va dichiarata entro tre mesi dall'assunzione dei beni ereditati, con possibilità di proroga autorizzata dal tribunale per motivi validi.
          </p>
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', boxShadow: '0 3px 8px rgba(0,0,0,0.1)' }}>
          <h3><strong>Consulenza su Quote di Legittima e Successione Legittima</strong></h3>
          <p>
            La legge italiana prevede che una parte dell'eredità sia riservata ai <strong>legittimari</strong> (coniuge, figli, ascendenti). In caso di violazione di queste quote tramite testamento, gli eredi legittimari possono avviare un'azione legale per la riduzione. La nostra consulenza garantisce il rispetto di queste disposizioni e la corretta gestione dei diritti ereditari.
          </p>
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', boxShadow: '0 3px 8px rgba(0,0,0,0.1)' }}>
          <h3><strong>Gestione Documentazione e Pratiche Fiscali</strong></h3>
          <p>
            Assicuriamo un'assistenza completa nella raccolta di documenti come il <strong>certificato di morte</strong>, il <strong>certificato di famiglia</strong> e, se presente, il testamento autenticato. Inoltre, ci occupiamo della trascrizione della dichiarazione e delle volture catastali, necessarie per trasferire formalmente i beni agli eredi.
          </p>
        </div>
      </div>

      <p style={{ marginTop: '20px' }}>
        Contattaci per una consulenza iniziale e scopri come possiamo semplificare la gestione della tua pratica successoria. Il nostro team garantisce un servizio personalizzato, aiutandoti a rispettare tutte le normative fiscali e a proteggere il tuo patrimonio.
      </p>

      {/* Wrapping the contact form */}
      <Contatti />
    </div>
  );
};

export default SuccessioniServizio;
