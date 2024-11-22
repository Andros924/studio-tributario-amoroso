import React, { useState } from "react";
import { Helmet } from "react-helmet";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setError(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Errore durante l'invio del messaggio");
        setError(true);
      }
    } catch (error) {
      console.error("Errore:", error);
      setError(true);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Contattaci | Supporto e Informazioni</title>
        <meta
          name="description"
          content="Hai domande o bisogno di supporto? Compila il modulo di contatto per inviarci un messaggio. Il nostro team è qui per aiutarti."
        />
        <meta
          name="keywords"
          content="contattaci, modulo di contatto, supporto clienti, assistenza"
        />
        <meta name="author" content="Your Company Name" />
        <link rel="canonical" href="https://www.yourwebsite.com/contattaci" />
      </Helmet>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-6 text-center">
        Contattaci
      </h1>

      {submitted ? (
        <p className="text-center text-green-600 font-semibold">
          Grazie per averci contattato! Ti risponderemo al più presto.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          {error && (
            <p className="text-center text-red-600 font-semibold">
              Si è verificato un errore durante l'invio. Riprova più tardi.
            </p>
          )}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Messaggio
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300"
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