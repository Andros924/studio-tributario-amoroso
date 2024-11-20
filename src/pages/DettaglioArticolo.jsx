import React from "react";
import { useParams } from "react-router-dom";
import { CalendarIcon, UserIcon, ClockIcon } from "lucide-react";
import { articoliEvidenza } from "../components/Data";
import { Helmet } from "react-helmet";

const DettaglioArticolo = () => {
  const { slug } = useParams();
  const articolo = articoliEvidenza.find((article) => article.slug === slug);

  if (!articolo) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold text-gray-700">
          Articolo non trovato.
        </h1>
        <p className="text-gray-500">
          L'articolo richiesto non esiste o è stato rimosso.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* Metadata SEO */}
      <Helmet>
        <title>{articolo.titolo} | Blog</title>
        <meta name="description" content={articolo.excerpt} />

        {/* Open Graph tags */}
        <meta property="og:title" content={articolo.titolo} />
        <meta property="og:description" content={articolo.excerpt} />
        <meta property="og:image" content={articolo.immagine} />
        <meta
          property="og:url"
          content={`https://studiofiscaleamoroso.com/blog/${articolo.slug}`}
        />
        <meta property="og:type" content="article" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articolo.titolo} />
        <meta name="twitter:description" content={articolo.excerpt} />
        <meta name="twitter:image" content={articolo.immagine} />
        <meta
          name="twitter:url"
          content={`https://studiofiscaleamoroso.com/blog/${articolo.slug}`}
        />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Immagine Articolo */}
        {articolo.immagine && (
          <div className="w-full">
            <img
              src={articolo.immagine}
              alt={`Immagine di copertina per ${articolo.titolo}`}
              className="w-full h-auto mx-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Contenuto Articolo */}
        <article className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              {articolo.titolo}
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <CalendarIcon className="w-5 h-5 mr-2" />
              <span className="mr-4">{articolo.data}</span>
              <UserIcon className="w-5 h-5 mr-2" />
              <span className="mr-4">{articolo.autore}</span>
              <ClockIcon className="w-5 h-5 mr-2" />
              <span>{articolo.tempoLettura} min lettura</span>
            </div>
            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: articolo.contenuto }}
            />
          </div>
        </article>

        {/* Tag Articolo */}
        {articolo.tags && articolo.tags.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Tag</h2>
            <div className="flex flex-wrap gap-2">
              {articolo.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-sm"
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
