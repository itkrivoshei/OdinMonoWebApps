import React from "react";

function ifElseTrain() {
  let x = 1;
  while (x === 1) {
    let ex = prompt("На выбор 1-4 задачи", "1");
    // EX1
    if (ex === "1") {
      let ex1 = prompt("Какое «официальное» название JavaScript?");
      if (ex1 === "ECMAScript"){
        alert("Верно!");
        x = 0;
        break;
      }
      else
        alert("Не знаете? ECMAScript!");
    }
    // EX2
    else if (ex === "2") {
      let ex2 = 
    }
    // ELSE
    else
      let ex = prompt("Сделай выбор 1, 2, 3, или 4", "1");
    }

}

function IfElseButton() {
  return (
    <div className="IfElseButton">
      <button className="btn" onClick={() => ifElseTests()}>Train If Else</button>
    </div>
  );
}

export default IfElseButton;
