var click = false;
var pTag = document.createElement("p");
var element = document.getElementById("div1");
var text = document.createTextNode("You Press The Button!");

pTag.appendChild(text);

function onMouseDown() {
	click = true;
	element.appendChild(pTag);
}

function onMouseUp() {
	click = false;
}