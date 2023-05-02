document.getElementsByClassName("light")[0].className = "light flash";
document.getElementsByClassName("light")[1].className = "light flash";
const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".display");
const buttons = calculator.querySelector(".buttons");
const pGenericButton = new Howl({
  src: ["./audio/press_generic.mp3"],
});
const rGenericButton = new Howl({
  src: ["./audio/release_generic.mp3"],
});
const pLongButton = new Howl({
  src: ["./audio/press_long_key.mp3"],
});
const rLongButton = new Howl({
  src: ["./audio/release_long_key.mp3"],
});

let currentVal = "";
let previousVal = "";
let operator = "";
let isKeyDown = false;
let git = false;
let sound = true;
let power = true;

buttons.addEventListener("mousedown", handleMouseDown);
buttons.addEventListener("mouseup", handleMouseUp);
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

const keys = [
  "+",
  "-",
  "*",
  "/",
  "=",
  ".",
  "dot",
  "g",
  "v",
  "n",
  "c",
  "Enter",
  "Escape",
  "Backspace",
  "Delete",
  "NumLock",
  "g",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

function handleMouseDown(e) {
  const value = e.target.parentNode.getAttribute("data-value");
  if (sound || value === "v") handleSound(value, "down");
  handleInput(value);
}

function handleMouseUp(e) {
  const value = e.target.parentNode.getAttribute("data-value");
  if (sound || value === "v") handleSound(value, "up");
  if (value === "g" || value === "NumLock" || value === "v")
    handleCommandButtons(value);
}

function handleKeyDown(e) {
  if (!isClickValid(e.key)) return;
  const finalKey = handleMultiKeys(e.key);
  const button = document.querySelector(`[data-value='${finalKey}']`);
  if (sound || value === "v") handleSound(e.key, "down");
  button.classList.add("active");
  handleInput(finalKey);
  if (finalKey === "g" || finalKey === "NumLock" || finalKey === "v")
    handleCommandButtons(finalKey);
}

function handleCommandButtons(value) {
  if (value === "g") {
    git = !git;
    if (git) {
      document.getElementsByClassName("light")[2].className = "light flash";
    }
    window.open(
      "https://github.com/itkrivoshei/JSt-For-Fun/tree/main/Odin/odin-projs/calculator"
    );
  } else if (value === "v") {
    sound = !sound;
    if (!sound) {
      document.getElementsByClassName("light")[1].className = "light";
    } else if (sound) {
      document.getElementsByClassName("light")[1].className = "light flash";
    }
  } else if (value === "NumLock") {
    power = !power;
    if (!power) {
      document.getElementsByClassName("light")[0].className = "light";
    } else if (power) {
      document.getElementsByClassName("light")[0].className = "light flash";
    }
  }
}

function handleKeyUp(e) {
  if (!isClickValid(e.key)) return;
  const button = document.querySelector(
    `[data-value='${handleMultiKeys(e.key)}']`
  );
  if (sound) handleSound(e.key, "up");

  button.classList.remove("active");
}

function handleMultiKeys(key) {
  if (["c", "Backspace", "Delete"].includes(key)) {
    return "clear";
  } else if (["=", "Enter"].includes(key)) {
    return "=";
  } else if (["Delete", "Escape"].includes(key)) {
    return "delete";
  } else if (["NumLock", "n"].includes(key)) {
    return "NumLock";
  } else return key;
}

function handleSound(key, direction) {
  if (direction === "down" && !isKeyDown) {
    if (["0", "+", "Enter", "="].includes(key)) {
      pLongButton.play();
    } else {
      pGenericButton.play();
    }
    isKeyDown = !isKeyDown;
  } else if (direction === "up") {
    if (["0", "+", "Enter"].includes(key)) {
      rLongButton.play();
    } else {
      rGenericButton.play();
    }
    isKeyDown = !isKeyDown;
  }
}

function isClickValid(value) {
  return keys.includes(value);
}

function handleInput(value) {
  switch (value) {
    case "clear":
      if (power) clearCurrent();
      break;
    case "delete":
      if (power) clearAll();
      break;
    default:
      if (isOperator(value) && power) {
        handleOperator(value);
      } else if (
        (parseInt(value) || parseInt(value) === 0 || value === ".") &&
        power
      ) {
        appendCurrentValue(value);
      }
      break;
  }
}

function handleOperator(value) {
  if (value === "=") {
    updateDisplay(calculate());
    previousVal = calculate();
    return;
  } else if (operator && currentVal) {
    updateDisplay(calculate());
    previousVal = calculate();
    currentVal = "";
    operator = value;
    return;
  }
  operator = value;
  previousVal = currentVal;
  currentVal = "";
}

function isOperator(value) {
  return ["+", "-", "*", "/", "=", "Enter"].includes(value);
}

function clearCurrent() {
  currentVal = currentVal.slice(0, -1);
  updateDisplay(currentVal);
}

function clearAll() {
  currentVal = "";
  previousVal = "";
  operator = "";
  updateDisplay("");
}

function appendCurrentValue(value) {
  if (value === "." && currentVal.toString().indexOf(".") !== -1) return;
  currentVal += value;
  updateDisplay(currentVal);
}

function updateDisplay(value) {
  display.textContent = value || "";
}

function calculate() {
  const current = parseFloat(currentVal);
  const previous = parseFloat(previousVal);
  let res = 0;

  switch (operator) {
    case "+":
      res = previous + current;
      break;
    case "-":
      res = previous - current;
      break;
    case "*":
      res = previous * current;
      break;
    case "/":
      if (current === 0) {
        clearAll();
        window.open("https://www.youtube.com/watch?v=NKmGVE85GUU");
      } else {
        res = previous / current;
      }
      break;
  }

  return res.toFixed(2);
}
