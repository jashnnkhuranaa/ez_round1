import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#FEF0EC] flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 min-h-screen overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="md:w-1/2 flex flex-col gap-6 text-left">
        <h2 className="text-2xl md:text-3xl font-halant text-gray-800">
          A montage of familiar faces and names.
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-md">
          Some stories come from the biggest names. Others begin with bold, 
          rising voices. We’ve been fortunate to walk alongside both — 
          listening, creating, and building stories that matter.
        </p>

        {/* Cards Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 mt-6 items-center">
          {/* 85+ Projects Card */}
          <img
            src="/src/assets/aboutUs/85card.png"
            alt="Happy Clients"
            className="w-[130px] md:w-[150px] transform rotate-[3deg]"
          />

          {/* 50+ Happy Clients Image */}
          <img
            src="/src/assets/aboutUs/50card.png"
            alt="Happy Clients"
            className="w-[130px] md:w-[150px] left-5 transform rotate-[3deg]"
          />

          {/* 10+ Experts Team Image */}
          <img
            src="/src/assets/aboutUs/10card.png"
            alt="Experts Team"
            className="w-[130px] md:w-[150px] transform rotate-[2deg]"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
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

        {/* Arc + Mountain */}
        <div className="relative w-full flex justify-center items-center">
          <img
            src="/src/assets/aboutUs/arc.png"
            alt="Brand Arc"
            className="w-[80%] md:w-[400px] mx-auto"
          />
          <img
            src="/src/assets/aboutUs/mountain.png"
            alt="Mountain Illustration"
            className="absolute bottom-[-10px] w-[50%] md:w-[280px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
