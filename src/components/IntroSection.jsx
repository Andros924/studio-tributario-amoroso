import React from 'react';
import { TrendingUp, Shield, Users } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center p-4">
        <div className="bg-blue-100 p-3 rounded-full mb-4">
            <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
    </div>
);

const IntroSection = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                        Studio Tributario Amoroso
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8">
                        La Vostra Guida Esperta nel Mondo Fiscale
                    </p>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                        Offriamo consulenza fiscale professionale e personalizzata per aziende e privati. 
                        Con anni di esperienza e una profonda conoscenza del settore, siamo qui per 
                        semplificare la vostra gestione fiscale e massimizzare i vostri risparmi.
                    </p>
                    <a href="#contact" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out inline-block">
                        Richiedi una Consulenza Gratuita
                    </a>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureItem 
                        icon={TrendingUp}
                        title="Ottimizzazione Fiscale"
                        description="Strategie su misura per minimizzare il carico fiscale e massimizzare i risparmi per la vostra attività o situazione personale."
                    />
                    <FeatureItem 
                        icon={Shield}
                        title="Conformità Garantita"
                        description="Assicuriamo che tutte le vostre pratiche fiscali siano in piena conformità con le leggi e i regolamenti più recenti."
                    />
                    <FeatureItem 
                        icon={Users}
                        title="Supporto Personalizzato"
                        description="Un team di esperti dedicato a comprendere le vostre esigenze specifiche e a fornire soluzioni su misura."
                    />
                </div>
            </div>
        </section>
    );
}

export default IntroSection;