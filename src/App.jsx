import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Servizi from "./pages/Servizi";
import Blog from "./pages/Blog";
import DettaglioArticolo from "./pages/DettaglioArticolo";
import Contatti from "./pages/Contatti";
import Footer from "./components/Footer"

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<DettaglioArticolo />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <Footer />
      </>
    
  );
}

export default App;
