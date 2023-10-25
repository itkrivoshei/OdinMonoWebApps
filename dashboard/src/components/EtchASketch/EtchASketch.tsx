import React, { useState, useRef, useEffect } from 'react';
import './EtchASketch.scss';

const EtchASketch: React.FC = () => {
  const [boardSize, setBoardSize] = useState<number>(16);
  const [boardColor, setBoardColor] = useState<string>('pink');
  const [pixelColor, setPixelColor] = useState<string>('blue');

  const [tempBoardSize, setTempBoardSize] = useState<string>('16');
  const [tempBoardColor, setTempBoardColor] = useState<string>('pink');
  const [tempPixelColor, setTempPixelColor] = useState<string>('blue');

  const workspaceRef = useRef<HTMLDivElement | null>(null);

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16_777_215).toString(16)}`;
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
    const newSize = Number(tempBoardSize);
    if (newSize && !isNaN(newSize) && newSize <= 100) {
      setBoardSize(newSize);
    } else {
      setBoardSize(16);
    }

    setBoardColor(tempBoardColor || 'pink');
    setPixelColor(tempPixelColor || 'blue');
  };

  useEffect(() => {
    if (workspaceRef.current) {
      const pixels = workspaceRef.current.querySelectorAll(
        '.pixel'
      ) as NodeListOf<HTMLDivElement>;
      pixels.forEach((pixel) => {
        pixel.style.backgroundColor = boardColor;
        pixel.style.filter = '';
      });
    }
  }, [boardSize, boardColor]);

  return (
    <div className='etch-a-sketch-container'>
      <div>
        <span>Board Size:</span>
        <input
          id='board-size'
          type='text'
          placeholder='16'
          value={tempBoardSize}
          onChange={(e) => setTempBoardSize(e.target.value)}
        />
        <button onClick={handleSetNewBoard}>Set board</button>
      </div>
      <div>
        <span>Board Color:</span>
        <input
          id='board-color'
          type='text'
          placeholder='pink'
          value={tempBoardColor}
          onChange={(e) => setTempBoardColor(e.target.value)}
        />
        <button onClick={() => setBoardColor(tempBoardColor)}>Set Color</button>
      </div>
      <div>
        <span>Draw Color:</span>
        <input
          id='pixel-color'
          type='text'
          placeholder='blue'
          value={tempPixelColor}
          onChange={(e) => setTempPixelColor(e.target.value)}
        />
        <button onClick={() => setPixelColor(tempPixelColor)}>Set Color</button>
      </div>
      <div>
        <button onClick={() => setPixelColor('rainbow')}>Rainbow Mod</button>
        <button onClick={() => setPixelColor('black')}>Shadow Mod</button>
      </div>
      <div className='work-space' ref={workspaceRef}>
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
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default EtchASketch;
