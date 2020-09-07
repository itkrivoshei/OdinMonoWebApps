import React, { useState } from "react";

function InfoButton() {
  const [count, setCount] = useState(0);
  const [btnUpDown, setBtnUpDown] = useState("UP");
  const [btnOnOut, setBtnOnOut] = useState("OUT");

  return (
    <div className="InfoButton">
      <button
        onClick={() => setCount(count + 1)}
        onMouseDown={() => setBtnUpDown("DOWN")}
        onMouseUp={() => setBtnUpDown("UP")}
        onMouseOver={() => setBtnOnOut("ON")}
        onMouseOut={() => setBtnOnOut("OUT")}
      >
        Down-Up-Click
      </button>
      <p>{btnOnOut} Button</p>
      <p>Button {btnUpDown}</p>
      <p>Click count: {count}</p>
    </div>
  );
}

export default InfoButton;
