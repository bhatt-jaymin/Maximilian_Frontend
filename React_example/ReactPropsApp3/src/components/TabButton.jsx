import React from "react";

export default function TabButton({children,onSelect}) {
  return (
    <li>
      <button className="mt-6 ml-9 bg-indigo-800 rounded-lg hover:bg-indigo-900 transition-colors duration-300 ease-in-out" onClick={onSelect}>{children}</button>
    </li>
  );
}
