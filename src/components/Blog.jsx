import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogPost = ({ title, excerpt, date, author, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 mb-4">{excerpt}</p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">{date}</span>
                <User size={16} className="mr-2" />
                <span>{author}</span>
            </div>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                Leggi di più <ArrowRight size={16} className="ml-2" />
            </a>
        </div>
    </div>
);

const Blog = () => {
    const blogPosts = [
        {
            title: "Novità fiscali 2024: cosa cambia per le imprese",
            excerpt: "Un'analisi dettagliata delle principali modifiche fiscali che impatteranno le aziende nel nuovo anno.",
            date: "15 Gen 2024",
            author: "Dott. Mario Rossi",
            imageUrl: "/api/placeholder/800/600"
        },
        {
            title: "Guida alla dichiarazione dei redditi per liberi professionisti",
            excerpt: "Consigli pratici e punti chiave da non trascurare nella compilazione del modello per i lavoratori autonomi.",
            date: "28 Feb 2024",
            author: "Dott.ssa Laura Bianchi",
            imageUrl: "/api/placeholder/800/600"
        },
        {
            title: "Incentivi fiscali per l'innovazione: opportunità da cogliere",
            excerpt: "Panoramica sulle agevolazioni disponibili per le imprese che investono in ricerca e sviluppo.",
            date: "10 Mar 2024",
            author: "Dott. Giovanni Verdi",
            imageUrl: "/api/placeholder/800/600"
        }
    ];

    return (
        <section id="blog" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Il Nostro Blog</h2>
                <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Rimanete aggiornati con le ultime novità e consigli fiscali. Scoprite articoli utili e informazioni per gestire al meglio le vostre finanze.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogPost key={index} {...post} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        Vedi tutti gli articoli
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Blog;