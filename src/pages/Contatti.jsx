import React, { useState } from "react";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import emailjs from "emailjs-com"; // Importa EmailJS

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Indicatore di invio
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Avvia il caricamento

    emailjs
      .send(
        "service_7oxppdw", // Service ID
        "template_wt7hqwt", // Template ID
        {
          from_name: formData.nome, // Nome di chi invia il messaggio
          from_email: formData.email, // Email di chi invia il messaggio
          message: formData.messaggio, // Messaggio inviato
        },
        "UW7DFNb0RM1fdlcrn" // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
          setIsLoading(false); // Ferma il caricamento
          setFormData({ nome: "", email: "", messaggio: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Si è verificato un errore. Riprova più tardi.");
          setIsLoading(false); // Ferma il caricamento in caso di errore
        }
      );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-700 mb-12">
          Contattaci
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form di contatto */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Inviaci un messaggio
            </h2>

            {/* Notifica di successo */}
            {isSubmitted && (
              <p className="text-green-500 mb-4">
                Messaggio inviato con successo!
              </p>
            )}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="nome"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="messaggio"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading} // Disabilita il pulsante durante l'invio
                className={`w-full bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Invio in corso..." : "Invia Messaggio"}
              </button>
            </form>
          </div>

          {/* Informazioni di contatto */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              I nostri contatti
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Via Villa Rosato 28
                  <br />
                  90146 Palermo
                </p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-6 h-6 text-gray-400 mr-3" />
                <p className="text-gray-700">+39 3890536285</p>
              </div>
              <div className="flex items-center">
                <MailIcon className="w-6 h-6 text-gray-400 mr-3" />
                <p className="text-gray-700">studiotrib.amoroso@gmail.com</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Orari di apertura
              </h3>
              <ul className="text-gray-700">
                <li>Lunedì: 9:00 - 18:00</li>
                <li>Martedì: 9:00 - 18:00</li>
                <li>Mercoledì: 9:00 - 18:00</li>
                <li>Giovedì: 9:00 - 18:00</li>
                <li>Venerdì: 9:00 - 18:00</li>
                <li>Sabato: Chiuso</li>
                <li>Domenica: Chiuso</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
