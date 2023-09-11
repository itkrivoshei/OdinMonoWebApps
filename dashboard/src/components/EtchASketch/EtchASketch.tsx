import React, { useState } from 'react';
import './EtchASketch.scss';

const EtchASketch: React.FC = () => {
  const [boardSize, setBoardSize] = useState<number>(16);
  const [boardColor, setBoardColor] = useState<string>('pink');
  const [pixelColor, setPixelColor] = useState<string>('blue');

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handlePixelMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (pixelColor === 'rainbow') {
      target.style.backgroundColor = getRandomColor();
    } else if (pixelColor === 'black') {
      const currentBrightness = target.style.filter
        ? parseFloat(target.style.filter.split('(')[1])
        : 1;
      target.style.filter = `brightness(${Math.max(
        currentBrightness - 0.1,
        0
      )})`;
    } else {
      target.style.backgroundColor = pixelColor;
    }
  };

  const handleSetNewBoard = () => {
    setBoardSize((prevSize) => {
      if (!prevSize || isNaN(prevSize) || prevSize > 100) {
        return 16;
      }
      return prevSize;
    });
    setBoardColor((prevColor) => prevColor || 'pink');
    setPixelColor((prevColor) => prevColor || 'blue');
  };

  return (
    <div className='etch-a-sketch-container'>
      <button onClick={handleSetNewBoard}>Set board</button>
      <p>Board</p>
      <span>Size:</span>
      <input
        id='board-size'
        type='text'
        placeholder='16'
        value={boardSize}
        onChange={(e) => setBoardSize(Number(e.target.value))}
      />
      <span>Color:</span>
      <input
        id='board-color'
        type='text'
        placeholder='pink'
        value={boardColor}
        onChange={(e) => setBoardColor(e.target.value)}
      />
      <p>Pixel</p>
      <span>Color:</span>
      <input
        id='pixel-color'
        type='text'
        placeholder='blue'
        value={pixelColor}
        onChange={(e) => setPixelColor(e.target.value)}
      />
      <button onClick={() => setPixelColor('rainbow')}>Rainbow color</button>
      <button onClick={() => setPixelColor('black')}>To Black Mod</button>
      <div className='work-space'>
        {Array(boardSize)
          .fill(0)
          .map((_, rowIndex) => (
            <div key={rowIndex} className='row'>
              {Array(boardSize)
                .fill(0)
                .map((_, colIndex) => (
                  <div
                    key={colIndex}
                    className='pixel'
                    style={{ backgroundColor: boardColor }}
                    onMouseOver={handlePixelMouseOver}
                  ></div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default EtchASketch;
