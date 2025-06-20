import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Download, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Loader2,
  X,
  FileSpreadsheet,
  Eye,
  Trash2
} from 'lucide-react';
import * as XLSX from 'xlsx';

const PdfToExcelConverter = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [error, setError] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const fileInputRef = useRef(null);

  // Funzione per simulare l'estrazione dei dati dal PDF
  const extractDataFromPdf = async (pdfFile) => {
    // Simulazione dell'estrazione dati - in un ambiente reale useresti pdf-parse o simili
    return new Promise((resolve) => {
      setTimeout(() => {
        // Dati di esempio estratti dal PDF
        const mockData = [
          {
            dataOperazione: '01/01/2024',
            dataValuta: '01/01/2024',
            descrizione: 'BONIFICO STIPENDIO GENNAIO',
            accrediti: 2500.00,
            addebiti: 0
          },
          {
            dataOperazione: '02/01/2024',
            dataValuta: '02/01/2024',
            descrizione: 'PAGAMENTO UTENZE',
            accrediti: 0,
            addebiti: 150.50
          },
          {
            dataOperazione: '05/01/2024',
            dataValuta: '05/01/2024',
            descrizione: 'PRELIEVO BANCOMAT',
            accrediti: 0,
            addebiti: 100.00
          },
          {
            dataOperazione: '10/01/2024',
            dataValuta: '10/01/2024',
            descrizione: 'BONIFICO RICEVUTO',
            accrediti: 500.00,
            addebiti: 0
          },
          {
            dataOperazione: '15/01/2024',
            dataValuta: '15/01/2024',
            descrizione: 'COMMISSIONI BANCARIE',
            accrediti: 0,
            addebiti: 5.00
          }
        ];
        resolve(mockData);
      }, 2000);
    });
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError(null);
      setExtractedData(null);
      setPreviewData(null);
    } else {
      setError('Per favore seleziona un file PDF valido');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      setError(null);
      setExtractedData(null);
      setPreviewData(null);
    } else {
      setError('Per favore trascina un file PDF valido');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const processFile = async () => {
    if (!file) return;

    setIsProcessing(true);
    setError(null);

    try {
      // In un ambiente reale, qui invieresti il file a un server Python
      // Per ora simuliamo l'estrazione
      const data = await extractDataFromPdf(file);
      setExtractedData(data);
      setPreviewData(data.slice(0, 5)); // Mostra solo le prime 5 righe per l'anteprima
    } catch (err) {
      setError('Errore durante l\'elaborazione del file: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadExcel = () => {
    if (!extractedData) return;

    // Crea un nuovo workbook
    const wb = XLSX.utils.book_new();
    
    // Converte i dati in formato worksheet
    const ws = XLSX.utils.json_to_sheet(extractedData.map(row => ({
      'Data Operazione': row.dataOperazione,
      'Data Valuta': row.dataValuta,
      'Descrizione': row.descrizione,
      'Accrediti': row.accrediti || '',
      'Addebiti': row.addebiti || ''
    })));

    // Aggiunge il worksheet al workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Estratto Conto');

    // Genera il file Excel e lo scarica
    const fileName = `estratto_conto_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };

  const resetConverter = () => {
    setFile(null);
    setExtractedData(null);
    setPreviewData(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatCurrency = (amount) => {
    if (!amount || amount === 0) return '';
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <FileSpreadsheet className="w-12 h-12 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">
            Convertitore PDF a Excel
          </h1>
        </div>
        <p className="text-gray-600 text-lg">
          Converti i tuoi estratti conto PDF in formato Excel per una gestione più semplice
        </p>
      </div>

      {/* Upload Area */}
      {!file && (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors duration-200"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Carica il tuo estratto conto PDF
          </h3>
          <p className="text-gray-500 mb-4">
            Trascina il file qui o clicca per selezionarlo
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Seleziona File PDF
          </button>
          <p className="text-sm text-gray-400 mt-2">
            Formati supportati: PDF (max 10MB)
          </p>
        </div>
      )}

      {/* File Selected */}
      {file && !extractedData && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">{file.name}</h3>
                <p className="text-sm text-gray-600">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              onClick={resetConverter}
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={processFile}
              disabled={isProcessing}
              className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Elaborazione...
                </>
              ) : (
                <>
                  <FileSpreadsheet className="w-5 h-5 mr-2" />
                  Converti in Excel
                </>
              )}
            </button>
            
            <button
              onClick={resetConverter}
              className="flex items-center bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              <Trash2 className="w-5 h-5 mr-2" />
              Rimuovi File
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Success and Preview */}
      {extractedData && (
        <div className="space-y-6">
          {/* Success Message */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <p className="text-green-700 font-semibold">
                    Conversione completata con successo!
                  </p>
                  <p className="text-green-600 text-sm">
                    Trovate {extractedData.length} operazioni
                  </p>
                </div>
              </div>
              <button
                onClick={downloadExcel}
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Scarica Excel
              </button>
            </div>
          </div>

          {/* Data Preview */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-gray-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">
                Anteprima Dati Estratti
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                      Data Operazione
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                      Data Valuta
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                      Descrizione
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-right font-semibold">
                      Accrediti
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-right font-semibold">
                      Addebiti
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {previewData?.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        {row.dataOperazione}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.dataValuta}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.descrizione}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-right text-green-600 font-medium">
                        {formatCurrency(row.accrediti)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-right text-red-600 font-medium">
                        {formatCurrency(row.addebiti)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {extractedData.length > 5 && (
              <p className="text-sm text-gray-600 mt-3 text-center">
                Mostrate le prime 5 operazioni di {extractedData.length} totali.
                Scarica il file Excel per vedere tutti i dati.
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={downloadExcel}
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Scarica File Excel
            </button>
            
            <button
              onClick={resetConverter}
              className="flex items-center bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              <Upload className="w-5 h-5 mr-2" />
              Converti Altro File
            </button>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          Come utilizzare il convertitore:
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-blue-700">
          <li>Carica il tuo estratto conto in formato PDF</li>
          <li>Clicca su "Converti in Excel" per elaborare il file</li>
          <li>Visualizza l'anteprima dei dati estratti</li>
          <li>Scarica il file Excel con tutti i dati organizzati</li>
        </ol>
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-sm text-yellow-800">
            <strong>Nota:</strong> Attualmente il servizio utilizza dati di esempio. 
            Per l'implementazione completa con Python, contattaci per integrare 
            il servizio di estrazione dati reale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PdfToExcelConverter;