import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import AboutUs from "./components/AboutUs";

function App() {
  return(
  <div>
    <Navbar />
    <HeroSection />
    <AboutPage />
    <AboutUs />;
  </div> 
  )
}

export default App;

