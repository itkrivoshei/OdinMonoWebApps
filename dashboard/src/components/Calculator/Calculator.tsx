import React, { useState, useEffect } from 'react';
import './Calculator.scss';
import { Howl } from 'howler';
import Button from './Button';

const Calculator: React.FC = () => {
  const [currentVal, setCurrentVal] = useState('0');
  const [previousVal, setPreviousVal] = useState('');
  const [operator, setOperator] = useState('');
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [git, setGit] = useState(false);
  const [sound, setSound] = useState(true);
  const [power, setPower] = useState(true);
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);
  const [lastOperation, setLastOperation] = useState<{
    operand: string;
    operator: string;
  } | null>(null);

  // Howler sounds
  const pGenericButton = new Howl({ src: ['./audio/press_generic.mp3'] });
  const rGenericButton = new Howl({ src: ['./audio/release_generic.mp3'] });
  const pLongButton = new Howl({ src: ['./audio/press_long_key.mp3'] });
  const rLongButton = new Howl({ src: ['./audio/release_long_key.mp3'] });

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
    if (direction === 'down' && !isKeyDown && keys.includes(key)) {
      if (['0', '+', 'Enter', '='].includes(key)) {
        pLongButton.play();
      } else {
        pGenericButton.play();
      }
      setIsKeyDown(true);
    } else if (direction === 'up' && keys.includes(key)) {
      if (['0', '+', 'Enter'].includes(key)) {
        rLongButton.play();
      } else {
        rGenericButton.play();
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
    } else {
      if (operator && !currentVal) {
        setOperator(value);
      } else if (previousVal && currentVal && operator) {
        const result = calculate();
        setCurrentVal('');
        setPreviousVal(result);
        setOperator(value);
        setLastOperation(null); // Reset the last operation when a new operator is pressed
      } else {
        setPreviousVal(currentVal);
        setCurrentVal('');
        setOperator(value);
        setLastOperation(null); // Reset the last operation when a new operator is pressed
      }
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
    const handleKeyDown = (e: any) => {
      if (!isClickValid(e.key)) return;
      const finalKey = handleMultiKeys(e.key);
      if (sound || e.key === 'v') handleSound(e.key, 'down');
      handleInput(finalKey);
      if (finalKey === 'g' || finalKey === 'NumLock' || finalKey === 'v')
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
    if (dataValue === 'g' || dataValue === 'NumLock' || dataValue === 'v')
      handleCommandButtons(dataValue);
  };

  return (
    <div className='calculator-container'>
      <div className='statusPanel'>
        <div>
          Num
          <br />
          Lock
          <div className={`light ${power ? 'flash' : ''}`}></div>
        </div>
        <div>
          Volume
          <div className={`light ${sound ? 'flash' : ''}`}></div>
        </div>
        <div>
          Git
          <br />
          Check
          <div className={`light ${git ? 'flash' : ''}`}></div>
        </div>
      </div>
      <div className={`display ${!power ? 'lock' : ''}`}>{currentVal}</div>
      <div className='buttons'>
        {[
          { id: 'ac', dataValue: 'Delete', imageSrc: './svg/ac.svg' },
          { id: 'c', dataValue: 'Clear', imageSrc: './svg/c.svg' },
          { id: 'divide', dataValue: '/', imageSrc: './svg/divide.svg' },
          { id: 'dot', dataValue: '.', imageSrc: './svg/dot.svg' },
          { id: 'eight', dataValue: '8', imageSrc: './svg/eight.svg' },
          {
            id: 'enter',
            dataValue: '=',
            imageSrc: './svg/enter.svg',
            isLongKey: true,
          },
          { id: 'five', dataValue: '5', imageSrc: './svg/five.svg' },
          { id: 'four', dataValue: '4', imageSrc: './svg/four.svg' },
          { id: 'git', dataValue: 'g', imageSrc: './svg/git.svg' },
          { id: 'minus', dataValue: '-', imageSrc: './svg/minus.svg' },
          { id: 'multiply', dataValue: '*', imageSrc: './svg/multiply.svg' },
          { id: 'nine', dataValue: '9', imageSrc: './svg/nine.svg' },
          {
            id: 'numLock',
            dataValue: 'NumLock',
            imageSrc: './svg/numLock.svg',
          },
          { id: 'one', dataValue: '1', imageSrc: './svg/one.svg' },
          {
            id: 'plus',
            dataValue: '+',
            imageSrc: './svg/plus.svg',
            isLongKey: true,
          },
          { id: 'seven', dataValue: '7', imageSrc: './svg/seven.svg' },
          { id: 'six', dataValue: '6', imageSrc: './svg/six.svg' },
          { id: 'three', dataValue: '3', imageSrc: './svg/three.svg' },
          { id: 'two', dataValue: '2', imageSrc: './svg/two.svg' },
          { id: 'vol', dataValue: 'v', imageSrc: './svg/vol.svg' },
          {
            id: 'zero',
            dataValue: '0',
            imageSrc: './svg/zero.svg',
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
    </div>
  );
};

export default Calculator;
