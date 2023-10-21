import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    onChangeColor(newRandomColor);
  }
  return (
    <div
      className="child"
      style={{ backgroundColor: color }}
      onClick={handleChangeColor}
    />
  );
}

export default Child;
