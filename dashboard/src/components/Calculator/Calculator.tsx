import React, { useState, useEffect, useRef } from 'react';
import './Calculator.scss';
import { Howl } from 'howler';
import Button from './Button';

const Calculator: React.FC = () => {
  const [currentVal, setCurrentVal] = useState('0');
  const [previousVal, setPreviousVal] = useState('');
  const [operator, setOperator] = useState('');
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [git, setGit] = useState(false);
  const [sound, setSound] = useState(false);
  const [power, setPower] = useState(true);
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [lastOperation, setLastOperation] = useState<{
    operand: string;
    operator: string;
  } | null>(null);

  const pGenericButton = useRef<Howl | null>(null);
  const rGenericButton = useRef<Howl | null>(null);
  const pLongButton = useRef<Howl | null>(null);
  const rLongButton = useRef<Howl | null>(null);

  const keys = [
    '+',
    '-',
    '*',
    '/',
    '=',
    '.',
    'dot',
    'g',
    'v',
    'n',
    'c',
    'Enter',
    'Escape',
    'Backspace',
    'Delete',
    'NumLock',
    'Clear',
    'ac',
    'g',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
  ];

  const initializeAudio = () => {
    if (audioInitialized) return;

    // Initialize the Howl objects
    pGenericButton.current = new Howl({
      src: ['./Calculator/audio/press_generic.mp3'],
    });
    rGenericButton.current = new Howl({
      src: ['./Calculator/audio/release_generic.mp3'],
    });
    pLongButton.current = new Howl({
      src: ['./Calculator/audio/press_long_key.mp3'],
    });
    rLongButton.current = new Howl({
      src: ['./Calculator/audio/release_long_key.mp3'],
    });

    // Try to resume the AudioContext on user interaction
    if (Howler.ctx?.state && Howler.ctx.state === 'suspended') {
      Howler.ctx.resume();
    }

    setAudioInitialized(true);
  };

  const handleMultiKeys = (key: string) => {
    switch (key) {
      case 'c':
      case 'Backspace':
        return 'Clear';
      case 'Enter':
        return '=';
      case 'Escape':
      case 'n':
        return 'NumLock';
      default:
        return key;
    }
  };

  const handleSound = (key: string, direction: string) => {
    if (!audioInitialized) return;

    if (direction === 'down' && !isKeyDown && keys.includes(key)) {
      if (['0', '+', 'Enter', '='].includes(key)) {
        pLongButton.current?.play();
      } else {
        pGenericButton.current?.play();
      }
      setIsKeyDown(true);
    } else if (direction === 'up' && keys.includes(key)) {
      if (['0', '+', 'Enter'].includes(key)) {
        rLongButton.current?.play();
      } else {
        rGenericButton.current?.play();
      }
      setIsKeyDown(false);
    }
  };

  const isClickValid = (value: string) => {
    return keys.includes(value);
  };

  const handleInput = (value: string) => {
    switch (value) {
      case 'Clear':
        if (power) {
          setCurrentVal((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
        }
        break;
      case 'Delete':
        if (power) {
          setCurrentVal('0');
          setPreviousVal('');
          setOperator('');
          setLastOperation(null);
        }
        break;
      default:
        if (isOperator(value) && power) {
          handleOperator(value);
        } else if (
          (parseInt(value) || parseInt(value) === 0 || value === '.') &&
          power
        ) {
          setCurrentVal((prev) => {
            if (prev === '0' && value !== '.') {
              return value;
            } else if (prev === '0' && value === '.') {
              return '0.';
            } else if (value === '.' && prev.includes('.')) {
              return prev;
            } else {
              return prev + value;
            }
          });
        }
        break;
    }
  };

  const handleOperator = (value: string) => {
    if (value === '=') {
      if (previousVal && currentVal && operator) {
        const result = calculate();
        setCurrentVal(result);
        setPreviousVal('');
        setOperator('');
        setLastOperation({ operand: currentVal, operator });
      } else if (lastOperation) {
        // If "=" is pressed again, use the last operand and operator
        const result = calculateWithLastOperation();
        setCurrentVal(result);
        setPreviousVal('');
        setOperator('');
      }
    } else if (operator && !currentVal) {
      setOperator(value);
    } else {
      if (previousVal && currentVal && operator) {
        const result = calculate();
        setCurrentVal('');
        setPreviousVal(result);
      } else {
        setPreviousVal(currentVal);
        setCurrentVal('');
      }
      setOperator(value);
      setLastOperation(null); // Reset the last operation when a new operator is pressed
    }
  };

  const isOperator = (value: string) => {
    return ['+', '-', '*', '/', '=', 'Enter'].includes(value);
  };

  const calculate = () => {
    const current = parseFloat(currentVal);
    const previous = parseFloat(previousVal);
    return performCalculation(previous, current, operator);
  };

  const calculateWithLastOperation = () => {
    const current = parseFloat(currentVal);
    const last = parseFloat(lastOperation!.operand);
    return performCalculation(current, last, lastOperation!.operator);
  };

  const performCalculation = (a: number, b: number, op: string) => {
    switch (op) {
      case '+':
        return String(a + b);
      case '-':
        return String(a - b);
      case '*':
        return String(a * b);
      case '/':
        if (b === 0) {
          window.open('https://www.youtube.com/watch?v=NKmGVE85GUU');
          return 'Error';
        } else {
          return String(a / b);
        }
      default:
        return 'Error';
    }
  };

  useEffect(() => {
    const imageList = [
      './Calculator/svg/ac.svg',
      './Calculator/svg/c.svg',
      './Calculator/svg/divide.svg',
      './Calculator/svg/dot.svg',
      './Calculator/svg/eight.svg',
      './Calculator/svg/enter.svg',
      './Calculator/svg/five.svg',
      './Calculator/svg/four.svg',
      './Calculator/svg/git.svg',
      './Calculator/svg/minus.svg',
      './Calculator/svg/multiply.svg',
      './Calculator/svg/nine.svg',
      './Calculator/svg/numLock.svg',
      './Calculator/svg/one.svg',
      './Calculator/svg/plus.svg',
      './Calculator/svg/seven.svg',
      './Calculator/svg/six.svg',
      './Calculator/svg/three.svg',
      './Calculator/svg/two.svg',
      './Calculator/svg/vol.svg',
      './Calculator/svg/zero.svg',
    ];

    let loadedImages = 0;

    imageList.forEach(
      (imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === imageList.length) {
            setSvgLoaded(true);
          }
        };
      },
      [sound, isKeyDown, power]
    );

    const handleKeyDown = (e: any) => {
      if (!isClickValid(e.key)) return;
      const finalKey = handleMultiKeys(e.key);
      if (sound || e.key === 'v') handleSound(e.key, 'down');
      handleInput(finalKey);
      if (['g', 'NumLock', 'v'].includes(finalKey))
        handleCommandButtons(finalKey);
      setLastKeyPressed(finalKey); // Set last key pressed
    };

    const handleKeyUp = (e: any) => {
      if (!isClickValid(e.key)) return;
      if (sound || e.key === 'v') handleSound(e.key, 'up');
      setLastKeyPressed(null); // Reset last key pressed
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [sound, isKeyDown, power]);

  const handleCommandButtons = (value: string) => {
    switch (value) {
      case 'g':
        setGit(true);
        window.open('https://github.com/itkrivoshei');
        break;
      case 'v':
        initializeAudio(); // Ensure audio is initialized
        setSound(!sound);
        break;
      case 'NumLock':
        setPower(!power);
        setCurrentVal('0');
        setPreviousVal('');
        setOperator('');
        break;
      default:
        break;
    }
  };

  const handleMouseDown = (dataValue: any) => {
    if (sound || dataValue === 'v') handleSound(dataValue, 'down');
    handleInput(dataValue);
  };

  const handleMouseUp = (dataValue: any) => {
    if (sound || dataValue === 'v') handleSound(dataValue, 'up');
    if (['g', 'NumLock', 'v'].includes(dataValue))
      handleCommandButtons(dataValue);
  };

  return (
    <div className='calculator-container'>
      {svgLoaded ? (
        <>
          <div className='statusPanel'>
            <div>
              Num
              <br />
              Lock
              <div className={`light ${power ? 'flash' : ''}`} />
            </div>
            <div>
              Volume
              <div className={`light ${sound ? 'flash' : ''}`} />
            </div>
            <div>
              Git
              <br />
              Check
              <div className={`light ${git ? 'flash' : ''}`} />
            </div>
          </div>
          <div className={`display ${power ? '' : 'lock'}`}>{currentVal}</div>
          <div className='buttons'>
            {[
              {
                id: 'ac',
                dataValue: 'Delete',
                imageSrc: './Calculator/svg/ac.svg',
              },
              {
                id: 'c',
                dataValue: 'Clear',
                imageSrc: './Calculator/svg/c.svg',
              },
              {
                id: 'divide',
                dataValue: '/',
                imageSrc: './Calculator/svg/divide.svg',
              },
              {
                id: 'dot',
                dataValue: '.',
                imageSrc: './Calculator/svg/dot.svg',
              },
              {
                id: 'eight',
                dataValue: '8',
                imageSrc: './Calculator/svg/eight.svg',
              },
              {
                id: 'enter',
                dataValue: '=',
                imageSrc: './Calculator/svg/enter.svg',
                isLongKey: true,
              },
              {
                id: 'five',
                dataValue: '5',
                imageSrc: './Calculator/svg/five.svg',
              },
              {
                id: 'four',
                dataValue: '4',
                imageSrc: './Calculator/svg/four.svg',
              },
              {
                id: 'git',
                dataValue: 'g',
                imageSrc: './Calculator/svg/git.svg',
              },
              {
                id: 'minus',
                dataValue: '-',
                imageSrc: './Calculator/svg/minus.svg',
              },
              {
                id: 'multiply',
                dataValue: '*',
                imageSrc: './Calculator/svg/multiply.svg',
              },
              {
                id: 'nine',
                dataValue: '9',
                imageSrc: './Calculator/svg/nine.svg',
              },
              {
                id: 'numLock',
                dataValue: 'NumLock',
                imageSrc: './Calculator/svg/numLock.svg',
              },
              {
                id: 'one',
                dataValue: '1',
                imageSrc: './Calculator/svg/one.svg',
              },
              {
                id: 'plus',
                dataValue: '+',
                imageSrc: './Calculator/svg/plus.svg',
                isLongKey: true,
              },
              {
                id: 'seven',
                dataValue: '7',
                imageSrc: './Calculator/svg/seven.svg',
              },
              {
                id: 'six',
                dataValue: '6',
                imageSrc: './Calculator/svg/six.svg',
              },
              {
                id: 'three',
                dataValue: '3',
                imageSrc: './Calculator/svg/three.svg',
              },
              {
                id: 'two',
                dataValue: '2',
                imageSrc: './Calculator/svg/two.svg',
              },
              {
                id: 'vol',
                dataValue: 'v',
                imageSrc: './Calculator/svg/vol.svg',
              },
              {
                id: 'zero',
                dataValue: '0',
                imageSrc: './Calculator/svg/zero.svg',
                isLongKey: true,
              },
            ].map((button) => (
              <Button
                key={button.id}
                id={button.id}
                dataValue={button.dataValue}
                imageSrc={button.imageSrc}
                isLongKey={button.isLongKey}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                isActive={button.dataValue === lastKeyPressed}
              />
            ))}
          </div>
        </>
      ) : (
        <div className='loading-screen'>Loading...</div>
      )}
    </div>
  );
};

export default Calculator;
