function drawDivBox(divToPut, size, boxColor, partSize) {
	let boxi = document.createElement('div');
	let breakBox = document.createElement('div');

	divToPut.style.display = 'flex';
	divToPut.style.flexWrap = 'wrap';
	breakBox.style.flexBasis = '100%';
	boxi.style.backgroundColor = boxColor;
	boxi.style.width = partSize + 'px';
	boxi.style.height = partSize + 'px';

	for (let i = 0; i < size; i++) {
		for (let i = 0; i < size; i++) {
			divToPut.appendChild(boxi.cloneNode(true));
		}
		divToPut.appendChild(breakBox.cloneNode(true));
	}
}

function addHowerEffect(parentDiv, color) {
	parentDiv.addEventListener('mouseover', (e) => {
		if (e.target.parentNode === parentDiv) {
			e.target.style.backgroundColor = color;
		}
	});
}

drawDivBox(document.querySelector('.work-space'), 16, 'yellow', 30);
addHowerEffect(document.querySelector('.work-space'), 'blue');
