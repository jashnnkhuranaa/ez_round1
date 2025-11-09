import React from "react";
import strip from "../assets/services/strip.png";
import girl1 from "../assets/services/girl1.png";
import girl2 from "../assets/services/girl2.png";
import girl3 from "../assets/services/girl3.png";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FEF0EC] px-4 py-10">
     
      <div className="text-center mb-8">
        <h2 className="text-lg text-red-500 font-medium">Films</h2>
        <p className="text-gray-800 text-xl mt-2">
          The storyboard reveals the breadth of our craft.
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        
        <div className="relative">
          <img
            src={strip}
            alt="Tape"
            className="absolute top-0 left-10 w-24 rotate-[-10deg]"
          />
          <img
            src={girl1}
            alt="Film Production"
            className="w-64 rounded-lg shadow-lg rotate-[-10deg]"
          />
        </div>

        
        <div className="relative">
          <img
            src={strip}
            alt="Tape"
            className="absolute top-0 left-10 w-24"
          />
          <img
            src={girl2}
            alt="Branding"
            className="w-64 rounded-lg shadow-lg"
          />
        </div>

       
        <div className="relative">
          <img
            src={strip}
            alt="Tape"
            className="absolute top-0 left-10 w-24 rotate-[10deg]"
          />
          <img
            src={girl3}
            alt="Art Curation"
            className="w-64 rounded-lg shadow-lg rotate-[10deg]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
