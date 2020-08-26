document.getElementById("btn1").addEventListener("click", onMouseDown);

function onMouseDown() {
	document.getElementById("p1").innerHTML = "Button DOWN";
}

function onMouseUp() {
	document.getElementById("p1").innerHTML = "Button UP";
}