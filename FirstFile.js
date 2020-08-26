document.getElementById("btn1").onmousedown = function () {buttonDown()};
document.getElementById("btn1").onmouseup = function () {buttonUp()};
document.getElementById("btn1").onclick = function () {clickCounter()};
document.getElementById("btn1").onmouseover = function () {mouseOver()};
document.getElementById("btn1").onmouseleave = function () {mouseLeave()};

var count = 1;

function mouseOver() {
	document.getElementById("p3").innerHTML = "On Button"
}

function mouseLeave() {
	document.getElementById("p3").innerHTML = "Not on Button"
}

function clickCounter() {
	document.getElementById("p2").innerHTML = `Click count: ${count++}`;
}

function buttonDown() {
	document.getElementById("p1").innerHTML = "Button: DOWN";
}

function buttonUp() {
	document.getElementById("p1").innerHTML = "Button: UP";
} 