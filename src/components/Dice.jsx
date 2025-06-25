import React, { useState } from "react";

export default function Dice({ onRoll }) {
  const [value, setValue] = useState(1);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setValue(result);
    onRoll(result);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        className="bg-black text-white px-4 py-2 rounded-lg shadow"
        onClick={rollDice}
      >
        Roll 🎲
      </button>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
