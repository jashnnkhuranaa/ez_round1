import React from "react";
import Note from "../assets/aboutpage/note.png";
import IndiaGate from "../assets/aboutpage/indiagate.png";
import Team from "../assets/aboutpage/group.png";
import Arrow from "../assets/aboutpage/Vector.png";

export default function AboutPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#FEF0EC] flex flex-col items-center overflow-hidden px-6 md:px-20 py-16">
      {/* Sticky Note */}
      <div className="absolute top-10 left-5 md:left-20 w-60 md:w-80 rotate-[-6deg] drop-shadow-lg">
        <img src={Note} alt="note" className="w-full h-auto" />
      </div>

      {/* India Gate */}
      <div className="absolute bottom-16 left-5 md:left-20 w-28 md:w-48">
        <img src={IndiaGate} alt="India Gate" className="w-full h-auto" />
      </div>

      {/* Team Section */}
      <div className="flex flex-col items-center justify-center mt-48 md:mt-32 text-center">
        <div className="relative">
          <img src={Team} alt="Team" className="w-72 md:w-[500px]" />

          {/* Labels and Arrows */}
          {/* Left - Branding Experts */}
          <div className="absolute left-[-70px] md:left-[-120px] top-1/3 flex flex-col items-center">
            <img src={Arrow} alt="arrow" className="w-10 md:w-14 rotate-[140deg]" />
            <p className="font-['Island_Moments'] text-lg md:text-2xl text-[#001F3F]">
              Branding Experts
            </p>
          </div>

          {/* Top - Film Makers */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <p className="font-['Island_Moments'] text-lg md:text-2xl text-[#001F3F]">
              Film Makers
            </p>
            <img src={Arrow} alt="arrow" className="w-10 md:w-14 -rotate-90" />
          </div>

          {/* Right - Art Curators */}
          <div className="absolute right-[-70px] md:right-[-120px] top-1/3 flex flex-col items-center">
            <img src={Arrow} alt="arrow" className="w-10 md:w-14 rotate-[45deg]" />
            <p className="font-['Island_Moments'] text-lg md:text-2xl text-[#001F3F]">
              Art Curators
            </p>
          </div>
        </div>

        {/* Bottom Text and Button */}
        <div className="mt-10 text-[#001F3F]">
          <p className="font-['Halant'] text-base md:text-lg max-w-xl mx-auto">
            Take a closer look at the stories V bring to life.
          </p>
          <button className="mt-4 bg-[#F15D2B] text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
