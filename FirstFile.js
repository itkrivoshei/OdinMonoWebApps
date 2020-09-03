document.getElementById("btn1").onmousedown = function () {
  buttonDown();
};
document.getElementById("btn1").onmouseup = function () {
  buttonUp();
};
document.getElementById("btn1").onclick = function () {
  clickCounter();
};
document.getElementById("btn1").onmouseover = function () {
  mouseOver();
};
document.getElementById("btn1").onmouseleave = function () {
  mouseLeave();
};
document.getElementById("btn2").onclick = function () {
  changeColor();
};

// Change Color Button

function componentToHex(num) {
  let hex = num.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function changeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  hex = rgbToHex(r, g, b);
  document.getElementById("p4").innerHTML = `rgb(${r}, ${g}, ${b}) ${hex}`;
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}

// Info Button

var count = 1;

function clickCounter() {
  document.getElementById("p2").innerHTML = "Click count: ".concat(count++);
}

function mouseOver() {
  document.getElementById("p3").innerHTML = "On Button";
}

function mouseLeave() {
  document.getElementById("p3").innerHTML = "Not on Button";
}

function buttonDown() {
  document.getElementById("p1").innerHTML = "Button: DOWN";
}

function buttonUp() {
  document.getElementById("p1").innerHTML = "Button: UP";
}
