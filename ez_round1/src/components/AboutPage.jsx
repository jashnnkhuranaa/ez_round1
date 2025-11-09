import React from "react";
import Note from "../assets/aboutpage/note.png";
import IndiaGate from "../assets/aboutpage/indiagate.png";
import Team from "../assets/aboutpage/group.png";
import Arrow from "../assets/aboutpage/Vector.png";

export default function AboutPage() {
  return (
    <section className="relative w-full h-screen bg-[#FEF0EC] flex items-center justify-between overflow-hidden px-6 md:px-16">
     
      <div className="flex flex-col justify-between h-[80%]">
       
        <div className="relative top-0 left-5 w-64 md:w-90 rotate-[-1deg] drop-shadow-lg">
          <img src={Note} alt="note" className="w-full h-auto" />
        </div>

       
        <div className="relative left-0 w-55  md:w-60">
          <img src={IndiaGate} alt="India Gate" className="w-full h-52" />
        </div>
      </div>

      
      <div className="relative flex flex-col items-center justify-center w-[100%] mr-8 md:w-[68%] text-center scale-90 md:scale-95 md: right-10 top-6 left-4">
        <div className="relative">
          <img src={Team} alt="Team" className="w-80 md:w-[400px] mx-auto" />

          
          <div className="absolute -left-14 md:-left-24 top-[45%] flex flex-col items-center">
            <img
              src={Arrow}
              alt="arrow"
              className="w-12 md:w-10 rotate-[130deg] mb-1"
            />
            <p className="font-['Island_Moments'] text-base md:text-xl text-[#001F3F]">
              Branding Experts
            </p>
          </div>

          
          <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <p className="font-['Island_Moments'] text-base md:text-xl text-[#001F3F] mb-1">
              Film Makers
            </p>
            <img src={Arrow} alt="arrow" className="w-8 md:w-10 -rotate-90" />
          </div>

          
          <div className="absolute -right-12 md:-right-20 top-[45%] flex flex-col items-center">
            <img
              src={Arrow}
              alt="arrow"
              className="w-8 md:w-10 rotate-[45deg] mb-1"
            />
            <p className="font-['Island_Moments'] text-base md:text-xl text-[#001F3F]">
              Art Curators
            </p>
          </div>
        </div>

        
        <div className="mt-4 text-[#001F3F] text-center">
          <p className="font-['Halant'] text-sm md:text-base max-w-md mx-auto">
            Take a closer look at the stories V bring to life.
          </p>
          <button className="mt-2 bg-[#F15D2B] text-white px-5 py-1.5 rounded-full text-sm md:text-base shadow-md hover:opacity-90 transition">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
