import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from '../components/BlogList';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100"> 
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8"> 
          Il Nostro Blog Fiscale
        </h1>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route 
            path="/:id" 
            element={
              <div className="bg-white p-8 rounded-lg shadow-md"> 
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