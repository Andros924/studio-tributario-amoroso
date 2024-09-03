import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
            <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto per Ottimizzare la Tua Situazione Fiscale?</h2>
                <p className="text-xl mb-8">Scopri come possiamo aiutarti a massimizzare i tuoi risparmi e semplificare la tua gestione fiscale. La prima consulenza è gratuita!</p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                    <a href="tel:+390123456789" className="flex items-center bg-white text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105">
                        <Phone size={20} className="mr-2" />
                        Chiama Ora
                    </a>
                    <a href="#contact" className="flex items-center bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                        <Mail size={20} className="mr-2" />
                        Invia un Messaggio
                    </a>
                </div>
                <p className="text-sm mb-4">Risponderemo entro 24 ore lavorative</p>
                <div className="flex justify-center items-center space-x-4 text-sm">
                    <span className="flex items-center">
                        <ArrowRight size={16} className="mr-1" />
                        Consulenza Personalizzata
                    </span>
                    <span className="flex items-center">
                        <ArrowRight size={16} className="mr-1" />
                        Esperti Qualificati
                    </span>
                    <span className="flex items-center">
                        <ArrowRight size={16} className="mr-1" />
                        Soluzioni Su Misura
                    </span>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;