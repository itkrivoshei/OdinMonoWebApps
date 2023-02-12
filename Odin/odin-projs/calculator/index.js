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
	if (operator === '+') add(x, y);
	else if (operator === '-') subtract(x, y);
	else if (operator === '*') multiply(x, y);
	else if (operator === '/') divide(x, y);
}

function tapToDisplay(symbol) {
	const display = document.getElementById('display');
	if (typeof symbol === 'number') display.innerText += symbol;
	else if (typeof symbol === 'string' && symbol != 'enter' ) {
		let firstNum = display.innerText;
		let operator = symbol;

		display.innerText += '\n' + symbol + '\n';
	}
	else if (symbol === 'enter') {
		let secondNum = display.innerText.substring(
			display.innerText.indexOf('\n') + 3,
			display.innerText.length
		);
		console.log(secondNum);
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
