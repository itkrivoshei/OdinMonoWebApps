import React from 'react';

interface ButtonProps {
  id: string;
  dataValue: string;
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; // Accept a React component type for SVGs
  onMouseDown: (value: string) => void;
  onMouseUp: (value: string) => void;
  isLongKey?: boolean;
  isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  id,
  dataValue,
  SvgComponent,
  onMouseDown,
  onMouseUp,
  isLongKey,
  isActive,
}) => {
  return (
    <button
      id={id}
      className={`button ${isLongKey ? 'long-key' : ''} ${
        isActive ? 'active' : ''
      }`}
      onMouseDown={() => onMouseDown(dataValue)}
      onMouseUp={() => onMouseUp(dataValue)}
      aria-label={dataValue}
    >
      <SvgComponent className='button-svg' />
    </button>
  );
};

export default Button;
