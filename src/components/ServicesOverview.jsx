import React from 'react';

const ServicesOverview = () => {
    return (
        <section id="services" className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">I Nostri Servizi</h2>
            <ul className="list-none space-y-4">
                <li className="text-lg">Consulenza Fiscale</li>
                <li className="text-lg">Pianificazione Fiscale</li>
                <li className="text-lg">Dichiarazioni dei Redditi</li>
                <li className="text-lg">Contenzioso Tributario</li>
                <li className="text-lg">Altri Servizi</li>
            </ul>
        </section>
    );
}

export default ServicesOverview;
