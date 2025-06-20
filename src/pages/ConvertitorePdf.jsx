import React from "react";
import { Helmet } from "react-helmet";
import PdfToExcelConverter from "../components/PdfToExcelConverter";

const ConvertitorePdf = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <Helmet>
        <title>Convertitore PDF a Excel | Studio Tributario Alessandro Amoroso</title>
        <meta
          name="description"
          content="Converti i tuoi estratti conto PDF in formato Excel. Servizio gratuito per organizzare i dati bancari in modo semplice e veloce."
        />
        <meta
          name="keywords"
          content="convertitore PDF Excel, estratto conto, conversione dati bancari, organizzazione finanziaria"
        />
        <link
          rel="canonical"
          href="https://studiofiscaleamoroso.com/convertitore-pdf"
        />
      </Helmet>

      <div className="container mx-auto px-4">
        <PdfToExcelConverter />
      </div>
    </div>
  );
};

export default ConvertitorePdf;