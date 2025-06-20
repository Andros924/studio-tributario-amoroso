import sys
import json
import PyPDF2
import pandas as pd
import re
from datetime import datetime
import io

def extract_bank_data_from_pdf(pdf_content):
    """
    Estrae i dati bancari da un PDF di estratto conto
    """
    try:
        # Leggi il PDF
        pdf_reader = PyPDF2.PdfReader(io.BytesIO(pdf_content))
        
        extracted_data = []
        
        # Pattern regex per identificare le righe di operazioni bancarie
        # Questi pattern dovranno essere adattati in base al formato specifico della banca
        date_pattern = r'\d{2}/\d{2}/\d{4}'
        amount_pattern = r'[\d.,]+(?:\s*€)?'
        
        for page in pdf_reader.pages:
            text = page.extract_text()
            lines = text.split('\n')
            
            # Cerca l'inizio della tabella delle operazioni
            start_processing = False
            
            for line in lines:
                # Identifica l'inizio della sezione operazioni
                if any(keyword in line.lower() for keyword in ['data operazione', 'data valuta', 'descrizione']):
                    start_processing = True
                    continue
                
                if start_processing and line.strip():
                    # Cerca pattern di data all'inizio della riga
                    date_matches = re.findall(date_pattern, line)
                    
                    if len(date_matches) >= 2:  # Data operazione e data valuta
                        # Estrai i componenti della riga
                        parts = line.split()
                        
                        data_operazione = date_matches[0]
                        data_valuta = date_matches[1]
                        
                        # Trova gli importi (numeri con virgole/punti)
                        amounts = re.findall(r'[\d.,]+', line)
                        amounts = [float(amt.replace(',', '.')) for amt in amounts if '.' in amt or ',' in amt]
                        
                        # Estrai la descrizione (tutto tra le date e gli importi)
                        descrizione_start = line.find(data_valuta) + len(data_valuta)
                        descrizione_end = line.rfind(str(amounts[-1])) if amounts else len(line)
                        descrizione = line[descrizione_start:descrizione_end].strip()
                        
                        # Determina se è un accredito o addebito
                        # Logica semplificata: se c'è un segno meno o è nella colonna addebiti
                        accrediti = 0
                        addebiti = 0
                        
                        if amounts:
                            # Logica per determinare accrediti vs addebiti
                            # Questo dipende dal formato specifico della banca
                            if '-' in line or 'addebito' in line.lower():
                                addebiti = amounts[-1]
                            else:
                                accrediti = amounts[-1]
                        
                        extracted_data.append({
                            'dataOperazione': data_operazione,
                            'dataValuta': data_valuta,
                            'descrizione': descrizione,
                            'accrediti': accrediti,
                            'addebiti': addebiti
                        })
        
        return extracted_data
        
    except Exception as e:
        raise Exception(f"Errore nell'estrazione dei dati: {str(e)}")

def convert_to_excel(data, output_path):
    """
    Converte i dati estratti in un file Excel
    """
    try:
        df = pd.DataFrame(data)
        
        # Rinomina le colonne per l'Excel
        df.columns = ['Data Operazione', 'Data Valuta', 'Descrizione', 'Accrediti', 'Addebiti']
        
        # Converti le date in formato datetime
        df['Data Operazione'] = pd.to_datetime(df['Data Operazione'], format='%d/%m/%Y', errors='coerce')
        df['Data Valuta'] = pd.to_datetime(df['Data Valuta'], format='%d/%m/%Y', errors='coerce')
        
        # Ordina per data operazione
        df = df.sort_values('Data Operazione')
        
        # Salva in Excel
        with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
            df.to_excel(writer, sheet_name='Estratto Conto', index=False)
            
            # Formatta il foglio Excel
            worksheet = writer.sheets['Estratto Conto']
            
            # Imposta la larghezza delle colonne
            worksheet.column_dimensions['A'].width = 15  # Data Operazione
            worksheet.column_dimensions['B'].width = 15  # Data Valuta
            worksheet.column_dimensions['C'].width = 40  # Descrizione
            worksheet.column_dimensions['D'].width = 15  # Accrediti
            worksheet.column_dimensions['E'].width = 15  # Addebiti
            
            # Formatta le celle degli importi come valuta
            for row in range(2, len(df) + 2):
                worksheet[f'D{row}'].number_format = '€#,##0.00'
                worksheet[f'E{row}'].number_format = '€#,##0.00'
        
        return True
        
    except Exception as e:
        raise Exception(f"Errore nella conversione Excel: {str(e)}")

def main():
    """
    Funzione principale per l'elaborazione da linea di comando
    """
    if len(sys.argv) != 3:
        print("Uso: python pdf_processor.py <input_pdf> <output_excel>")
        sys.exit(1)
    
    input_pdf = sys.argv[1]
    output_excel = sys.argv[2]
    
    try:
        # Leggi il file PDF
        with open(input_pdf, 'rb') as file:
            pdf_content = file.read()
        
        # Estrai i dati
        data = extract_bank_data_from_pdf(pdf_content)
        
        if not data:
            print(json.dumps({"error": "Nessun dato trovato nel PDF"}))
            sys.exit(1)
        
        # Converti in Excel
        convert_to_excel(data, output_excel)
        
        # Restituisci il risultato
        result = {
            "success": True,
            "records_found": len(data),
            "output_file": output_excel,
            "preview": data[:5]  # Prime 5 righe per anteprima
        }
        
        print(json.dumps(result))
        
    except Exception as e:
        error_result = {
            "success": False,
            "error": str(e)
        }
        print(json.dumps(error_result))
        sys.exit(1)

if __name__ == "__main__":
    main()