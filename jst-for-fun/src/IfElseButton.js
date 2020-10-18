import React from "react";

function ifElseTests() {
  while (true) {
    var ex = prompt("На выбор 1-4 задачи", "1");
    // EX1
    if (ex === "1") {
      var ex1 = prompt("Какое «официальное» название JavaScript?");
      if (ex1 === "ECMAScript"){
        alert("Верно!");
        break;
      }
      else
        alert("Не знаете? ECMAScript!");
    }
    // EX2
    else if (ex === "2") {
      var ex2 = prompt("Напишите число больше, меньше, либо равное 0", "0");
      if (+ex2 < 0) {
        alert("Число меньше чем 0");
        break;
      } else if (+ex2 > 0) {
        alert("Число больше чем 0");
        break;
      } else if (+ex2 === 0) {
        alert("Число равно 0");
        break;
      } else {
        alert("Это не число");
        break;
      }
    }
    // EX3
    else if (ex === "3") {
      var ex3a = prompt("a + b < 4 - Задайте a и b | a =", "0");
      var ex3b = prompt("a + b < 4 - Задайте a и b | b =", "0");
      var result = (ex3a + ex3b >= 4) ?
      (ex3a + ex3b == 4) ? "Равно" : "Много"
      : "Мало";
      alert(result);
    }
    // EX4
    else if (ex === "4") {
      var ex4 = prompt("Введите логин: Сотрудник или Директор")
      var message = ex4 === "Сотрудник" ? "Привет" :
      ex4 === "Директор" ? "Здравствуйте" :
      ex4 === "" ? "Нет Логина" : "";
      alert(message);
    }
    // ELSE
    else
      var ex = prompt("Сделай выбор 1, 2, 3, или 4", "1");
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
