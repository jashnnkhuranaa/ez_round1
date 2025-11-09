import React from "react";
import  card1 from "../assets/aboutUs/10card.png";
import card2 from "../assets/aboutUs/85card.png";
import card3 from "../assets/aboutUs/50card.png";
import arc from "../assets/aboutUs/arc.png";
import mountain from "../assets/aboutUs/mountain.png";

const AboutUs = () => {
  return (
    <section className="bg-[#FEF0EC] flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 min-h-screen overflow-hidden">
      
      
      <div className="md:w-1/2 flex flex-col gap-6 text-left">
        <h2 className="text-2xl md:text-3xl font-halant text-gray-800">
          A montage of familiar faces and names.
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-md">
          Some stories come from the biggest names. Others begin with bold, 
          rising voices. We’ve been fortunate to walk alongside both — 
          listening, creating, and building stories that matter.
        </p>

        
        <div className="flex flex-wrap md:flex-nowrap gap-4 mt-6 items-center">
          
          <img
            src={card1}
            alt="Happy Clients"
            className="w-[130px] md:w-[150px] transform rotate-[3deg]"
          />

          
          <img
            src={card2}
            alt="Happy Clients"
            className="w-[130px] md:w-[150px] left-5 transform rotate-[3deg]"
          />

          
          <img
            src={card3}
            alt="Experts Team"
            className="w-[130px] md:w-[150px] transform rotate-[2deg]"
          />
        </div>
      </div>

      
      <div className="md:w-1/2 mt-12 md:mt-0 flex flex-col items-center text-center relative">
        <p
          className="font-island text-2xl md:text-3xl text-gray-800 leading-relaxed mb-10"
          style={{ fontFamily: "Island Moments, cursive" }}
        >
          Every project is more than just a brief — <br />
          it’s a new chapter waiting to be written. <br />
          Together, we’ve crafted tales that inspire, <br />
          connect, and endure.
        </p>

        
        <div className="relative w-full flex justify-center items-center">
          <img
            src={arc}
            alt="Brand Arc"
            className="w-[80%] md:w-[400px] mx-auto"
          />
          <img
            src={mountain}
            alt="Mountain Illustration"
            className="absolute bottom-[-10px] w-[50%] md:w-[280px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
