import React from "react";

export default function LudoBoard() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-[400px] h-[400px] bg-white border-4 border-black">
      <div className="bg-red-400 flex items-center justify-center font-bold">RED</div>
      <div className="row-span-3 col-span-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold">🎲</p>
          <p className="text-sm">Dice Area</p>
        </div>
      </div>
      <div className="bg-green-400 flex items-center justify-center font-bold">GREEN</div>
      <div className="col-span-1 row-span-1"></div>
      <div className="col-span-1 row-span-1 flex items-center justify-center font-bold">LUDO</div>
      <div className="col-span-1 row-span-1"></div>
      <div className="bg-yellow-200 flex items-center justify-center font-bold opacity-30">YELLOW</div>
      <div className="col-span-1 row-span-1"></div>
      <div className="bg-blue-200 flex items-center justify-center font-bold opacity-30">BLUE</div>
    </div>
  );
}
