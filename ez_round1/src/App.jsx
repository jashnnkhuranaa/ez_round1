import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact/Contact";
function App() {
  return(
  <div>
    <Navbar />
    <HeroSection />
    <AboutPage />
    <AboutUs />
    <Services />
    <Portfolio />
    <Contact />
  </div> 
  )
}

export default App;

