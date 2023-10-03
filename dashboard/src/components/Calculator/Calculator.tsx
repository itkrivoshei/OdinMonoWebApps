import React, { useState, useEffect } from 'react';
import './Calculator.scss';
import { Howl } from 'howler';
import Button from './Button';

const Calculator: React.FC = () => {
  const [currentVal, setCurrentVal] = useState('');
  const [previousVal, setPreviousVal] = useState('');
  const [operator, setOperator] = useState('');
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [git, setGit] = useState(false);
  const [sound, setSound] = useState(true);
  const [power, setPower] = useState(true);

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
      case 'Delete':
        return 'clear';
      case '=':
      case 'Enter':
        return '=';
      case 'Delete':
      case 'Escape':
        return 'delete';
      case 'NumLock':
      case 'n':
        return 'numLock';
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
      case 'clear':
        if (power) setCurrentVal((prev) => prev.slice(0, -1));
        break;
      case 'delete':
        if (power) {
          setCurrentVal('');
          setPreviousVal('');
          setOperator('');
        }
        break;
      default:
        if (isOperator(value) && power) {
          handleOperator(value);
        } else if (
          (parseInt(value) || parseInt(value) === 0 || value === '.') &&
          power
        ) {
          setCurrentVal((prev) => prev + value);
        }
        break;
    }
  };

  const handleOperator = (value: string) => {
    if (value === '=') {
      const result = calculate();
      setCurrentVal(result);
      setPreviousVal(result);
    } else if (operator && currentVal) {
      const result = calculate();
      setCurrentVal(result);
      setPreviousVal(result);
      setOperator(value);
    } else {
      setOperator(value);
      setPreviousVal(currentVal);
      setCurrentVal('');
    }
  };

  const isOperator = (value: string) => {
    return ['+', '-', '*', '/', '=', 'Enter'].includes(value);
  };

  const calculate = () => {
    const current = parseFloat(currentVal);
    const previous = parseFloat(previousVal);
    let res = 0;

    switch (operator) {
      case '+':
        res = previous + current;
        break;
      case '-':
        res = previous - current;
        break;
      case '*':
        res = previous * current;
        break;
      case '/':
        if (current === 0) {
          setCurrentVal('');
          setPreviousVal('');
          setOperator('');
          window.open('https://www.youtube.com/watch?v=NKmGVE85GUU');
        } else {
          res = previous / current;
        }
        break;
      default:
        break;
    }

    return res % 1 === 0 ? String(res) : parseFloat(res.toFixed(2)).toString();
  };

  useEffect(() => {
    const handleMouseDown = (e: any) => {
      const value = e.target.getAttribute('alt');
      if (sound || value === 'v') handleSound(value, 'down');
      handleInput(value);
    };

    const handleMouseUp = (e: any) => {
      const value = e.target.getAttribute('alt');
      if (sound || value === 'v') handleSound(value, 'up');
      if (value === 'g' || value === 'NumLock' || value === 'v')
        handleCommandButtons(value);
    };

    const handleKeyDown = (e: any) => {
      if (!isClickValid(e.key)) return;
      const finalKey = handleMultiKeys(e.key);
      if (sound || e.key === 'v') handleSound(e.key, 'down');
      handleInput(finalKey);
      if (finalKey === 'g' || finalKey === 'NumLock' || finalKey === 'v')
        handleCommandButtons(finalKey);
    };

    const handleKeyUp = (e: any) => {
      if (!isClickValid(e.key)) return;
      if (sound) handleSound(e.key, 'up');
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [sound, isKeyDown]);

  const handleCommandButtons = (value: string) => {
    switch (value) {
      case 'g':
        setGit(!git);
        if (git) window.open('https://github.com/itkrivoshei');
        break;
      case 'v':
        setSound(!sound);
        break;
      case 'NumLock':
        setPower(!power);
        break;
      default:
        break;
    }
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
          { id: 'ac', dataValue: 'delete', imageSrc: './svg/ac.svg' },
          { id: 'c', dataValue: 'clear', imageSrc: './svg/c.svg' },
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
          { id: 'git', dataValue: 'git', imageSrc: './svg/git.svg' },
          { id: 'minus', dataValue: '-', imageSrc: './svg/minus.svg' },
          { id: 'multiply', dataValue: '*', imageSrc: './svg/multiply.svg' },
          { id: 'nine', dataValue: '9', imageSrc: './svg/nine.svg' },
          {
            id: 'numLock',
            dataValue: 'numLock',
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
            handleClick={handleInput}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
