import React, { useState, useEffect, useRef } from 'react';
import './Calculator.scss';
import { Howl } from 'howler';
import Button from './Button';

import pressGeneric from '../../assets/Calculator/audio/pressGeneric.mp3';
import releaseGeneric from '../../assets/Calculator/audio/releaseGeneric.mp3';
import pressLongKey from '../../assets/Calculator/audio/pressLongKey.mp3';
import releaseLongKey from '../../assets/Calculator/audio/releaseLongKey.mp3';

import { ReactComponent as AcSvg } from '../../assets/Calculator/svg/ac.svg';
import { ReactComponent as Csvg } from '../../assets/Calculator/svg/c.svg';
import { ReactComponent as DivideSvg } from '../../assets/Calculator/svg/divide.svg';
import { ReactComponent as DotSvg } from '../../assets/Calculator/svg/dot.svg';
import { ReactComponent as EightSvg } from '../../assets/Calculator/svg/eight.svg';
import { ReactComponent as EnterSvg } from '../../assets/Calculator/svg/enter.svg';
import { ReactComponent as FiveSvg } from '../../assets/Calculator/svg/five.svg';
import { ReactComponent as FourSvg } from '../../assets/Calculator/svg/four.svg';
import { ReactComponent as GitSvg } from '../../assets/Calculator/svg/git.svg';
import { ReactComponent as MinusSvg } from '../../assets/Calculator/svg/minus.svg';
import { ReactComponent as MultiplySvg } from '../../assets/Calculator/svg/multiply.svg';
import { ReactComponent as NineSvg } from '../../assets/Calculator/svg/nine.svg';
import { ReactComponent as NumLockSvg } from '../../assets/Calculator/svg/numLock.svg';
import { ReactComponent as OneSvg } from '../../assets/Calculator/svg/one.svg';
import { ReactComponent as PlusSvg } from '../../assets/Calculator/svg/plus.svg';
import { ReactComponent as SevenSvg } from '../../assets/Calculator/svg/seven.svg';
import { ReactComponent as SixSvg } from '../../assets/Calculator/svg/six.svg';
import { ReactComponent as ThreeSvg } from '../../assets/Calculator/svg/three.svg';
import { ReactComponent as TwoSvg } from '../../assets/Calculator/svg/two.svg';
import { ReactComponent as VolSvg } from '../../assets/Calculator/svg/vol.svg';
import { ReactComponent as ZeroSvg } from '../../assets/Calculator/svg/zero.svg';

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

    pGenericButton.current = new Howl({
      src: [pressGeneric],
    });
    rGenericButton.current = new Howl({
      src: [releaseGeneric],
    });
    pLongButton.current = new Howl({
      src: [pressLongKey],
    });
    rLongButton.current = new Howl({
      src: [releaseLongKey],
    });

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
      setLastOperation(null);
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
    const last = parseFloat(lastOperation?.operand ?? '0');
    return performCalculation(current, last, lastOperation?.operator ?? '+');
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isClickValid(e.key)) return;
      const finalKey = handleMultiKeys(e.key);
      if (sound || e.key === 'v') handleSound(e.key, 'down');
      handleInput(finalKey);
      if (['g', 'NumLock', 'v'].includes(finalKey))
        handleCommandButtons(finalKey);
      setLastKeyPressed(finalKey);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!isClickValid(e.key)) return;
      if (sound || e.key === 'v') handleSound(e.key, 'up');
      setLastKeyPressed(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    initializeAudio();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [sound, isKeyDown, power, audioInitialized]);

  const handleCommandButtons = (value: string) => {
    switch (value) {
      case 'g':
        setGit(true);
        window.open('https://github.com/itkrivoshei');
        break;
      case 'v':
        initializeAudio();
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

  const handleMouseDown = (dataValue: string) => {
    if (sound || dataValue === 'v') handleSound(dataValue, 'down');
    handleInput(dataValue);
  };

  const handleMouseUp = (dataValue: string) => {
    if (sound || dataValue === 'v') handleSound(dataValue, 'up');
    if (['g', 'NumLock', 'v'].includes(dataValue))
      handleCommandButtons(dataValue);
  };

  return (
    <div className='calculator-container'>
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
            { id: 'ac', dataValue: 'Delete', SvgComponent: AcSvg },
            { id: 'c', dataValue: 'Clear', SvgComponent: Csvg },
            { id: 'divide', dataValue: '/', SvgComponent: DivideSvg },
            { id: 'dot', dataValue: '.', SvgComponent: DotSvg },
            { id: 'eight', dataValue: '8', SvgComponent: EightSvg },
            {
              id: 'enter',
              dataValue: '=',
              SvgComponent: EnterSvg,
              isLongKey: true,
            },
            { id: 'five', dataValue: '5', SvgComponent: FiveSvg },
            { id: 'four', dataValue: '4', SvgComponent: FourSvg },
            { id: 'git', dataValue: 'g', SvgComponent: GitSvg },
            { id: 'minus', dataValue: '-', SvgComponent: MinusSvg },
            { id: 'multiply', dataValue: '*', SvgComponent: MultiplySvg },
            { id: 'nine', dataValue: '9', SvgComponent: NineSvg },
            { id: 'numLock', dataValue: 'NumLock', SvgComponent: NumLockSvg },
            { id: 'one', dataValue: '1', SvgComponent: OneSvg },
            {
              id: 'plus',
              dataValue: '+',
              SvgComponent: PlusSvg,
              isLongKey: true,
            },
            { id: 'seven', dataValue: '7', SvgComponent: SevenSvg },
            { id: 'six', dataValue: '6', SvgComponent: SixSvg },
            { id: 'three', dataValue: '3', SvgComponent: ThreeSvg },
            { id: 'two', dataValue: '2', SvgComponent: TwoSvg },
            { id: 'vol', dataValue: 'v', SvgComponent: VolSvg },
            {
              id: 'zero',
              dataValue: '0',
              SvgComponent: ZeroSvg,
              isLongKey: true,
            },
          ].map((button) => (
            <Button
              key={button.id}
              id={button.id}
              dataValue={button.dataValue}
              SvgComponent={button.SvgComponent}
              isLongKey={button.isLongKey}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              isActive={button.dataValue === lastKeyPressed}
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default Calculator;
