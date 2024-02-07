import React from "react";
import reactIMG from "../src/assets/react.png";
import "./index.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function RandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[RandomInt(2)];
  return (
    <header>
      <h3 className="underline-offset-4	text-center text-5xl text-rose-800 font-bold py-16	">
        React Essential
      </h3>
      <div className="flex justify-center">
        <img src={reactIMG} alt="React Logo" />
      </div>
      <div className="text-center text-violet-300">
        <br />
        <p className="font-bold text-3xl">
          {description} React concepts you will need for almost every app you are going to build!
        </p>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="text-center text-fuchsia-200 text-5xl py-10">
      Time to Practice!
    </footer>
  );
}

function App() {
  return (
    <div className="bg-lime-600 min-h-screen flex flex-col justify-between">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
