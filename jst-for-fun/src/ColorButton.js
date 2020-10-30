import React, {useState} from "react";

function componentToHex(num) {
    let hex = num.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function changeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let hex = rgbToHex(r, g, b);
    let rgbAndHex = `rgb(${r}, ${g}, ${b}) ${hex}`;
    let rgb = `rgb(${r}, ${g}, ${b})`;

    document.body.style = `background: ${rgb};`;

    return rgbAndHex;
}

function ColorButton() {
    const [rgbAndHex, setRgbAndHex] = useState("rgb(255, 255, 255) #ffffff");

    return (
        <div className="colorButton">
            <button className="btn" onClick={() => setRgbAndHex(changeColor())}>
                Change Color
            </button>
            <p>{rgbAndHex}</p>
        </div>
    );
}

export default ColorButton;
