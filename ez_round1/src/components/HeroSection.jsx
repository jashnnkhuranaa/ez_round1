import React from "react";
import mandala from "../assets/mandala.png";
import vfilmsLogo from "../assets/vfilms-logo.png";
import Navlogo from "../assets/Navbar.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-[#FEF0EC] overflow-hidden px-6">
      {/* Mandala Background */}
      <img
        src={mandala}
        alt="Mandala Background" 
        className="absolute inset-0 m-auto w-[600px] opacity-60 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center space-y-6">
        {/* navbarLogo */}
        <img src={Navlogo} alt="V Films" className="w-48 mb-4" />
        {/* Logo */}
        <img
          src={vfilmsLogo}
          alt="VFilms Logo"
          className="w-48 md:w-56 mb-4"
        />

        {/* Subtitle */}
        <h1
          className="font-[Island Moments] text-[#0F3255] text-4xl md:text-6xl leading-none"
          style={{ fontFamily: "'Island Moments', cursive" }}
        >
          Varnan is where stories find <br /> their voice and form
        </h1>

        {/* Tagline */}
        <h2
          className="font-[Halant] text-[#F15D2B] text-2xl md:text-3xl"
          style={{ fontFamily: "'Halant', serif" }}
        >
          Films . Brands . Art
        </h2>

        {/* Paragraph */}
        <p
          className="font-[Instrument Sans] text-[#0F3255] text-sm md:text-base leading-relaxed mt-4"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          Since 2009, V’ve been telling stories — stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way — by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories — V honors them.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
