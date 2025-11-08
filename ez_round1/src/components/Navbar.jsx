import { useState } from "react";
import menu from "../assets/close.png";
import Navlogo from "../assets/Navbar.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#FFFBFB] fixed top-0 left-0 z-50 flex items-center justify-between px-10 py-4">
      {/* Left: Logo */}
      <img src={Navlogo} alt="V Films" className="w-28" />

      {/* Center: Menu Items */}
      <ul className="hidden md:flex gap-8 text-[#000] font-[Instrument Sans] text-lg">
        <li>Services</li>
        <li>Their Stories</li>
        <li>Our Story</li>
        <li>Varnan</li>
      </ul>

      {/* Right: Button + Icon */}
      <div className="hidden md:flex items-center gap-3">
        <button className="bg-[#F15D2B] text-white px-5 py-2 rounded-full shadow-md">
          Let’s Talk ✉️
        </button>
        <img src={menu} alt="menu" className="w-8" />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <img src={menu} alt="menu" className="w-7" />
      </div>
    </nav>
  );
}
