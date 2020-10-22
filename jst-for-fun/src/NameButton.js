import React from "react";

function askNameTell() {
  let name = prompt("What is your name");
  if (name !== "")
    alert("Your name is: " + name);
}

function NameButton() {
  return (
    <div className="nameButton">
      <button className="btn" onClick={() => askNameTell()}>
        Your Name
      </button>
    </div>
  );
}

export default NameButton;
