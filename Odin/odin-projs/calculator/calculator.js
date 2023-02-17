const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const buttons = calculator.querySelector('.buttons');

let currentVal = '';
let previousVal = '';
let currentOperator = '';
let isNewCalculation = false;

buttons.addEventListener('click', handleClick);

function handleClick(e) {
	const value = e.target.parentNode.getAttribute('data-value');

	if (value === 'c') {
		clearCurrent();
	} else if (value === 'ac') {
		clearAll();
	} else if (isOperator(value)) {
		handleOperator(value);
	} else if (value === '=') {
		calculate();
	} else {
		appendCurrentValue(value);
	}
}

function isOperator(value) {
	return ['+', '-', '*', '/'].includes(value);
}

function clearCurrent() {
	currentVal = currentVal.slice(0, -1);
	updateDisplay(currentVal);
}

function clearAll() {
	currentVal = '';
	previousVal = '';
	currentOperator = '';
	isNewCalculation = false;
	updateDisplay('');
}

function handleOperator(value) {
	if (currentOperator) {
		calculate();
	}
	currentOperator = value;
	previousVal = currentVal;
	currentVal = '';
	isNewCalculation = false;
}

function appendCurrentValue(value) {
	currentVal += value;
	updateDisplay(currentVal);
}

function updateDisplay(value) {
	display.textContent = value;
}

function calculate() {
	const current = parseFloat(currentVal);
	const previous = parseFloat(previousVal);

	if (Number.isNaN(previous) || Number.isNaN(current)) {
		console.log('NAN');
		return;
	}

	switch (currentOperator) {
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
			if (current === 0) {
				currentVal = NaN;
			} else {
				currentVal = previous / current;
			}
			break;
	}

	currentVal = '';
	currentOperator = '';
	updateDisplay(currentVal);
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
