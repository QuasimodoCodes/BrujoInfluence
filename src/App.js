import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Features from "./components/sections/Features";
import Showcase from "./components/sections/Showcase";
import CallToAction from "./components/sections/CallToAction";
import TechStack from "./components/sections/TechStack";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Portfolio />
        <Showcase />
        <TechStack />
        <CallToAction />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
