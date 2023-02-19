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
    clearCurrent();
  } else if (value === 'ac') {
    clearAll();
  } else if (isOperator(value)) {
    handleOperator(value);
  } else {
    appendCurrentValue(value);
  }
}

function handleOperator(value) {
  if (value === '=') {
    updateDisplay(calculate());
    previousVal = calculate();
    return;
  } else if (operator && currentVal) {
    updateDisplay(calculate());
    previousVal = calculate();
    currentVal = '';
    operator = value;
    return;
  }

  operator = value;
  previousVal = currentVal;
  currentVal = '';
}

function isOperator(value) {
  return ['+', '-', '*', '/', '='].includes(value);
}

function clearCurrent() {
  currentVal = currentVal.slice(0, -1);
  updateDisplay(currentVal);
}

function clearAll() {
  currentVal = '';
  previousVal = '';
  operator = '';
  updateDisplay('');
}

function appendCurrentValue(value) {
  if (value === '.' && currentVal.toString().indexOf('.') !== -1) return;

  currentVal += value;
  updateDisplay(currentVal);
}

function updateDisplay(value) {
  display.textContent = value || '';
}

function calculate() {
  const current = parseFloat(currentVal);
  const previous = parseFloat(previousVal);
  let res = 0;

  switch (operator) {
    case '+':
      res = previous + current;
      break;
    case '-':
      res = previous - current;
      break;
    case '*':
      res = previous * current;
      break;
    case '/':
      if (current === 0) {
        res = 'NaNi';
        window.open('https://www.youtube.com/watch?v=NKmGVE85GUU', '_blank');
      } else {
        res = previous / current;
      }
      break;
  }

  return res;
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
