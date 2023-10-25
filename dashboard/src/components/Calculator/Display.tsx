import React from 'react';

interface DisplayProps {
  value: string;
  numLockFlash: boolean;
}

const Display: React.FC<DisplayProps> = ({ value, numLockFlash }) => {
  return <div className={`display ${numLockFlash ? '' : 'lock'}`}>{value}</div>;
};

export default Display;
