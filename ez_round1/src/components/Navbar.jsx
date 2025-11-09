import { useState } from "react";
import Navlogo from "../assets/Navbar.png";
import navicon from "../assets/NavIcon.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FFFBFB] fixed top-0 left-0 z-50 flex items-center justify-between px-8 py-4 shadow-sm">
      
      <img src={Navlogo} alt="V Films" className="w-28" />

      
      <ul className="hidden md:flex gap-8 text-[#000] font-[Instrument Sans] text-lg">
        <li className="hover:text-[#E85D2A] cursor-pointer">Services</li>
        <li className="hover:text-[#E85D2A] cursor-pointer">Their Stories</li>
        <li className="hover:text-[#E85D2A] cursor-pointer">Our Story</li>
        <li className="hover:text-[#E85D2A] cursor-pointer">Varnan</li>
      </ul>

      
      <div className="hidden md:flex items-center">
        <button className="bg-[#F15D2B] text-white px-5 py-2 rounded-full shadow-md">
          Let’s Talk ✉️
        </button>
      </div>

      
      <div className="md:hidden">
        <img
          src={navicon}
          alt="menu"
          className="w-7 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FFFBFB] flex flex-col items-center gap-5 py-6 text-[#000] font-[Instrument Sans] text-lg shadow-md md:hidden">
          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-[#E85D2A]">Services</a>
          <a href="#their-stories" onClick={() => setMenuOpen(false)} className="hover:text-[#E85D2A]">Their Stories</a>
          <a href="#our-story" onClick={() => setMenuOpen(false)} className="hover:text-[#E85D2A]">Our Story</a>
          <a href="#varnan" onClick={() => setMenuOpen(false)} className="hover:text-[#E85D2A]">Varnan</a>
        </div>
      )}
    </nav>
  );
}
