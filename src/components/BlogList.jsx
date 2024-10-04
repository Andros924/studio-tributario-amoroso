import React from 'react';
import { Link } from 'react-router-dom';
import { articoliEvidenza } from './Data';

const BlogList = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">
        Articoli Fiscali
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articoliEvidenza.length > 0 ? (
          articoliEvidenza.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                {post.titolo}
              </h2>
              <p className="text-gray-700 mb-4">
                {post.excerpt.length > 100
                  ? `${post.excerpt.substring(0, 100)}...`
                  : post.excerpt}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="text-gray-700 hover:text-gray-400 font-semibold hover:underline"
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