# PDF to Excel Converter - Backend Python

Questo modulo Python gestisce la conversione dei file PDF di estratti conto in formato Excel.

## Installazione

```bash
pip install -r requirements.txt
```

## Utilizzo

### Da linea di comando
```bash
python pdf_processor.py input.pdf output.xlsx
```

### Come modulo
```python
from pdf_processor import extract_bank_data_from_pdf, convert_to_excel

# Leggi il PDF
with open('estratto.pdf', 'rb') as file:
    pdf_content = file.read()

# Estrai i dati
data = extract_bank_data_from_pdf(pdf_content)

# Converti in Excel
convert_to_excel(data, 'output.xlsx')
```

## Integrazione con il Frontend

Per integrare questo servizio con il frontend React, puoi:

1. **Creare un'API Flask/FastAPI** che esponga l'endpoint per la conversione
2. **Usare un servizio serverless** come AWS Lambda o Vercel Functions
3. **Implementare un server Node.js** che chiami lo script Python

### Esempio di integrazione con Express.js

```javascript
const express = require('express');
const multer = require('multer');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/convert-pdf', upload.single('pdf'), (req, res) => {
  const inputPath = req.file.path;
  const outputPath = path.join('outputs', `${Date.now()}.xlsx`);
  
  const python = spawn('python', ['pdf_processor.py', inputPath, outputPath]);
  
  python.stdout.on('data', (data) => {
    const result = JSON.parse(data.toString());
    if (result.success) {
      res.download(outputPath);
    } else {
      res.status(500).json({ error: result.error });
    }
  });
});
```

## Personalizzazione

Il parser PDF può essere personalizzato per diversi formati di estratti conto modificando i pattern regex in `pdf_processor.py`:

- `date_pattern`: Pattern per riconoscere le date
- `amount_pattern`: Pattern per riconoscere gli importi
- Logica di identificazione delle colonne

## Note

- Il parser attuale è ottimizzato per formati standard italiani
- Potrebbe richiedere adattamenti per formati specifici di diverse banche
- Per migliorare l'accuratezza, considera l'uso di librerie OCR come Tesseract per PDF scansionati