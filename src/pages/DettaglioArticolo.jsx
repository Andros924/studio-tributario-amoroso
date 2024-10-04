import React from 'react';
import { useParams } from 'react-router-dom';
import { CalendarIcon, UserIcon, ClockIcon } from 'lucide-react';
import { articoliEvidenza } from '../components/Data';

const DettaglioArticolo = () => {
  const { id } = useParams();
  const articolo = articoliEvidenza.find(article => article.id === parseInt(id));

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
            <h1 className="text-4xl font-bold text-blue-900 mb-4">{articolo.titolo}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <CalendarIcon className="w-5 h-5 mr-2" />
              <span className="mr-4">{articolo.data}</span>
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

        {articolo.tags && articolo.tags.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Tag</h2>
            <div className="flex flex-wrap gap-2">
              {articolo.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"  
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DettaglioArticolo;