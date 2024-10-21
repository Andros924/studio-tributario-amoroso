import React, { useState } from "react";
import emailjs from "emailjs-com";
import { jsPDF } from "jspdf";
import dayjs from "dayjs";

const CalcoloPreliminare = () => {
  const [formData, setFormData] = useState({
    nome: "",
    vendita: "",
    caparra: "",
    copie: 2,
    dataSottoscrizione: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [importoTotale, setImportoTotale] = useState(null);
  const [sanzione, setSanzione] = useState(0);

  const formatNumber = (number) => {
    return number.toLocaleString('it-IT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const formatInputNumber = (value) => {
    // Remove any non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    // Format the number with thousands separator
    return digitsOnly.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const parseFormattedNumber = (value) => {
    return parseFloat(value.replace(/\./g, '').replace(',', '.'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'vendita' || name === 'caparra') {
      const formattedValue = formatInputNumber(value);
      setFormData(prevData => ({
        ...prevData,
        [name]: formattedValue
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const calcolaGiorniRitardo = () => {
    const dataCorrente = dayjs();
    const dataSottoscrizione = dayjs(formData.dataSottoscrizione);
    return dataCorrente.diff(dataSottoscrizione, "day");
  };

  const calcolaSanzione = (importoTotale) => {
    const giorniRitardo = calcolaGiorniRitardo();
    
    if (giorniRitardo <= 30) return 0;

    let percentualeSanzione = 0;
    if (giorniRitardo <= 90) {
      percentualeSanzione = 0.12; // 12% entro 90 giorni
    } else if (giorniRitardo <= 365) {
      percentualeSanzione = 0.16; // 16% entro un anno
    } else if (giorniRitardo <= 730) {
      percentualeSanzione = 0.1714; // 17,14% entro due anni
    } else {
      percentualeSanzione = 0.20; // 20% oltre due anni
    }

    const sanzioneCalcolata = importoTotale * percentualeSanzione;
    return sanzioneCalcolata >= 20 ? sanzioneCalcolata : 20;
  };

  const calcolaImporto = () => {
    const impostaFissa = 200;
    const percentualeCaparra = parseFormattedNumber(formData.caparra) * 0.005;
    const impostaCopie = parseFloat(formData.copie) * 16;
    return impostaFissa + percentualeCaparra + impostaCopie;
  };

  const generaPDF = (importoTotale, sanzioneTotale) => {
    const doc = new jsPDF();
    
    let testo = `
      Ciao ${formData.nome},

      Ti scrivo per fornirti le informazioni relative alle imposte e al mio compenso per la registrazione del preliminare di vendita dell'immobile.

      Imposte:
      Imposta di registro: € ${formatNumber(200 + (parseFormattedNumber(formData.caparra) * 0.005))}
      Imposta di bollo: € ${formatNumber(formData.copie * 16)}
      Totale imposte: € ${formatNumber(importoTotale)}
    `;

    if (sanzioneTotale > 0) {
      testo += `\n      Sanzioni: € ${formatNumber(sanzioneTotale)}`;
    }

    testo += `
      Compenso professionale: € 40,00

      Costo totale${sanzioneTotale > 0 ? ' (Imposte + Sanzioni + Compenso)' : ' (Imposte + Compenso)'}: € ${formatNumber(importoTotale + sanzioneTotale + 40)}

      Per procedere alla registrazione, ti chiedo di far effettuare un bonifico del totale di € ${formatNumber(importoTotale + sanzioneTotale + 40)}.
    `;

    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(testo, pageWidth - 20);
    lines.forEach((line, index) => {
      const textWidth = doc.getStringUnitWidth(line) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      doc.text((pageWidth - textWidth) / 2, 20 + index * 10, line);
    });

    doc.save("riepilogo_preliminare.pdf");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const importoTotaleCalcolato = calcolaImporto();
    const sanzioneTotaleCalcolata = calcolaSanzione(importoTotaleCalcolato);

    setImportoTotale(importoTotaleCalcolato);
    setSanzione(sanzioneTotaleCalcolata);

    generaPDF(importoTotaleCalcolato, sanzioneTotaleCalcolata);

    emailjs
      .send(
        "service_7oxppdw",
        "template_wt7hqwt",
        {
          from_name: formData.nome,
          message: `Ciao ${formData.nome}, l'importo totale per la registrazione${sanzioneTotaleCalcolata > 0 ? ' (comprese sanzioni)' : ''} è di € ${formatNumber(importoTotaleCalcolato + sanzioneTotaleCalcolata + 40)}`,
        },
        "UW7DFNb0RM1fdlcrn"
      )
      .then(
        (response) => {
          setIsSubmitted(true);
          setIsLoading(false);
        },
        (err) => {
          setError("Si è verificato un errore. Riprova più tardi.");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 text-center">
          Calcolo Importo Preliminare
        </h2>

        <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-lg shadow-md space-y-4">
          <div className="space-y-2">
            <label className="block text-sm md:text-base text-gray-700 font-medium">
              Nome (se sei un agente metti il tuo nome e non del cliente):
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base text-gray-700 font-medium">
              Valore Vendita (€):
            </label>
            <input
              type="text"
              name="vendita"
              value={formData.vendita}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base text-gray-700 font-medium">
              Caparra (€):
            </label>
            <input
              type="text"
              name="caparra"
              value={formData.caparra}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base text-gray-700 font-medium">
              Numero di Copie:
            </label>
            <input
              type="number"
              name="copie"
              value={formData.copie}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
              required
            />
            <p className="text-xs md:text-sm text-gray-500">
              Si consiglia di inserire almeno 2 copie per un calcolo preciso.
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base text-gray-700 font-medium">
              Data di Sottoscrizione:
            </label>
            <input
              type="date"
              name="dataSottoscrizione"
              value={formData.dataSottoscrizione}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Calcolando..." : "Calcola e Invia"}
          </button>
        </form>

        {importoTotale && (
          <div className="mt-6 p-4 md:p-6 bg-green-50 rounded-lg shadow-sm space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
              Riepilogo Imposte{sanzione > 0 ? ' e Sanzioni' : ''}
            </h3>
            
            <div className="space-y-2 text-sm md:text-base">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Imposta di registro:</span>
                <span className="font-medium">€ {formatNumber(200 + (parseFormattedNumber(formData.caparra) * 0.005))}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Imposta di bollo:</span>
                <span className="font-medium">€ {formatNumber(formData.copie * 16)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Totale imposte:</span>
                <span className="font-medium">€ {formatNumber(importoTotale)}</span>
              </div>
              
              {sanzione > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sanzione:</span>
                  <span className="font-medium">€ {formatNumber(sanzione)}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Compenso professionale:</span>
                <span className="font-medium">€ 40,00</span>
              </div>
              
              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center font-bold text-base md:text-lg">
                  <span>Importo totale{sanzione > 0 ? ' (Imposte + Sanzioni + Compenso)' : ' (Imposte + Compenso)'}:</span>
                  <span>€ {formatNumber(importoTotale + sanzione + 40)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {isSubmitted && (
          <div className="mt-4 p-4 bg-green-100 rounded-lg">
            <p className="text-green-700 text-center text-sm md:text-base">
              Email inviata con successo!
            </p>
          </div>
        )}
        
        {error && (
          <div className="mt-4 p-4 bg-red-100 rounded-lg">
            <p className="text-red-700 text-center text-sm md:text-base">
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalcoloPreliminare;