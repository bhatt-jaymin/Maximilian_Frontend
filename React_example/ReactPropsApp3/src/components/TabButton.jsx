import React from "react";

export default function TabButton({children}) {
  return (
    <li>
      <button className="mt-6 ml-9 bg-indigo-800 rounded-lg	">{children}</button>
    </li>
  );
}
