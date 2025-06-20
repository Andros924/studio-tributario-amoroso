const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configurazione multer per upload file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `pdf-${uniqueSuffix}.pdf`);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Solo file PDF sono accettati'), false);
    }
  }
});

// Crea directory per output se non esiste
const outputDir = 'outputs';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Endpoint per convertire PDF a Excel
app.post('/api/convert-pdf', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ 
      success: false, 
      error: 'Nessun file PDF caricato' 
    });
  }

  const inputPath = req.file.path;
  const outputFilename = `estratto-${Date.now()}.xlsx`;
  const outputPath = path.join(outputDir, outputFilename);

  console.log(`Elaborazione file: ${inputPath}`);

  // Esegui lo script Python
  const pythonProcess = spawn('python', [
    path.join(__dirname, '..', 'python', 'pdf_processor.py'),
    inputPath,
    outputPath
  ]);

  let outputData = '';
  let errorData = '';

  pythonProcess.stdout.on('data', (data) => {
    outputData += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    errorData += data.toString();
    console.error('Python stderr:', data.toString());
  });

  pythonProcess.on('close', (code) => {
    // Rimuovi il file PDF temporaneo
    fs.unlink(inputPath, (err) => {
      if (err) console.error('Errore rimozione file temporaneo:', err);
    });

    if (code !== 0) {
      console.error('Python process failed with code:', code);
      console.error('Error output:', errorData);
      return res.status(500).json({
        success: false,
        error: 'Errore durante l\'elaborazione del PDF'
      });
    }

    try {
      const result = JSON.parse(outputData);
      
      if (result.success) {
        // Invia il file Excel come download
        res.download(outputPath, outputFilename, (err) => {
          if (err) {
            console.error('Errore download:', err);
            res.status(500).json({
              success: false,
              error: 'Errore durante il download del file'
            });
          }
          
          // Rimuovi il file Excel dopo il download
          setTimeout(() => {
            fs.unlink(outputPath, (unlinkErr) => {
              if (unlinkErr) console.error('Errore rimozione file Excel:', unlinkErr);
            });
          }, 5000);
        });
      } else {
        res.status(400).json(result);
      }
    } catch (parseError) {
      console.error('Errore parsing output Python:', parseError);
      res.status(500).json({
        success: false,
        error: 'Errore nell\'elaborazione della risposta'
      });
    }
  });

  // Timeout per evitare processi bloccati
  setTimeout(() => {
    pythonProcess.kill();
    res.status(408).json({
      success: false,
      error: 'Timeout durante l\'elaborazione del file'
    });
  }, 60000); // 60 secondi timeout
});

// Endpoint per testare l'API
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server PDF converter attivo',
    timestamp: new Date().toISOString()
  });
});

// Gestione errori multer
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        error: 'File troppo grande. Dimensione massima: 10MB'
      });
    }
  }
  
  res.status(500).json({
    success: false,
    error: error.message || 'Errore interno del server'
  });
});

app.listen(PORT, () => {
  console.log(`Server PDF converter in ascolto sulla porta ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;