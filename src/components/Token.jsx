import React from "react";

export default function Token({ color = "red" }) {
  return (
    <div
      className={`w-6 h-6 rounded-full`}
      style={{ backgroundColor: color }}
    ></div>
  );
}
