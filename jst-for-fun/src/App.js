import React, { useState } from 'react';
import buttonColor from "./buttonColor";

function App() {
  // Info Button

  const [count, setCount] = useState(0);

  function mouseOver() {
    document.getElementById("p3").innerHTML = "On Button";
  }

  function mouseLeave() {
    document.getElementById("p3").innerHTML = "Not on Button";
  }

  function buttonDown() {
    document.getElementById("p1").innerHTML = "Button: DOWN";
  }

  function buttonUp() {
    document.getElementById("p1").innerHTML = "Button: UP";
  }

  function componentToHex(num) {
    let hex = num.toString(16);
    //hex.length === 1 ? "0" + hex : hex;
  }

  // Change Color Button

  function rgbToHex(r, g, b) {
    //"#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function changeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let hex = rgbToHex(r, g, b);
    document.getElementById("p4").innerHTML = `rgb(${r}, ${g}, ${b}) ${hex}`;
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="buttonInfo">
      <button onClick={() => setCount(count + 1)}>Down-Up-Click</button>
      <p>Button UP</p>
      <p>Click count: {count}</p>
      <p className="p3">Not on Button</p>
      <buttonColor />
    </div>
  );
}

export default App;
