import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 text-center bg-white">
            <h2 className="text-3xl font-bold mb-8 text-blue-700">Contatti</h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-4">
                Per qualsiasi informazione o per prenotare una consulenza, non esitate a contattarci.
            </p>
            <form className="max-w-xl mx-auto">
                <div className="mb-4">
                    <input type="text" placeholder="Nome" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <textarea placeholder="Messaggio" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
                </div>
                <button type="submit" className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800">
                    Invia
                </button>
            </form>
        </section>
    );
}

export default Contact;
