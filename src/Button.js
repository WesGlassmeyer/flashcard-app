import React from "react";

export default function Button({ text, style, handleClick, handleNoClick }) {
  return (
    <button className={style} onClick={handleClick || handleNoClick}>
      {text}
    </button>
  );
}
