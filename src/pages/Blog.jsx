import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlogList from "../components/BlogList";
import BlogPost from "../components/BlogPost";

const Blog = () => {
  const location = useLocation();

  // Determina il titolo della pagina in base al percorso
  const pageTitle =
    location.pathname === "/blog" ? "Il Nostro Blog Fiscale" : "Articolo del Blog";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* SEO Metadata */}
      <Helmet>
        <title>{pageTitle} | Studio Fiscale</title>
        <meta
          name="description"
          content={
            location.pathname === "/blog"
              ? "Scopri i nostri articoli fiscali per rimanere aggiornato sulle ultime novità e strategie fiscali."
              : "Leggi il nostro articolo fiscale per approfondire un argomento di interesse e ottenere informazioni utili."
          }
        />
        <meta
          name="keywords"
          content="blog fiscale, aggiornamenti fiscali, articoli fiscali, consulenza fiscale, novità fiscali"
        />
        <meta name="author" content="Studio Fiscale" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Contenuto del Blog */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Titolo del Blog */}
        {location.pathname === "/blog" && (
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
              Il Nostro Blog Fiscale
            </h1>
            <p className="text-center text-gray-600 mt-2">
              Articoli informativi e approfondimenti per migliorare la tua gestione fiscale.
            </p>
          </header>
        )}

        {/* Rotte per il Blog */}
        <Routes>
          {/* Lista di articoli */}
          <Route
            path="/"
            element={
              <section aria-labelledby="blog-list">
                <h2 id="blog-list" className="sr-only">
                  Elenco degli articoli del blog
                </h2>
                <BlogList />
              </section>
            }
          />

          {/* Singolo post del blog con lo slug */}
          <Route
            path="/:slug"
            element={
              <article aria-labelledby="blog-post" className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h2 id="blog-post" className="sr-only">
                  Contenuto dell'articolo
                </h2>
                <BlogPost />
              </article>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Blog;
