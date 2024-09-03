import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Studio Tributario Amoroso</h3>
                        <p className="mb-4">Soluzioni fiscali personalizzate per aziende e privati.</p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Servizi</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Consulenza Fiscale</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Pianificazione Tributaria</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Contabilità Aziendale</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Dichiarazioni dei Redditi</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contatti</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <a href="mailto:studiotrib.amoroso@gmail.com" className="hover:text-white transition-colors duration-300">studiotrib.amoroso@gmail.com</a>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <a href="tel:+393890536285" className="hover:text-white transition-colors duration-300">+39 389 053 32 85</a>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={16} className="mr-2" />
                                <span>Via Roma, 123, 00100 Roma</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Studio Tributario Amoroso. Tutti i diritti riservati.</p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Termini di Servizio</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;