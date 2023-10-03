import React from 'react';

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
    >
      <img src={imageSrc} alt={dataValue} />
    </button>
  );
};

export default Button;
