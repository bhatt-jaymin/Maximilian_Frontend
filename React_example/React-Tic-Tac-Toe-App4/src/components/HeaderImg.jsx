import React from "react";
import Headerlogo from "../assets/game-logo.png";


export default function HeaderImg() {
  return (
    <div className="flex justify-center items-center h-full">
      <img src={Headerlogo} alt="Game Logo" className="max-w-20 max-h-20 mt-5" />
    </div>
  );
}