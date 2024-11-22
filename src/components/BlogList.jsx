import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { articoliEvidenza } from "./Data";

const BlogList = () => {
  return (
    <div className="container mx-auto py-10">
      <Helmet>
        <title>Articoli Fiscali | Consigli e Guide Fiscali</title>
        <meta
          name="description"
          content="Scopri i nostri articoli fiscali per approfondimenti, consigli e guide su tasse, contabilità e gestione finanziaria."
        />
        <meta
          name="keywords"
          content="articoli fiscali, guide fiscali, tasse, contabilità, gestione finanziaria"
        />
        <meta name="author" content="Alessandro Amoroso" />
        <link rel="canonical" href="https://studiofiscaleamoroso.com/blog" />
      </Helmet>

      <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">
        Articoli Fiscali
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articoliEvidenza.length > 0 ? (
          articoliEvidenza.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
              {post.immagine && (
                <div className="w-full h-48">
                  <img
                    src={post.immagine}
                    alt={post.titolo}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              )}
              <h2 className="text-2xl font-semibold text-blue-900 mt-4 mb-4">
                {post.titolo}
              </h2>
              <p className="text-gray-700 mb-4">
                {post.excerpt.length > 100
                  ? `${post.excerpt.substring(0, 100)}...`
                  : post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-500 hover:text-blue-700 font-semibold hover:underline"
              >
                Leggi di più
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Nessun articolo disponibile.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
