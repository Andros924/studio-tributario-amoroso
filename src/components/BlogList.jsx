import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  // Simula una fetch di articoli dal backend
  useEffect(() => {
    // Sostituire con la chiamata reale all'API del backend
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    };
    
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-darkred mb-10">Articoli Fiscali</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-darkred mb-4">{post.title}</h2>
              <p className="text-gray-700 mb-4">
                {post.description.length > 100
                  ? `${post.description.substring(0, 100)}...`
                  : post.description}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="text-lightred font-semibold hover:underline"
              >
                Leggi di più
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Nessun articolo disponibile.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
