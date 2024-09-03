import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar  />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   <Footer />
    </>
    
  );
};

export default App;
