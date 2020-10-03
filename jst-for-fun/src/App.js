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

  //palindrome("car"); // return -> falce
  //palindrome("racecar"); // return -> true

  function repeatify(str, times) {
    let newstr = "";
    for (let i = 0; i < times; i++) {
      newstr += str;
    }
    console.log(newstr);
  }

  //  repeatify("hello", 3)

  return (
    <div className="app">
      <InfoButton />
      <ColorButton />
    </div>
  );
}

export default App;
