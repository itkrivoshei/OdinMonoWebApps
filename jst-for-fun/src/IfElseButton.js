import React from "react";

function ifElseTrain() {
  while (true) {
    let ex = prompt("На выбор 1-4 задачи", "1");
    // EX1
    if (ex === "1") {
      let ex1 = prompt("Какое «официальное» название JavaScript?");
      if (ex1 === "ECMAScript"){
        alert("Верно!");
        break;
      }
      else
        alert("Не знаете? ECMAScript!");
    }
    // EX2
    else if (ex === "2") {
      let ex2 = prompt("Напишите число больше, меньше, либо равное 0", "0");
      if (+ex2 < 0) {
        alert("Число меньше чем 0");
        break;
      } else if (+ex > 0) {
        alert("Число больше чем 0");
        break;
      } else if (+ex === 0) {
        alert("Число равно 0");
        break;
      } else {
        alert("Это не число");
        break;
      }
    }
    // EX3
    else if (ex === "3") {
      let ex3a = prompt("a + b < 4 - Задайте a и b | a =", "0");
      let ex3b = prompt("a + b < 4 - Задайте a и b | b =", "0");
      let result = (ex3a + ex3b >= 4) ? (ex3a + ex3b == 4) ? "Равно" : "Много" : "Мало";
      alert(result);
    }
    // EX4
    else if (ex === "4") {
      let ex4 = prompt("Введите логин: Сотрудник или Директор")
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
