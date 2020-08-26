document.getElementById("btn1").onmousedown = function () {onMouseDown()};
document.getElementById("btn1").onmouseup = function () {onMouseUp()};
document.getElementById("btn1").onclick = function () {onClickCounter()};
document.getElementById("btn1").onmouseover = function () {onClickCounter()};

var i = 1;

function onClickCounter() {
	document.getElementById("p2").innerHTML = `Click count: ${i++}`;
}

function onMouseDown() {
	document.getElementById("p1").innerHTML = "Button: DOWN";
}

function onMouseUp() {
	document.getElementById("p1").innerHTML = "Button: UP";
} 