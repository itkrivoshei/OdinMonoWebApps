import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  setUnitCelsius,
  setUnitFahrenheit,
  fetchWeather,
} from '../../redux/actions/weatherActions';
import { RootState } from '../../redux/reducers/rootReducer';
import { Unit } from '../../redux/reducers/weatherReducer';

// Mapping Redux state to component props
const mapStateToProps = (state: RootState) => ({
  unit: state.weather.unit,
});

// Mapping Redux dispatch actions to component props
const mapDispatchToProps = {
  setUnitCelsius,
  setUnitFahrenheit,
  fetchWeather,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

// SettingsMenu component
const SettingsMenu: React.FC<PropsFromRedux> = ({
  setUnitCelsius,
  setUnitFahrenheit,
  fetchWeather,
  unit,
}) => {
  const [city, setCity] = useState('');

  // Function to handle unit toggle
  const toggleUnit = () => {
    if (unit === Unit.Celsius) {
      setUnitFahrenheit();
    } else {
      setUnitCelsius();
    }
  };

  // Function to handle city input change
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  // Function to handle form submission
  const handleFetchWeather = () => {
    fetchWeather({ city });
  };

  return (
    <div>
      <button onClick={toggleUnit}>
        Switch to {unit === Unit.Celsius ? 'Fahrenheit' : 'Celsius'}
      </button>
      <div>
        <input
          type='text'
          value={city}
          onChange={handleCityChange}
          placeholder='Enter city'
        />
        <button onClick={handleFetchWeather}>Fetch Weather</button>
      </div>
    </div>
  );
};

export default connector(SettingsMenu);
