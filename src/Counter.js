import React from "react";

export default function Counter(props) {
  return (
    <div className="counter">
      You got {props.count.countRight} questions correct and{" "}
      {props.count.countWrong} questions wrong!
    </div>
  );
}
