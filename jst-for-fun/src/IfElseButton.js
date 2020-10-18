import React from "react";

function ifElseTests() {
  while (true) {
    var ex = prompt("На выбор 1-4 задачи, для выхода 5", "1");
    // EX1
    if (ex === "1") {
      var ex1 = prompt("Какое «официальное» название JavaScript?");
      if (ex1 === "ECMAScript"){
        alert("Верно!");
      }
      else
        alert("Не знаете? ECMAScript!");
    }
    // EX2
    else if (ex === "2") {
      var ex2 = prompt("Напишите число больше, меньше, либо равное 0", "0");
      if (ex2[0] == "-" && ex2 < 0)
        alert(`Число ${ex2} меньше чем 0`);
      else if (+ex2 > 0)
        alert(`Число ${+ex2} больше чем 0`);
      else if (+ex2 === 0)
        alert("Число ваше число 0");
      else
        alert(`${ex2} это не число`);
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
    // EXIT
    else if (ex === "5")
      break;
    // ELSE
    else
      var ex = prompt("Сделай выбор 1, 2, 3, 4, для выхода 5", "1");
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
