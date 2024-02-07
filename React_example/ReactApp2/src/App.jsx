import React from "react";
import "./index.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function RandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const description = reactDescriptions[RandomInt(2)];
  console.log(description);
  return (
    <header>
      <h3 className="text-center	text-5xl text-rose-800	font-weight: 900 font-normal;">
        React Essential
      </h3>
      <div>
        <p className="font-weight: 700 text-3xl">
          <h3 className="text-center text-violet-300">
           
            <br />
            <br />
            {description} React Concept you will need almost by app you are
            going to Build !
          </h3>

          <div>
            <img
              src="https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_react_icon_158742.png"
              alt="React Logo"
            ></img>
          </div>
        </p>
      </div>
    </header>
  );
}
function App() {
  return (
    <div className="bg-lime-600" id="app">
      <br />
      <br />
      <br />
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-fuchsia-200 text-5xl text-center">
        Time to Practice!
      </h1>
    </div>
  );
}

export default App;
