import reactIMG from '../assets/react.png'
import { CORE_CONCEPTS } from "../Data.js";
import CoreConcept from "./CoreConcept.jsx";
import React from 'react';

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function RandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[RandomInt(2)];
    console.log(description);
    return (
      <header>
        <h3 className="underline-offset-4 text-center text-5xl text-rose-800 font-bold py-16">
          React Essential
        </h3>
        <div className="flex justify-center opacity-10">
          <img src={reactIMG} alt="React Logo" />
        </div>
        <div className="text-center text-violet-300">
          <br />
          <p className="font-bold text-3xl">
            {description} React concepts you will need for almost every app you
            are going to build!
          </p>
          <section id="core-concept">
            <h2>Core Concept</h2>
            <ul className="me-15">
              <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
          </section>
        </div>
      </header>
    );
  }
  