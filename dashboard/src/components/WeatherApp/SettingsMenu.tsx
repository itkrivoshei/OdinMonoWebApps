import React, { useState } from 'react';

const SettingsMenu = () => {
  const [unit, setUnit] = useState('C');

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  return (
    <div>
      <h2>Settings Menu</h2>
      <button onClick={toggleUnit}>
        Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
};

export default SettingsMenu;
