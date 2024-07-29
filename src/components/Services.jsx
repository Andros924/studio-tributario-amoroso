import React from 'react';

const Services = () => {
    return (
        <section id="services" className="py-20 text-center bg-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-blue-700">I Nostri Servizi</h2>
            <ul className="list-none space-y-4">
                <li className="text-lg text-gray-800">Consulenza Fiscale</li>
                <li className="text-lg text-gray-800">Pianificazione Fiscale</li>
                <li className="text-lg text-gray-800">Dichiarazioni dei Redditi</li>
                <li className="text-lg text-gray-800">Contenzioso Tributario</li>
                <li className="text-lg text-gray-800">Altri Servizi</li>
            </ul>
        </section>
    );
}

export default Services;
