import React, { useState } from "react";
import Button from "./Button";

export default function Card({ frontSide, backSide, handleClick, handleNoClick }) {
  const [isFront, changeFace] = useState(true);

  function flipCard() {
    changeFace((oldState) => !oldState);
  }
  const text = isFront ? frontSide : backSide;
  const sideClass = isFront ? "front" : "back";
  const classList = `flash-card ${sideClass}`;
  return (
    <>
      <div className={classList} onClick={flipCard}>
        {text}
      </div>
      <Button text="Nailed It" style="green" handleClick={handleClick} />
      <Button text="Hell No" style="red" handleNoClick={handleNoClick} />
    </>
  );
}
