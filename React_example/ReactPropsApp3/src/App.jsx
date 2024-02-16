import React from "react";
import Header from "./components/Header.jsx";
import "./CSS/index.css"
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div className="bg-black-300 min-h-screen flex flex-col justify-between">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
