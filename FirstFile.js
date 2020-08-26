document.getElementById("btn1").onmousedown = function () {onMouseDown()};
document.getElementById("btn1").onmouseup = function () {onMouseUp()};
document.getElementById("btn1").onclick = function () {onClickCounter()};
document.getElementById("btn1").onmouseover = function () {onMouseOver()};
document.getElementById("btn1").onmouseleave = function () {onMouseLive()};

var i = 1;

function onMouseOver() {
	document.getElementById("p3").innerHTML = "Mouse Over"
}

function onMouseLive() {
	document.getElementById("p3").innerHTML = "Mouse Live"
}

function onClickCounter() {
	document.getElementById("p2").innerHTML = `Click count: ${i++}`;
}

function onMouseDown() {
	document.getElementById("p1").innerHTML = "Button: DOWN";
}

function onMouseUp() {
	document.getElementById("p1").innerHTML = "Button: UP";
} 