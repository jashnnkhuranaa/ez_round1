import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

function App() {
  return(
  <div>
    <Navbar />
    <HeroSection />
    <AboutPage />
    <AboutUs />
    <Services />
  </div> 
  )
}

export default App;

