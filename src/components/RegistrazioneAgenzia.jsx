import React, { useState, useEffect } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  Calendar,
  Building,
  Users,
  FileCheck,
  Clock,
  ArrowRight,
  ArrowLeft,
  X
} from 'lucide-react';

const RegistrazioneAgenzia = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    tipoContratto: '',
    nomeAgenzia: '',
    emailAgenzia: '',
    telefono: '',
    cliente: {
      nome: '',
      cognome: '',
      codiceFiscale: '',
      email: '',
      telefono: ''
    },
    immobile: {
      indirizzo: '',
      comune: '',
      provincia: '',
      cap: '',
      categoria: '',
      rendita: ''
    },
    contratto: {
      dataInizio: '',
      dataFine: '',
      canone: '',
      periodicita: '',
      cedolareSecca: false
    },
    documenti: {
      contratto: null,
      documentoIdentita: null,
      codiceFiscale: null,
      visura: null,
      ape: null
    }
  });

  const [uploadProgress, setUploadProgress] = useState({});
  const [registrationStatus, setRegistrationStatus] = useState('pending'); // pending, processing, completed, error
  const [ricevute, setRicevute] = useState({
    registrazione: null,
    pagamento: null
  });

  const steps = [
    { id: 1, title: 'Dati Agenzia', icon: Building },
    { id: 2, title: 'Tipo Contratto', icon: FileText },
    { id: 3, title: 'Dati Cliente', icon: Users },
    { id: 4, title: 'Dati Immobile', icon: Building },
    { id: 5, title: 'Dettagli Contratto', icon: Calendar },
    { id: 6, title: 'Caricamento Documenti', icon: Upload },
    { id: 7, title: 'Revisione e Invio', icon: FileCheck },
    { id: 8, title: 'Stato Registrazione', icon: Clock }
  ];

  const tipiContratto = [
    { value: 'locazione', label: 'Contratto di Locazione' },
    { value: 'preliminare', label: 'Contratto Preliminare' },
    { value: 'comodato', label: 'Comodato d\'Uso Gratuito' }
  ];

  const handleInputChange = (section, field, value) => {
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleFileUpload = async (documentType, file) => {
    if (!file) return;

    setUploadProgress(prev => ({ ...prev, [documentType]: 0 }));

    // Simulazione upload a Google Drive
    const uploadSimulation = () => {
      return new Promise((resolve) => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setUploadProgress(prev => ({ ...prev, [documentType]: progress }));
          
          if (progress >= 100) {
            clearInterval(interval);
            resolve({
              id: `drive_${Date.now()}_${documentType}`,
              name: file.name,
              url: `https://drive.google.com/file/d/mock_${documentType}_id/view`
            });
          }
        }, 200);
      });
    };

    try {
      const uploadResult = await uploadSimulation();
      setFormData(prev => ({
        ...prev,
        documenti: {
          ...prev.documenti,
          [documentType]: uploadResult
        }
      }));
      
      setTimeout(() => {
        setUploadProgress(prev => ({ ...prev, [documentType]: undefined }));
      }, 1000);
    } catch (error) {
      console.error('Errore upload:', error);
      setUploadProgress(prev => ({ ...prev, [documentType]: undefined }));
    }
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.nomeAgenzia && formData.emailAgenzia && formData.telefono;
      case 2:
        return formData.tipoContratto;
      case 3:
        return formData.cliente.nome && formData.cliente.cognome && formData.cliente.codiceFiscale;
      case 4:
        return formData.immobile.indirizzo && formData.immobile.comune;
      case 5:
        return formData.contratto.dataInizio && (formData.tipoContratto === 'comodato' || formData.contratto.canone);
      case 6:
        return formData.documenti.contratto && formData.documenti.documentoIdentita;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitRegistration = async () => {
    setRegistrationStatus('processing');
    setCurrentStep(8);

    // Simulazione processo di registrazione
    setTimeout(() => {
      setRegistrationStatus('completed');
      setRicevute({
        registrazione: {
          numero: `REG${Date.now()}`,
          data: new Date().toLocaleDateString('it-IT'),
          url: 'https://drive.google.com/file/d/mock_ricevuta_registrazione/view'
        },
        pagamento: {
          numero: `PAG${Date.now()}`,
          importo: formData.tipoContratto === 'locazione' ? '200.00' : '168.00',
          data: new Date().toLocaleDateString('it-IT'),
          url: 'https://drive.google.com/file/d/mock_ricevuta_pagamento/view'
        }
      });
    }, 3000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Dati dell'Agenzia</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Agenzia *
                </label>
                <input
                  type="text"
                  value={formData.nomeAgenzia}
                  onChange={(e) => handleInputChange(null, 'nomeAgenzia', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nome dell'agenzia immobiliare"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Agenzia *
                </label>
                <input
                  type="email"
                  value={formData.emailAgenzia}
                  onChange={(e) => handleInputChange(null, 'emailAgenzia', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@agenzia.it"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefono *
                </label>
                <input
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => handleInputChange(null, 'telefono', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+39 123 456 7890"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tipo di Contratto</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tipiContratto.map((tipo) => (
                <div
                  key={tipo.value}
                  onClick={() => handleInputChange(null, 'tipoContratto', tipo.value)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.tipoContratto === tipo.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-medium text-gray-800">{tipo.label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Dati del Cliente</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  value={formData.cliente.nome}
                  onChange={(e) => handleInputChange('cliente', 'nome', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cognome *
                </label>
                <input
                  type="text"
                  value={formData.cliente.cognome}
                  onChange={(e) => handleInputChange('cliente', 'cognome', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Codice Fiscale *
                </label>
                <input
                  type="text"
                  value={formData.cliente.codiceFiscale}
                  onChange={(e) => handleInputChange('cliente', 'codiceFiscale', e.target.value.toUpperCase())}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength="16"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.cliente.email}
                  onChange={(e) => handleInputChange('cliente', 'email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Dati dell'Immobile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Indirizzo *
                </label>
                <input
                  type="text"
                  value={formData.immobile.indirizzo}
                  onChange={(e) => handleInputChange('immobile', 'indirizzo', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Via, numero civico"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comune *
                </label>
                <input
                  type="text"
                  value={formData.immobile.comune}
                  onChange={(e) => handleInputChange('immobile', 'comune', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Provincia
                </label>
                <input
                  type="text"
                  value={formData.immobile.provincia}
                  onChange={(e) => handleInputChange('immobile', 'provincia', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength="2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CAP
                </label>
                <input
                  type="text"
                  value={formData.immobile.cap}
                  onChange={(e) => handleInputChange('immobile', 'cap', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength="5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria Catastale
                </label>
                <input
                  type="text"
                  value={formData.immobile.categoria}
                  onChange={(e) => handleInputChange('immobile', 'categoria', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="es. A/2"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Dettagli del Contratto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data Inizio *
                </label>
                <input
                  type="date"
                  value={formData.contratto.dataInizio}
                  onChange={(e) => handleInputChange('contratto', 'dataInizio', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {formData.tipoContratto !== 'comodato' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data Fine
                    </label>
                    <input
                      type="date"
                      value={formData.contratto.dataFine}
                      onChange={(e) => handleInputChange('contratto', 'dataFine', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Canone {formData.tipoContratto === 'locazione' ? 'Mensile' : 'Totale'} *
                    </label>
                    <input
                      type="number"
                      value={formData.contratto.canone}
                      onChange={(e) => handleInputChange('contratto', 'canone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.00"
                      step="0.01"
                    />
                  </div>
                </>
              )}
              {formData.tipoContratto === 'locazione' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cedolare Secca
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.contratto.cedolareSecca}
                      onChange={(e) => handleInputChange('contratto', 'cedolareSecca', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">Applica regime cedolare secca</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Caricamento Documenti</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { key: 'contratto', label: 'Contratto *', required: true },
                { key: 'documentoIdentita', label: 'Documento Identità *', required: true },
                { key: 'codiceFiscale', label: 'Codice Fiscale', required: false },
                { key: 'visura', label: 'Visura Catastale', required: false },
                { key: 'ape', label: 'APE (se locazione)', required: false }
              ].map((doc) => (
                <div key={doc.key} className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <div className="text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <h4 className="font-medium text-gray-800 mb-2">{doc.label}</h4>
                    
                    {formData.documenti[doc.key] ? (
                      <div className="bg-green-50 p-3 rounded-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span className="text-sm text-green-700">
                              {formData.documenti[doc.key].name}
                            </span>
                          </div>
                          <button
                            onClick={() => handleInputChange('documenti', doc.key, null)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ) : uploadProgress[doc.key] !== undefined ? (
                      <div className="bg-blue-50 p-3 rounded-md">
                        <div className="flex items-center justify-center mb-2">
                          <Clock className="w-5 h-5 text-blue-500 mr-2" />
                          <span className="text-sm text-blue-700">Caricamento...</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress[doc.key]}%` }}
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <input
                          type="file"
                          id={`file-${doc.key}`}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload(doc.key, e.target.files[0])}
                        />
                        <label
                          htmlFor={`file-${doc.key}`}
                          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                          Seleziona File
                        </label>
                        <p className="text-xs text-gray-500 mt-2">
                          PDF, JPG, PNG (max 10MB)
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Revisione e Conferma</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dati Agenzia</h4>
                  <p className="text-sm text-gray-600">{formData.nomeAgenzia}</p>
                  <p className="text-sm text-gray-600">{formData.emailAgenzia}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Tipo Contratto</h4>
                  <p className="text-sm text-gray-600">
                    {tipiContratto.find(t => t.value === formData.tipoContratto)?.label}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cliente</h4>
                  <p className="text-sm text-gray-600">
                    {formData.cliente.nome} {formData.cliente.cognome}
                  </p>
                  <p className="text-sm text-gray-600">{formData.cliente.codiceFiscale}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Immobile</h4>
                  <p className="text-sm text-gray-600">{formData.immobile.indirizzo}</p>
                  <p className="text-sm text-gray-600">
                    {formData.immobile.comune} ({formData.immobile.provincia})
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">Documenti Caricati</h4>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(formData.documenti)
                    .filter(([key, value]) => value !== null)
                    .map(([key, value]) => (
                      <span key={key} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {value.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Importante</h4>
                  <p className="text-sm text-blue-700">
                    Verificare attentamente tutti i dati prima di procedere con la registrazione.
                    Una volta inviata, la pratica verrà elaborata dall'Agenzia delle Entrate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Stato della Registrazione</h3>
            
            {registrationStatus === 'processing' && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Registrazione in corso...
                </h4>
                <p className="text-gray-600">
                  Stiamo elaborando la tua richiesta presso l'Agenzia delle Entrate
                </p>
              </div>
            )}

            {registrationStatus === 'completed' && (
              <div className="space-y-6">
                <div className="text-center py-4">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-green-800 mb-2">
                    Registrazione Completata!
                  </h4>
                  <p className="text-gray-600">
                    La registrazione è stata effettuata con successo
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-medium text-gray-800">Ricevuta di Registrazione</h5>
                      <FileText className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Numero: {ricevute.registrazione?.numero}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Data: {ricevute.registrazione?.data}
                    </p>
                    <a
                      href={ricevute.registrazione?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Scarica Ricevuta
                    </a>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-medium text-gray-800">Ricevuta di Pagamento</h5>
                      <FileText className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Numero: {ricevute.pagamento?.numero}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Importo: €{ricevute.pagamento?.importo}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Data: {ricevute.pagamento?.data}
                    </p>
                    <a
                      href={ricevute.pagamento?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Scarica Ricevuta
                    </a>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">Prossimi Passi</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Le ricevute sono state salvate automaticamente su Google Drive</li>
                    <li>• Una copia è stata inviata all'email dell'agenzia</li>
                    <li>• Il cliente riceverà una notifica via email</li>
                    <li>• I documenti rimarranno disponibili per 5 anni</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Registrazione Agenzia delle Entrate
        </h1>
        <p className="text-gray-600">
          Sistema per la registrazione di contratti di locazione, preliminari e comodati d'uso
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isActive
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`text-xs text-center ${
                    isActive ? 'text-blue-600 font-medium' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6 min-h-[400px]">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      {currentStep < 8 && (
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-500 text-white hover:bg-gray-600'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Indietro
          </button>

          {currentStep === 7 ? (
            <button
              onClick={submitRegistration}
              className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Invia Registrazione
              <CheckCircle className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button
              onClick={nextStep}
              disabled={!validateStep(currentStep)}
              className={`flex items-center px-4 py-2 rounded-md ${
                validateStep(currentStep)
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Avanti
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      )}

      {currentStep === 8 && registrationStatus === 'completed' && (
        <div className="text-center">
          <button
            onClick={() => {
              setCurrentStep(1);
              setFormData({
                tipoContratto: '',
                nomeAgenzia: '',
                emailAgenzia: '',
                telefono: '',
                cliente: {
                  nome: '',
                  cognome: '',
                  codiceFiscale: '',
                  email: '',
                  telefono: ''
                },
                immobile: {
                  indirizzo: '',
                  comune: '',
                  provincia: '',
                  cap: '',
                  categoria: '',
                  rendita: ''
                },
                contratto: {
                  dataInizio: '',
                  dataFine: '',
                  canone: '',
                  periodicita: '',
                  cedolareSecca: false
                },
                documenti: {
                  contratto: null,
                  documentoIdentita: null,
                  codiceFiscale: null,
                  visura: null,
                  ape: null
                }
              });
              setRegistrationStatus('pending');
              setRicevute({ registrazione: null, pagamento: null });
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Nuova Registrazione
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrazioneAgenzia;