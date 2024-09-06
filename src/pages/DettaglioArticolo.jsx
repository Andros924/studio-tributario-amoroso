import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CalendarIcon, UserIcon, ClockIcon } from 'lucide-react';

const DettaglioArticolo = () => {
  const { id } = useParams();
  const [articolo, setArticolo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticolo = async () => {
      try {
        // Simula una chiamata API per recuperare i dettagli dell'articolo
        // In un'applicazione reale, sostituisci questo con una vera chiamata API
        const response = await fetch(`/api/articoli/${id}`);
        if (!response.ok) {
          throw new Error('Articolo non trovato');
        }
        const data = await response.json();
        setArticolo(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticolo();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Caricamento in corso...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  if (!articolo) {
    return <div className="text-center py-10">Articolo non trovato.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          {articolo.immagine && (
            <img 
              src={articolo.immagine} 
              alt={articolo.titolo} 
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-darkred mb-4">{articolo.titolo}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <CalendarIcon className="w-5 h-5 mr-2" />
              <span className="mr-4">{new Date(articolo.data).toLocaleDateString()}</span>
              <UserIcon className="w-5 h-5 mr-2" />
              <span className="mr-4">{articolo.autore}</span>
              <ClockIcon className="w-5 h-5 mr-2" />
              <span>{articolo.tempoLettura} min lettura</span>
            </div>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: articolo.contenuto }}
            />
          </div>
        </article>

        {/* Sezione tag */}
        {articolo.tags && articolo.tags.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-darkred mb-4">Tag</h2>
            <div className="flex flex-wrap gap-2">
              {articolo.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-lightred text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Sezione articoli correlati */}
        {/* Qui puoi aggiungere una sezione per gli articoli correlati se necessario */}
      </div>
    </div>
  );
};

export default DettaglioArticolo;