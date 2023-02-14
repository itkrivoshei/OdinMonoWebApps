function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	return x / y;
}

function operate(x, y, operator) {
	if (operator == '+') return add(x, y);
	else if (operator === '-') return subtract(x, y);
	else if (operator === '*') return multiply(x, y);
	else if (operator === '/') return divide(x, y);
}

function tapToDisplay(symbol) {
	const displayText = document.getElementById('display').innerText;

	if (typeof symbol === 'number') {
		displayText += symbol;
	} else if (typeof symbol === 'string' && symbol != 'enter') {
	} else if (symbol === 'enter') {
		saver(symbol);
		let firstNum = +displayText.substring(0, display.displayText('\n'));

		displayText = operate(firstNum, secondNum, operator);
	}
}

// function playSound(pressAudio, releaseAudio, status, e) {
// 	pressAudio.currentTime = 0;
// 	if (status === 'press') {
// 		pressAudio.play();
// 	} else if (status === 'release') {
// 		console.log('hi');
// 		releaseAudio.play();
// 	}
// 	e.removeEventListener('mouseup', () => {
// 		playSound(pressAudio, releaseAudio, 'release');
// 	});
// }

// window.addEventListener('mousedown', (e) => {
// 	const pressAudio = e.target.parentElement.classList.contains('long_key')
// 		? document.getElementById('pressLongKey')
// 		: document.getElementById('pressGeneric');

// 	const releaseAudio = e.target.parentElement.classList.contains('long_key')
// 		? document.getElementById('releaseLongKey')
// 		: document.getElementById('releaseGeneric');

// 	if (!releaseAudio || !pressAudio) return;
// 	console.log(releaseAudio, pressAudio);

// 	playSound(pressAudio, releaseAudio, 'press', e.target);

// 	e.target.addEventListener('mouseup', () => {
// 		playSound(pressAudio, releaseAudio, 'release', e.target);
// 	});
// });
