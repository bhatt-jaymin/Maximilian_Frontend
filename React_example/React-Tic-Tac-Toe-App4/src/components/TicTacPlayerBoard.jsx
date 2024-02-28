import React from "react";
import Header from "./Header";

export default function TicTacPlayerBoard() {
  return (
    <main>
      <div id="game-container">
        <Header />

        <div className="mt-16 max-w-screen-md mx-auto bg-white bg-opacity-80 rounded-lg dark:bg-opacity-90 shadow-xl shadow-cyan-500/75">
          <div className="p-4">
            <h5 className="mb-5 text-lg font-medium leading-tight text-neutral-500/95 dark:text-neutral-50">
              <div className="flex justify-around">
                {/* Display Player 1 */}
                <div>
                  <span className="player-1">
                  <span className="player-name mr-5">Player 1</span>
                  <span className="player-symbol mr-16">X</span>
                  <button>Edit</button>
                  </span>
                </div>

                {/* Display Player 2 */}
                <div>
                <span className="player-2">
                  <span className="player-name mr-5">Player 2</span>
                  <span className="player-symbol mr-16">O</span>
                  <button>Edit</button>
                  </span>
                </div>
              </div>
            </h5>
            <p className="mb-4 text-10sm text-violet-950 dark:text-neutral-200 mt-5">
              GAME Board
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-200">
              <small className="text-neutral-500 dark:text-neutral-400">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>

        {/* 
            PLAYERS GAME BOARD
             */}
      </div>
      LOG
    </main>
  );
}
