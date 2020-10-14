import React from "react";
import ColorButton from "./ColorButton";
import InfoButton from "./InfoButton";
import NameButton from "./NameButton";
import SummButton from "./SummButton";
import "./App.css";

function App() {
  function palindrome(str) {
    let orig = str;
    let rev = str.split("").reverse().join("");
    if (orig === rev) console.log(true);
    else console.log(false);
  }

  //palindrome("car"); // console -> falce
  //palindrome("racecar"); // console -> true

  function repeatify(str, times) {
    let newstr = "";
    for (let i = 0; i < times; i++) {
      newstr += str;
    }
    console.log(newstr);
  }

  //  repeatify("hello", 3); // console -> hellohellohello

  function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz");
    else if (num % 3 === 0) console.log("Fizz");
    else if (num % 5 === 0) console.log("Buzz");
    else console.log(num);
  }

  // for(let i = 0; i < 100; i++)
  //   fizzbuzz(i);
  // console -> from 1 to 100 fizz or buzz or fizzbuzz or num

  return (
    <div className="app">
      <InfoButton />
      <NameButton />
      <SummButton />
      <ColorButton />
    </div>
  );
}

export default App;
