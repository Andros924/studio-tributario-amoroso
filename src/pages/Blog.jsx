import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import BlogList from "../components/BlogList";
import BlogPost from "../components/BlogPost";

const Blog = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {location.pathname === "/blog" && (
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
            Il Nostro Blog Fiscale
          </h1>
        )}

        <Routes>
          {/* Lista di articoli */}
          <Route path="/" element={<BlogList />} />

          {/* Singolo post del blog */}
          <Route
            path="/:id"
            element={
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <BlogPost />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Blog;
