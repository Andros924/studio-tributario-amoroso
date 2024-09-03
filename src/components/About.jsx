import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Chi Siamo</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Studio Tributario Amoroso è un team di esperti fiscali dedicati a fornire soluzioni su misura per le tue esigenze finanziarie. Con anni di esperienza nel settore, offriamo servizi di consulenza di alto livello per aziende e privati.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            La nostra missione è semplificare la complessità fiscale, garantendo conformità e ottimizzazione finanziaria per i nostri clienti.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { icon: Users, title: "Team Esperto", description: "Professionisti qualificati al tuo servizio" },
                            { icon: Award, title: "Esperienza Comprovata", description: "Anni di successi nel settore tributario" },
                            { icon: TrendingUp, title: "Approccio Innovativo", description: "Soluzioni all'avanguardia per le tue finanze" },
                            { icon: Users, title: "Attenzione al Cliente", description: "Servizio personalizzato e dedicato" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;