import React from "react";
import BottomLeft from "../../assets/contact/bottom-left.png";
import TopRight from "../../assets/contact/top-right.png";

export default function ContactBackground() {
  return (
    <>
      <img
        src={TopRight}
        alt="Top Right Pattern"
        className="absolute top-0 right-0 w-[380px] md:w-[450px] opacity-90"
      />
      <img
        src={BottomLeft}
        alt="Bottom Left Pattern"
        className="absolute bottom-0 left-0 w-[420px] md:w-[500px] opacity-90"
      />
    </>
  );
}
