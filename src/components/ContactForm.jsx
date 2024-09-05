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
      <h1 className="text-4xl font-bold text-darkred mb-6 text-center">Contattaci</h1>

      {submitted ? (
        <p className="text-center text-lightred font-semibold">
          Grazie per averci contattato! Ti risponderemo al più presto.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightred"
              placeholder="Il tuo nome"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightred"
              placeholder="La tua email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Messaggio</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightred"
              placeholder="Il tuo messaggio"
              rows="5"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-darkred text-white font-semibold px-6 py-2 rounded-lg hover:bg-lightred focus:outline-none focus:ring-2 focus:ring-lightred"
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
