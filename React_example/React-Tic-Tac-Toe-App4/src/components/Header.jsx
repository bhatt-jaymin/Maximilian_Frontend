import React from "react";
import HeaderImg from"./HeaderImg"

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl text-violet-300 font-bold mt-5">TIC-Tac-TOE</h1>
      <HeaderImg/>
    </div>
  );
}