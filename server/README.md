# Server Backend per Convertitore PDF a Excel

Questo server Node.js gestisce la conversione dei file PDF di estratti conto in formato Excel utilizzando Python.

## Installazione

1. Installa le dipendenze Node.js:
```bash
cd server
npm install
```

2. Installa le dipendenze Python:
```bash
cd ../python
pip install -r requirements.txt
```

## Avvio del Server

```bash
cd server
npm start
```

Il server sarà disponibile su `http://localhost:3001`

## Endpoint API

### POST /api/convert-pdf
Converte un file PDF in Excel.

**Parametri:**
- `pdf`: File PDF (multipart/form-data)

**Risposta:**
- Successo: Download diretto del file Excel
- Errore: JSON con messaggio di errore

### GET /api/health
Verifica lo stato del server.

**Risposta:**
```json
{
  "status": "OK",
  "message": "Server PDF converter attivo",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Caratteristiche

- **Upload sicuro**: Validazione tipo file e dimensione massima (10MB)
- **Elaborazione Python**: Utilizza script Python per estrazione dati
- **Gestione errori**: Timeout e cleanup automatico dei file temporanei
- **CORS abilitato**: Supporto per richieste cross-origin
- **Cleanup automatico**: Rimozione automatica dei file temporanei

## Struttura Directory

```
server/
├── app.js              # Server principale
├── package.json        # Dipendenze Node.js
├── uploads/           # Directory temporanea per upload (auto-creata)
├── outputs/           # Directory temporanea per output (auto-creata)
└── README.md          # Questa documentazione

../python/
├── pdf_processor.py   # Script Python per elaborazione
├── requirements.txt   # Dipendenze Python
└── README.md         # Documentazione Python
```

## Configurazione

Il server può essere configurato tramite variabili d'ambiente:

- `PORT`: Porta del server (default: 3001)

## Sviluppo

Per lo sviluppo con auto-reload:

```bash
npm run dev
```

## Sicurezza

- Validazione rigorosa dei file upload
- Timeout per prevenire processi bloccati
- Cleanup automatico dei file temporanei
- Limitazione dimensione file (10MB)

## Troubleshooting

### Server non si avvia
- Verifica che la porta 3001 sia libera
- Controlla che Python sia installato e accessibile

### Errori di conversione
- Verifica che le dipendenze Python siano installate
- Controlla i log del server per errori dettagliati
- Assicurati che il PDF sia un estratto conto valido

### File non trovati
- Verifica che le directory `uploads` e `outputs` esistano
- Controlla i permessi di scrittura nelle directory