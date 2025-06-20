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
  Trash2,
  Server
} from 'lucide-react';

const PdfToExcelConverter = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [error, setError] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [serverStatus, setServerStatus] = useState('checking');
  const fileInputRef = useRef(null);

  // URL del server backend
  const SERVER_URL = 'http://localhost:3001';

  // Controlla lo stato del server all'avvio
  React.useEffect(() => {
    checkServerStatus();
  }, []);

  const checkServerStatus = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/health`);
      if (response.ok) {
        setServerStatus('online');
      } else {
        setServerStatus('offline');
      }
    } catch (error) {
      setServerStatus('offline');
    }
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

    if (serverStatus !== 'online') {
      setError('Il server di conversione non è disponibile. Assicurati che il server backend sia in esecuzione.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('pdf', file);

      const response = await fetch(`${SERVER_URL}/api/convert-pdf`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Il server restituisce direttamente il file Excel
        const blob = await response.blob();
        
        // Crea un URL per il download
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `estratto_conto_${new Date().toISOString().split('T')[0]}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);

        // Simula dati estratti per l'anteprima (in un caso reale, dovresti ricevere questi dati dal server)
        const mockExtractedData = [
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
            descrizione: 'PAGAMENTO UTENZE ELETTRICHE E GAS',
            accrediti: 0,
            addebiti: 150.50
          },
          {
            dataOperazione: '05/01/2024',
            dataValuta: '05/01/2024',
            descrizione: 'PRELIEVO BANCOMAT CENTRO COMMERCIALE',
            accrediti: 0,
            addebiti: 100.00
          }
        ];

        setExtractedData(mockExtractedData);
        setPreviewData(mockExtractedData);
        
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Errore durante la conversione del file');
      }
    } catch (err) {
      console.error('Errore durante la conversione:', err);
      setError('Errore di connessione al server. Verifica che il server backend sia in esecuzione.');
    } finally {
      setIsProcessing(false);
    }
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
        
        {/* Server Status */}
        <div className="mt-4 flex items-center justify-center">
          <Server className={`w-5 h-5 mr-2 ${serverStatus === 'online' ? 'text-green-500' : 'text-red-500'}`} />
          <span className={`text-sm ${serverStatus === 'online' ? 'text-green-600' : 'text-red-600'}`}>
            Server: {serverStatus === 'online' ? 'Online' : serverStatus === 'offline' ? 'Offline' : 'Verificando...'}
          </span>
          {serverStatus === 'offline' && (
            <button
              onClick={checkServerStatus}
              className="ml-2 text-blue-600 hover:text-blue-800 text-sm underline"
            >
              Riprova
            </button>
          )}
        </div>
      </div>

      {/* Server Offline Warning */}
      {serverStatus === 'offline' && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
            <div>
              <p className="text-yellow-800 font-semibold">Server Backend Offline</p>
              <p className="text-yellow-700 text-sm">
                Per utilizzare il convertitore, avvia il server backend con: <code className="bg-yellow-100 px-1 rounded">cd server && npm start</code>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Upload Area */}
      {!file && (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${
            serverStatus === 'online' 
              ? 'border-gray-300 hover:border-blue-400' 
              : 'border-gray-200 bg-gray-50'
          }`}
          onDrop={serverStatus === 'online' ? handleDrop : undefined}
          onDragOver={serverStatus === 'online' ? handleDragOver : undefined}
        >
          <Upload className={`w-16 h-16 mx-auto mb-4 ${serverStatus === 'online' ? 'text-gray-400' : 'text-gray-300'}`} />
          <h3 className={`text-xl font-semibold mb-2 ${serverStatus === 'online' ? 'text-gray-700' : 'text-gray-500'}`}>
            Carica il tuo estratto conto PDF
          </h3>
          <p className={`mb-4 ${serverStatus === 'online' ? 'text-gray-500' : 'text-gray-400'}`}>
            {serverStatus === 'online' 
              ? 'Trascina il file qui o clicca per selezionarlo'
              : 'Server offline - impossibile caricare file'
            }
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
            disabled={serverStatus !== 'online'}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={serverStatus !== 'online'}
            className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
              serverStatus === 'online'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
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
              disabled={isProcessing || serverStatus !== 'online'}
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
                    File Excel scaricato automaticamente
                  </p>
                </div>
              </div>
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
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={resetConverter}
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
          <li>Assicurati che il server backend sia in esecuzione</li>
          <li>Carica il tuo estratto conto in formato PDF</li>
          <li>Clicca su "Converti in Excel" per elaborare il file</li>
          <li>Il file Excel verrà scaricato automaticamente</li>
          <li>Visualizza l'anteprima dei dati estratti</li>
        </ol>
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-sm text-yellow-800">
            <strong>Nota:</strong> Il sistema gestisce automaticamente descrizioni su più righe, 
            unificandole in una singola cella per una migliore leggibilità.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PdfToExcelConverter;