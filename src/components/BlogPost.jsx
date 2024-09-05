import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Ottiene l'ID dell'articolo dalla URL
  const [post, setPost] = useState(null); // Stato per il post specifico
  const [loading, setLoading] = useState(true); // Stato per il caricamento

  // Recupera i dettagli dell'articolo dal backend
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`); // Simulazione fetch
        const data = await response.json();
        setPost(data);
        setLoading(false); // Fine del caricamento
      } catch (error) {
        console.error("Errore durante il recupero dell'articolo:", error);
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Caricamento in corso...</div>;
  }

  if (!post) {
    return <div className="text-center py-10">Articolo non trovato.</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-darkred mb-6">{post.title}</h1>
      <p className="text-gray-600 mb-8">{new Date(post.created_at).toLocaleDateString()}</p>
      <div className="prose prose-lg max-w-full text-gray-800">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;
