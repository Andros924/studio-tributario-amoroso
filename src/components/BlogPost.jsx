import React from "react";
import { useParams } from "react-router-dom";
import { articoliEvidenza } from "./Data";

const BlogPost = () => {
  const { slug } = useParams(); // Get the slug from URL
  const post = articoliEvidenza.find((article) => article.slug === slug); // Find by slug

  if (!post) {
    return (
      <div className="text-center py-10 text-gray-700">
        Articolo non trovato.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">
        {post.titolo}
      </h1>
      <p className="text-gray-500 text-sm md:text-base mt-2 text-center mb-8">
        {post.data} - {post.autore}
      </p>
      <div
        className="prose prose-lg max-w-full text-gray-700 mt-6 text-center space-y-6"
        dangerouslySetInnerHTML={{ __html: post.contenuto }}
      />
    </div>
  );
};

export default BlogPost;
