import React from "react";

function sumNums() {
  let a = prompt("First Num is:", 0);
  let b = prompt("Second Num is:", 0);
  alert(Number(a) + Number(b));
}

function SummButton() {
  return(
    <div className="summButton">
      <button className="btn" onClick={() => sumNums()}>Summ two num</button>
    </div>
  );
}

export default SummButton;