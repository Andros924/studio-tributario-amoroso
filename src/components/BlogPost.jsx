import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`); 
        const data = await response.json();
        setPost(data);
        setLoading(false); 
      } catch (error) {
        console.error("Errore durante il recupero dell'articolo:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-gray-200">Caricamento in corso...</div>;
  }

  if (!post) {
    return <div className="text-center py-10 text-gray-700">Articolo non trovato.</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
        {post.title}
      </h1>
      <p className="text-gray-500 text-sm md:text-base mt-2">
        {new Date(post.created_at).toLocaleDateString()}
      </p>
      <div className="prose prose-lg max-w-full text-gray-700 mt-6">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;
