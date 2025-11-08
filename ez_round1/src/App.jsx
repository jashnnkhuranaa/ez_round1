import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";

function App() {
  return(
  <div>
    <Navbar />
    <HeroSection />
    <AboutPage />;
  </div> 
  )
}

export default App;

