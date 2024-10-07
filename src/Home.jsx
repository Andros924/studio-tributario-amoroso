import React from "react";

// Componenti per le varie sezioni della Home Page

import IntroSection from "./components/IntroSection";
import CallToAction from "./components/CallToAction";

import Services from "./components/Services";

const Home = () => {
  return (
    <div className="home">
      <main>
        <IntroSection />
        <Services />
        <CallToAction />
      </main>
    </div>
  );
};

export default Home;
