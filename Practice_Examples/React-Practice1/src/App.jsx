import React from "react";

function App() {
  return (
    <>
      <div className="bg-green-800 h-screen ">
        <header>
          <img
            src="src/img/1.png"
            alt="header img"
            style={{
              width: "1500px",
              height: "200px",
              display: "block",
              margin: "auto",
            }}
          />
        </header>
        <main className="text-center font-semibold text-4xl text-slate-400 mt-3">
          Purchase Plants Items
          <ul className="flex border-b mt-3">
            <li className="-mb-px mr-1">
              <a
                className="bg-lime-600 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
                href="#"
              >
                Flowers
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-lime-600 inline-block py-2 px-4 text-blue-300 hover:text-blue-800 font-semibold"
                href="#"
              >
                Small Plants
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-lime-600 inline-block py-2 px-4 text-blue-300 hover:text-blue-800 font-semibold"
                href="#"
              >
                Gardning Items
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-lime-600 inline-block py-2 px-4  text-blue-300 hover:text-blue-800 font-semibold"
                href="#"
              >
                Branches and Leaves
              </a>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
