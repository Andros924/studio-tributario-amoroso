import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Copy, Tag, Eye } from "lucide-react";
import { articoliEvidenza } from "./Data";

const BlogPost = () => {
  const { slug } = useParams();
  const post = articoliEvidenza.find((article) => article.slug === slug);

  useEffect(() => {
    if (post) {
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Helmet>
          <title>Articolo non trovato | Blog</title>
          <meta
            name="description"
            content="Spiacenti, l'articolo che stai cercando non è stato trovato. Controlla il nostro blog per altri contenuti interessanti."
          />
        </Helmet>
        
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Eye className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Articolo non trovato
          </h1>
          <p className="text-gray-600 mb-6">
            Non siamo riusciti a trovare l'articolo richiesto. Potrebbe essere stato spostato o rimosso.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna al blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `https://studiofiscaleamoroso.com/blog/${post.slug}`;
  
  const handleShare = (platform) => {
    const text = `${post.titolo} - ${post.excerpt.substring(0, 100)}...`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        // Potresti aggiungere una notifica qui
        break;
    }
  };

  // Articoli correlati (basati sui tag)
  const relatedArticles = articoliEvidenza
    .filter(article => 
      article.id !== post.id && 
      article.tags && 
      post.tags && 
      article.tags.some(tag => post.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.titolo} | Blog Fiscale</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content={post.autore} />
        <meta name="keywords" content={post.tags ? post.tags.join(', ') : ''} />
        
        {/* Open Graph tags per Facebook */}
        <meta property="og:title" content={post.titolo} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.immagine} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Studio Fiscale Amoroso" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.titolo} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.immagine} />
        <meta name="twitter:url" content={shareUrl} />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.titolo,
            "description": post.excerpt,
            "image": post.immagine,
            "author": {
              "@type": "Person",
              "name": post.autore
            },
            "publisher": {
              "@type": "Organization",
              "name": "Studio Fiscale Amoroso"
            },
            "datePublished": post.data,
            "url": shareUrl
          })}
        </script>
        
        <link rel="canonical" href={shareUrl} />
      </Helmet>

      {/* Breadcrumb e Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna al blog
            </Link>
            
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">Condividi:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  title="Condividi su Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 text-blue-400 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  title="Condividi su Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  title="Condividi su LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  title="Copia link"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header dell'articolo */}
          <header className="mb-12">
            {/* Immagine principale */}
            {post.immagine && (
              <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.immagine}
                  alt={post.titolo}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            )}

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                <Calendar className="w-4 h-4 mr-2" />
                {post.data}
              </div>
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                <User className="w-4 h-4 mr-2" />
                {post.autore}
              </div>
              <div className="flex items-center bg-blue-100 text-blue-700 px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4 mr-2" />
                {post.tempoLettura} min di lettura
              </div>
            </div>

            {/* Titolo */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
              {post.titolo}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              {post.excerpt}
            </p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <Tag className="w-4 h-4 text-gray-500 mr-2" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Contenuto dell'articolo */}
          <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <div
              className="prose prose-lg prose-blue max-w-none"
              style={{
                lineHeight: '1.8',
                fontSize: '1.1rem'
              }}
              dangerouslySetInnerHTML={{ __html: post.contenuto }}
            />
          </article>

          {/* Sezione autore */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                {post.autore.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.autore}
                </h3>
                <p className="text-gray-600 mb-4">
                  Tributarista qualificato con esperienza pluriennale in consulenza fiscale e pianificazione tributaria. 
                  Specializzato in normative fiscali per privati e aziende.
                </p>
                <Link
                  to="/chi-siamo"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Scopri di più sull'autore →
                </Link>
              </div>
            </div>
          </div>

          {/* Articoli correlati */}
          {relatedArticles.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Articoli correlati
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/blog/${article.slug}`}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {article.immagine && (
                      <img
                        src={article.immagine}
                        alt={article.titolo}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                        {article.titolo}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 mt-2">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.tempoLettura} min
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Call to action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Hai bisogno di una consulenza fiscale?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I nostri esperti sono a disposizione per aiutarti con questioni fiscali specifiche 
              e fornirti consulenza personalizzata per la tua situazione.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Richiedi una consulenza
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;