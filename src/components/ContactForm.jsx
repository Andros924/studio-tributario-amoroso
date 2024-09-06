import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Funzione per aggiornare i campi del form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Simulazione invio dati
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simula una richiesta HTTP al backend
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        console.error('Errore durante l\'invio del messaggio');
      }
    } catch (error) {
      console.error('Errore:', error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">Contattaci</h1> {/* Titolo in bianco */}

      {submitted ? (
        <p className="text-center text-gray-200 font-semibold"> {/* Messaggio di successo in grigio chiaro */}
          Grazie per averci contattato! Ti risponderemo al più presto.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          {/* ... (campi del form invariati) */}

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" // Blu scuro con hover e focus
            >
              Invia Messaggio
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;