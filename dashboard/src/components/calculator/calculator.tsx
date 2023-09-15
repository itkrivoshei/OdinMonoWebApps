import React, { useState, useRef } from 'react';
import './Calculator.scss';
import { Howl } from 'howler';

const Calculator: React.FC = () => {
  const [currentVal, setCurrentVal] = useState<string>('0');
  const [previousVal, setPreviousVal] = useState<string>('');
  const [volume, setVolume] = useState(1);
  const [operator, setOperator] = useState<string | null>(null);
  const [gitFlash, setGitFlash] = useState<boolean>(false);
  const [numLockFlash, setNumLockFlash] = useState<boolean>(true);

  // Howler sounds
  const pGenericButton = useRef(
    new Howl({ src: ['./audio/press_generic.mp3'] })
  ).current;
  const rGenericButton = useRef(
    new Howl({ src: ['./audio/release_generic.mp3'] })
  ).current;
  const pLongButton = useRef(
    new Howl({ src: ['./audio/press_long_key.mp3'] })
  ).current;
  const rLongButton = useRef(
    new Howl({ src: ['./audio/release_long_key.mp3'] })
  ).current;

  const handleInput = (value: string) => {
    switch (value) {
      case 'c':
        clearCurrent();
        break;
      case 'ac':
        clearAll();
        break;
      case 'git':
        window.open('https://github.com/itkrivoshei', '_blank');
        setGitFlash(true);
        break;
      case 'vol':
        setVolume((prevVolume) => (prevVolume === 0 ? 1 : 0));
        break;
      case 'enter':
        const result = calculate();
        setCurrentVal(result);
        setPreviousVal('');
        setOperator(null);
        break;
      case 'numLock':
        setNumLockFlash((prevNumLockFlash) => !prevNumLockFlash);
        numLockFlash ? setCurrentVal('') : setCurrentVal('0');
        break;
      default:
        if (isOperator(value)) {
          handleOperator(value);
        } else {
          appendCurrentValue(value);
        }
        break;
    }
  };

  const isOperator = (value: string) => {
    return ['+', '-', '*', '/', 'enter'].includes(value);
  };

  const handleOperator = (value: string) => {
    // If there's an existing operator and no current value, replace the operator
    if (operator && currentVal === '0') {
      setOperator(value);
      return;
    }

    // If there's an existing operator, previous value, and a current value, compute the result
    if (operator && currentVal !== '0' && previousVal) {
      const result = calculate();
      setPreviousVal(result);
      setCurrentVal('0'); // Clear the current value after calculation
      setOperator(value);
      return;
    }

    // If there's a current value but no previous value, set current value as the previous value
    if (currentVal !== '0' && !previousVal) {
      setPreviousVal(currentVal);
      setCurrentVal('0'); // Clear the current value after setting the operator
    }
    setOperator(value);
  };

  const clearCurrent = () => {
    const newVal = currentVal.slice(0, -1);
    if (newVal === '') {
      setCurrentVal('0');
    } else {
      setCurrentVal(newVal);
    }
  };

  const clearAll = () => {
    setCurrentVal('0');
    setPreviousVal('0');
    setOperator(null);
  };

  const appendCurrentValue = (value: string) => {
    if (!numLockFlash && !isNaN(Number(value))) return;
    if (value === '.' && currentVal.includes('.')) return;

    if (
      (currentVal === '0' && value !== '.') ||
      (previousVal && operator && currentVal === '0')
    ) {
      setCurrentVal(value);
    } else {
      setCurrentVal((prevVal) => prevVal + value);
    }
  };

  const calculate = (): string => {
    if (!operator || !previousVal) return currentVal;

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
          window.open('https://www.youtube.com/watch?v=NKmGVE85GUU', '_blank');
        } else {
          res = previous / current;
        }
        break;
    }
    return res % 1 !== 0 ? res.toFixed(2) : res.toString();
  };

  interface ButtonProps {
    id: string;
    dataValue: string;
    imageSrc: string;
    handleClick: (value: string) => void;
    isLongKey?: boolean;
  }

  const Button: React.FC<ButtonProps> = ({
    id,
    dataValue,
    imageSrc,
    handleClick,
    isLongKey,
  }) => {
    return (
      <button
        id={id}
        className={`button ${isLongKey ? 'long-key' : ''}`}
        onClick={() => handleClick(dataValue)}
        onMouseDown={() => {
          if (id === 'vol') {
            pGenericButton.play();
          } else if (volume === 1) {
            if (isLongKey) {
              pLongButton.play();
            } else pGenericButton.play();
          }
        }}
        onMouseUp={() => {
          if (id === 'vol') {
            rGenericButton.play();
          } else if (volume === 1) {
            if (isLongKey) {
              rLongButton.play();
            } else rGenericButton.play();
          }
        }}
      >
        <img src={imageSrc} alt={dataValue} />
      </button>
    );
  };

  return (
    <div className='calculator-container'>
      <div className='statusPanel'>
        <div>
          Num
          <br />
          Lock
          <div className={`light ${numLockFlash ? 'flash' : ''}`}></div>
        </div>
        <div>
          Volume
          <div className={`light ${volume ? 'flash' : ''}`}></div>
        </div>
        <div>
          Git
          <br />
          Check
          <div className={`light ${gitFlash ? 'flash' : ''}`}></div>
        </div>
      </div>
      <div className={`display ${!numLockFlash ? 'lock' : ''}`}>
        {currentVal}
      </div>
      <div className='buttons'>
        <Button
          id='ac'
          dataValue='ac'
          imageSrc='./svg/ac.svg'
          handleClick={handleInput}
        />
        <Button
          id='c'
          dataValue='c'
          imageSrc='./svg/c.svg'
          handleClick={handleInput}
        />
        <Button
          id='divide'
          dataValue='/'
          imageSrc='./svg/divide.svg'
          handleClick={handleInput}
        />
        <Button
          id='dot'
          dataValue='.'
          imageSrc='./svg/dot.svg'
          handleClick={handleInput}
        />
        <Button
          id='eight'
          dataValue='8'
          imageSrc='./svg/eight.svg'
          handleClick={handleInput}
        />
        <Button
          id='enter'
          dataValue='enter'
          imageSrc='./svg/enter.svg'
          isLongKey
          handleClick={handleInput}
        />
        <Button
          id='five'
          dataValue='5'
          imageSrc='./svg/five.svg'
          handleClick={handleInput}
        />
        <Button
          id='four'
          dataValue='4'
          imageSrc='./svg/four.svg'
          handleClick={handleInput}
        />
        <Button
          id='git'
          dataValue='git'
          imageSrc='./svg/git.svg'
          handleClick={handleInput}
        />
        <Button
          id='minus'
          dataValue='-'
          imageSrc='./svg/minus.svg'
          handleClick={handleInput}
        />
        <Button
          id='multiply'
          dataValue='*'
          imageSrc='./svg/multiply.svg'
          handleClick={handleInput}
        />
        <Button
          id='nine'
          dataValue='9'
          imageSrc='./svg/nine.svg'
          handleClick={handleInput}
        />
        <Button
          id='numLock'
          dataValue='numLock'
          imageSrc='./svg/numLock.svg'
          handleClick={handleInput}
        />
        <Button
          id='one'
          dataValue='1'
          imageSrc='./svg/one.svg'
          handleClick={handleInput}
        />
        <Button
          id='plus'
          dataValue='+'
          imageSrc='./svg/plus.svg'
          isLongKey
          handleClick={handleInput}
        />
        <Button
          id='seven'
          dataValue='7'
          imageSrc='./svg/seven.svg'
          handleClick={handleInput}
        />
        <Button
          id='six'
          dataValue='6'
          imageSrc='./svg/six.svg'
          handleClick={handleInput}
        />
        <Button
          id='three'
          dataValue='3'
          imageSrc='./svg/three.svg'
          handleClick={handleInput}
        />
        <Button
          id='two'
          dataValue='2'
          imageSrc='./svg/two.svg'
          handleClick={handleInput}
        />
        <Button
          id='vol'
          dataValue='vol'
          imageSrc='./svg/vol.svg'
          handleClick={handleInput}
        />
        <Button
          id='zero'
          dataValue='0'
          imageSrc='./svg/zero.svg'
          isLongKey
          handleClick={handleInput}
        />
      </div>
    </div>
  );
};

export default Calculator;
