import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlogList from "../components/BlogList";
import BlogPost from "../components/BlogPost";

const Blog = () => {
  const location = useLocation();

  // Determina il titolo della pagina in base al percorso
  const pageTitle =
    location.pathname === "/blog"
      ? "Blog Fiscale | Studio Tributario Alessandro Amoroso"
      : "Articolo del Blog | Studio Tributario Alessandro Amoroso";

  const pageDescription = 
    location.pathname === "/blog"
      ? "Scopri i nostri articoli fiscali per rimanere aggiornato sulle ultime novità e strategie fiscali. Guide pratiche, approfondimenti normativi e consigli degli esperti."
      : "Leggi il nostro articolo fiscale per approfondire argomenti di interesse e ottenere informazioni utili dalla nostra esperienza professionale.";

  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="blog fiscale, aggiornamenti fiscali, articoli fiscali, consulenza fiscale, novità fiscali, guide tributarie, Alessandro Amoroso"
        />
        <meta name="author" content="Alessandro Amoroso" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Studio Fiscale Amoroso" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        <link rel="canonical" href={`https://studiofiscaleamoroso.com${location.pathname}`} />
      </Helmet>

      {/* Rotte per il Blog */}
      <Routes>
        {/* Lista di articoli */}
        <Route
          path="/"
          element={
            <section aria-labelledby="blog-list">
              <h2 id="blog-list" className="sr-only">
                Elenco degli articoli del blog fiscale
              </h2>
              <BlogList />
            </section>
          }
        />

        {/* Singolo post del blog con lo slug */}
        <Route
          path="/:slug"
          element={
            <article aria-labelledby="blog-post">
              <h2 id="blog-post" className="sr-only">
                Contenuto dell'articolo fiscale
              </h2>
              <BlogPost />
            </article>
          }
        />
      </Routes>
    </div>
  );
};

export default Blog;