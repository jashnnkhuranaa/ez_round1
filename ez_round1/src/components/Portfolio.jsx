import React from "react";
import leftArrow from "../assets/portfolio/left-arrow.png";
import rightArrow from "../assets/portfolio/right-arrow.png";
import reelFrame from "../assets/portfolio/reel-frame.png";
import cameraDecor from "../assets/portfolio/camera-decor.png";
import cornerDecor from "../assets/portfolio/corner-decor.png";

const Portfolio = () => {
  return (
    <section className="relative bg-[#FEF0EC] h-screen flex flex-col items-center justify-center px-4 pt-24 overflow-hidden">
      {/* Left Camera Illustration */}
      <img
        src={cameraDecor}
        alt="Camera Decoration"
        className="absolute left-6 bottom-12 w-28 md:w-36 mb-8 ml-2 lg:w-44 opacity-80 pointer-events-none select-none"
      />

      {/* Bottom Right Mandala Decoration */}
      <img
        src={cornerDecor}
        alt="Corner Decoration"
        className="absolute right-0 bottom-0 w-32 md:w-44 lg:w-52 opacity-80 pointer-events-none select-none"
      />

      {/* ========== Section Title ========== */}
      <div className="text-center mb-4 md:mb-6 z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 font-[Halant]
">
          The Highlight Reel
        </h2>
        <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base font-[Halant]
">
          Watch the magic we’ve captured.
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-3xl z-10">
        {/* Left Arrow */}
        <img
          src={leftArrow}
          alt="Left Arrow"
          className="absolute left-2 w-5 md:w-8 ml-6"
        />

        {/* Center Reel Frame */}
        <img
          src={reelFrame}
          alt="Film Frame"
          className="w-[70%] sm:w-[80%] md:w-full rounded-xl shadow-md"
        />

        {/* Right Arrow */}
        <img
          src={rightArrow}
          alt="Right Arrow"
          className="absolute right-2 w-5 md:w-8 mr-6"
        />
      </div>
    </section>
  );
};

export default Portfolio;
