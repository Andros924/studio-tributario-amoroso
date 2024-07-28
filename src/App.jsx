import React from "react";

// Componenti per le varie sezioni della Home Page
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import ServicesOverview from "./components/ServicesOverview";

import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <IntroSection />
        <ServicesOverview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
