const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const buttons = calculator.querySelector('.buttons');

let currentVal = '';
let previousVal = '';
let operator = '';

buttons.addEventListener('click', handleClick);
document.addEventListener('keydown', handleKeyboardInput);

function handleClick(e) {
  const value = e.target.parentNode.getAttribute('data-value');
  handleInput(value);
}

function handleKeyboardInput(e) {
  const value = e.key;
  handleInput(value);
}

function handleInput(value) {
  if (value === 'c' || value === 'Backspace') {
    clearCurrent();
  } else if (value === 'ac' || value === 'Escape') {
    clearAll();
  } else if (isOperator(value)) {
    if (value === 'Enter') {
      value = '=';
    }
    handleOperator(value);
  } else if (parseInt(value) || parseInt(value) === 0) {
    console.log(parseInt(value));
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
  return ['+', '-', '*', '/', '=', 'Enter'].includes(value);
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
        clearAll();
        window.open('https://www.youtube.com/watch?v=NKmGVE85GUU');
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
