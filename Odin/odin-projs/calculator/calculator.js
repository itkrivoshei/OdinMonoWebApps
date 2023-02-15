const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const buttons = calculator.querySelector('.buttons');

let currentVal = '';
let previousVal = '';
let operator = '';

buttons.addEventListener('click', handleClick);

function handleClick(e) {
	const value = e.target.parentNode.getAttribute('data-value');

	if (value === 'c') {
		currentVal = currentVal.slice(0, -1);
		updateDisplay();
	} else if (value === 'ac') {
		clearDisplay();
	} else if (isOperator(value)) {
		handleOperator(value);
	} else if (value === '=') {
		calculate();
	} else {
		appendValue(value);
	}
}

function isOperator(value) {
	return ['+', '-', '*', '/'].includes(value);
}

function clearDisplay() {
	currentVal = '';
	previousVal = '';
	operator = '';
	updateDisplay();
}

function handleOperator(value) {
	previousVal = currentVal;
	currentVal = '';
	operator = value;
}

function appendValue(value) {
	currentVal += value;
	updateDisplay();
}

function updateDisplay() {
	display.textContent = currentVal;
}

function calculate() {
	const current = parseFloat(currentVal);
	const previous = parseFloat(previousVal);

	switch (operator) {
		case '+':
			currentVal = previous + current;
			break;
		case '-':
			currentVal = previous - current;
			break;
		case '*':
			currentVal = previous * current;
			break;
		case '/':
			currentVal = previous / current;
			break;
	}

	previousVal = '';
	operator = '';
	updateDisplay();
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
