import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Servizi from "./pages/Servizi";
import Blog from "./pages/Blog";
import DettaglioArticolo from "./pages/DettaglioArticolo";
import Contatti from "./pages/Contatti";
import Pubblicazioni from "./pages/Pubblicazioni";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/Privacy";
import TermsConditions from "./pages/Terms";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/blog/*" element={<Blog />} />
        {/* Modifica: usa lo slug invece dell'id */}
        <Route path="/blog/:slug" element={<DettaglioArticolo />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/pubblicazioni" element={<Pubblicazioni />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
