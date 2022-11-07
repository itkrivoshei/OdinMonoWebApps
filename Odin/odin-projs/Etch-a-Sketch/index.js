function drawDivBox(divToPut, size, boxColor, partSize) {
	let pixel = document.createElement('div');
	let breakBox = document.createElement('div');

	divToPut.style.display = 'flex';
	divToPut.style.flexWrap = 'wrap';
	breakBox.style.flexBasis = '100%';
	pixel.style.backgroundColor = boxColor;
	pixel.style.width = partSize + 'px';
	pixel.style.height = partSize + 'px';

	for (let i = 0; i < size; i++) {
		for (let i = 0; i < size; i++) {
			divToPut.appendChild(pixel.cloneNode(true));
		}
		divToPut.appendChild(breakBox.cloneNode(true));
	}
}

function addHoverEffect(parentDiv, color) {
	parentDiv.addEventListener('mouseover', (e) => {
		if (e.target.parentNode === parentDiv) {
			e.target.style.backgroundColor = color;
		}
	});
}

function removeChildDivs(parentDiv) {
	parentDiv.innerHTML = '';
}

function setNewBoard() {
	removeChildDivs(document.querySelector('.work-space'));

	let boardSize = document.querySelector('#board-size');
	let boardColor = document.querySelector('#board-color');
	let pixelSize = document.querySelector('#pixel-size');
	let pixelColor = document.querySelector('#pixel-color');
	if (!boardSize.value || isNaN(boardSize.value) || boardSize.value > 100)
		boardSize.value = 16;
	if (!pixelSize.value || isNaN(pixelSize.value) || pixelSize.value > 100)
		pixelSize.value = 30;
	if (!boardColor.value) boardColor.value = 'pink';
	if (!pixelColor.value) pixelColor.value = 'blue';

	drawDivBox(
		document.querySelector('.work-space'),
		boardSize.value,
		boardColor.value,
		pixelSize.value
	);
	addHoverEffect(document.querySelector('.work-space'), pixelColor.value);
}
