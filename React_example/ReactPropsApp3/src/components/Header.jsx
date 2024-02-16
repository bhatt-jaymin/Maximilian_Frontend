import reactIMG from "../assets/react.png";
import React from "react";
import EXAMPLESData from "./ExamplesData";
import "../CSS/index.css"

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function RandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[RandomInt(2)];
  console.log(description);
  return (
    <header>
      <h3 className="underline-offset-4 text-center text-5xl text-violet-300 font-bold py-16">
        React Essential
      </h3>
      <div className="flex justify-center mx-auto w-20 h-20 opacity-25 animate-custom-spin">
        <img src={reactIMG} alt="React Logo" />
      </div>
      <div className="text-center text-violet-300">
        <br />
        <p className="font-bold text-3xl">
          {description} React concepts you will need for almost every app you
          are going to build!
        </p>
      </div>
      <EXAMPLESData/>
    </header>
  );
}
