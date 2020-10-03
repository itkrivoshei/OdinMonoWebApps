import React from "react";
import ColorButton from "./ColorButton";
import InfoButton from "./InfoButton";
import "./App.css";

function App() {
  function palindrome(str) {
    let orig = str;
    let rev = str.split("").reverse().join("");
    if (orig === rev) console.log(true);
    else console.log(false);
  }

  return (
    <div className="app">
      <InfoButton />
      <ColorButton />
    </div>
  );
}

export default App;
