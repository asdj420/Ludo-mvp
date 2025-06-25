import React, { useState } from "react";
import Dice from "./Dice";
import Token from "./Token";

export default function LudoBoard() {
  const [lastRoll, setLastRoll] = useState(null);

  return (
    <div className="grid grid-cols-3 grid-rows-3 w-[400px] h-[400px] bg-white border-4 border-black">
      <div className="bg-red-400 flex items-center justify-center font-bold relative">
        <div className="absolute top-2 left-2">
          <Token color="red" />
        </div>
        RED
      </div>

      <div className="row-span-3 col-span-1 flex flex-col items-center justify-center space-y-2">
        <Dice onRoll={setLastRoll} />
        {lastRoll && <p className="text-sm">Last roll: {lastRoll}</p>}
      </div>

      <div className="bg-green-400 flex items-center justify-center font-bold relative">
        <div className="absolute top-2 right-2">
          <Token color="green" />
        </div>
        GREEN
      </div>

      <div className="col-span-1 row-span-1"></div>
      <div className="col-span-1 row-span-1 flex items-center justify-center font-bold">
        LUDO
      </div>
      <div className="col-span-1 row-span-1"></div>

      <div className="bg-yellow-200 flex items-center justify-center font-bold opacity-30">
        YELLOW
      </div>
      <div className="col-span-1 row-span-1"></div>
      <div className="bg-blue-200 flex items-center justify-center font-bold opacity-30">
        BLUE
      </div>
    </div>
  );
}
