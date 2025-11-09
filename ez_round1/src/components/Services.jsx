import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FEF0EC] px-4 py-10">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-lg text-red-500 font-medium">Films</h2>
        <p className="text-gray-800 text-xl mt-2">
          The storyboard reveals the breadth of our craft.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Card 1 */}
        <div className="relative">
          <img
            src="/src/assets/services/strip.png"
            alt="Tape"
            className="absolute top-0 left-10 w-24 rotate-[-10deg]"
          />
          <img
            src="/src/assets/services/girl1.png"
            alt="Film Production"
            className="w-64 rounded-lg shadow-lg rotate-[-10deg]"
          />
        </div>

        {/* Card 2 */}
        <div className="relative">
          <img
            src="/src/assets/services/strip.png"
            alt="Tape"
            className="absolute top-0 left-10 w-24"
          />
          <img
            src="/src/assets/services/girl2.png"
            alt="Branding"
            className="w-64 rounded-lg shadow-lg"
          />
        </div>

        {/* Card 3 */}
        <div className="relative">
          <img
            src="/src/assets/services/strip.png"
            alt="Tape"
            className="absolute top-0 left-10 w-24 rotate-[10deg]"
          />
          <img
            src="/src/assets/services/girl1.png"
            alt="Art Curation"
            className="w-64 rounded-lg shadow-lg rotate-[10deg]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
