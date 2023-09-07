import React, { useState } from 'react';
import './Calculator.scss';
import { Howl } from 'howler';

interface ButtonProps {
  id: string;
  dataValue: string;
  imageSrc: string;
  isLongKey?: boolean;
  handleClick?: (value: string) => void;
}

const Calculator: React.FC = () => {
  const [currentVal, setCurrentVal] = useState<string>('');
  const [previousVal, setPreviousVal] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [isKeyDown, setIsKeyDown] = useState<boolean>(false);
  const [git, setGit] = useState<boolean>(false);
  const [sound, setSound] = useState<boolean>(true);
  const [power, setPower] = useState<boolean>(true);

  // Audio config
  const pGenericButton = new Howl({
    src: ['./audio/press_generic.mp3'],
  });

  const rGenericButton = new Howl({
    src: ['./audio/release_generic.mp3'],
  });

  const pLongButton = new Howl({
    src: ['./audio/press_long_key.mp3'],
  });

  const rLongButton = new Howl({
    src: ['./audio/release_long_key.mp3'],
  });

  const handleInput = (value: string) => {
    // This will handle all input related tasks
    // For example, updating current value, performing calculations, etc.
  };

  const Button: React.FC<ButtonProps> = ({
    id,
    dataValue,
    imageSrc,
    isLongKey,
    handleClick,
  }) => {
    return (
      <button
        id={id}
        data-value={dataValue}
        className={isLongKey ? 'long_key' : ''}
        onMouseDown={() => handleClick && handleClick(dataValue)}
        onMouseUp={() => handleClick && handleClick(dataValue)}
      >
        <img src={imageSrc} alt={dataValue} />
      </button>
    );
  };

  return (
    <div className='calculator calculator-container'>
      <div className='statusPanel'>
        <div>
          Num
          <br />
          Lock
          <div className='light'></div>
        </div>
        <div>
          Volume
          <div className='light'></div>
        </div>
        <div>
          Git
          <br />
          Check
          <div className='light'></div>
        </div>
      </div>
      <div className='display'>{currentVal}</div>
      <div className='buttons'>
        <Button
          id='delete'
          dataValue='delete'
          imageSrc='./svg/ac.svg'
          handleClick={handleInput}
        />
        <Button
          id='clear'
          dataValue='clear'
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
          id='multiply'
          dataValue='*'
          imageSrc='./svg/multiply.svg'
          handleClick={handleInput}
        />
        {/* ... continue for other buttons */}
      </div>
    </div>
  );
};

export default Calculator;
