import React from 'react';

interface ButtonProps {
  id: string;
  dataValue: string;
  imageSrc: string;
  onMouseDown: (value: string) => void;
  onMouseUp: (value: string) => void;
  isLongKey?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  id,
  dataValue,
  imageSrc,
  onMouseDown,
  onMouseUp,
  isLongKey,
}) => {
  return (
    <button
      id={id}
      className={`button ${isLongKey ? 'long-key' : ''}`}
      onMouseDown={() => onMouseDown(dataValue)}
      onMouseUp={() => onMouseUp(dataValue)}
    >
      <img src={imageSrc} alt={dataValue} />
    </button>
  );
};

export default Button;
