function drawDivBox(divToPut, size, boxColor) {
	let pixel = document.createElement('div');

	divToPut.style.display = 'flex';
	divToPut.style.flexWrap = 'nowrap';
	divToPut.style.flexDirection = 'column';
	divToPut.style.width = '600px';
	divToPut.style.height = '600px';

	pixel.style.backgroundColor = boxColor;
	pixel.style.width = '100%';
	pixel.style.height = 'auto';

	for (let i = 0; i < size; i++) {
		let rowDiv = document.createElement('div');

		divToPut.appendChild(rowDiv);
		rowDiv.style.display = 'flex';
		rowDiv.style.width = '100%';
		rowDiv.style.height = '100%';

		for (let i = 0; i < size; i++) {
			rowDiv.appendChild(pixel.cloneNode(true));
		}
	}
}

function addHoverEffect(parentDiv, color) {
	parentDiv.addEventListener('mouseover', (e) => {
		if (e.target.parentNode.parentNode === parentDiv) {
			if (color === 'rainbow') {
				e.target.style.backgroundColor =
					'#' + Math.floor(Math.random() * 16777215).toString(16);
			} else e.target.style.backgroundColor = color;
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
	let pixelColor = document.querySelector('#pixel-color');
	if (!boardSize.value || isNaN(boardSize.value) || boardSize.value > 100)
		boardSize.value = 16;
	if (!boardColor.value) boardColor.value = 'pink';
	if (!pixelColor.value) pixelColor.value = 'blue';

	drawDivBox(
		document.querySelector('.work-space'),
		boardSize.value,
		boardColor.value
	);
	addHoverEffect(document.querySelector('.work-space'), pixelColor.value);
}

function changeColorToRainbow() {
	let pixelColor = document.querySelector('#pixel-color');

	addHoverEffect(document.querySelector('.work-space'), 'rainbow');
	pixelColor.value = 'rainbow';
}

function toBlackMod(parentDiv) {
	parentDiv.addEventListener('mouseover', (e) => {
		if (e.target.parentNode.parentNode === parentDiv) {
			if (e.target.style.filter === 'brightness(0.0)') {
			} else if (!e.target.style.filter) {
				e.target.style.filter = 'brightness(0.9)';
			} else if (e.target.style.filter) {
				e.target.style.filter = `brightness(0.${
					+e.target.style.filter[13] - 1
				})`;
			}
		}
	});
}
