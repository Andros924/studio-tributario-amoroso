import React from "react";

// Componenti per le varie sezioni della Home Page
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Services from "./components/Services";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <IntroSection />
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
