import React, { useState } from "react";

function askNameTell() {
  let name = prompt("What is your name");
  alert("Your name is: " + name);
}

function NameButton() {
  return (
    <div className="nameButton">
      <button className="btn3" onClick={() => askNameTell()}>
        Your Name
      </button>
    </div>
  );
}

export default NameButton;
