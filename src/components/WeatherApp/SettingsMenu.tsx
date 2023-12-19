import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  setUnitCelsius,
  setUnitFahrenheit,
  fetchWeather,
} from '../../redux/actions/weatherActions';
import { RootState } from '../../redux/reducers/rootReducer';
import { Unit } from '../../redux/reducers/weatherReducer';
import './styles/SettingsMenu.scss';

// Function to map Redux state to component props
const mapStateToProps = (state: RootState) => ({
  unit: state.weather.unit,
});

// Function to map Redux dispatch actions to component props
const mapDispatchToProps = {
  setUnitCelsius,
  setUnitFahrenheit,
  fetchWeather,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

// Functional component for the Settings Menu
const SettingsMenu: React.FC<PropsFromRedux> = ({
  setUnitCelsius,
  setUnitFahrenheit,
  fetchWeather,
  unit,
}) => {
  const [city, setCity] = useState('');
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  // Toggles the visibility of the settings content
  const toggleSettingsVisibility = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  // Toggles between Celsius and Fahrenheit units
  const toggleUnit = () => {
    unit === Unit.Celsius ? setUnitFahrenheit() : setUnitCelsius();
  };

  // Updates the city state based on user input
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  // Dispatches an action to fetch weather data for the specified city
  const handleFetchWeather = () => {
    fetchWeather({ city });
  };

  return (
    <div className='settings-menu'>
      <div className='settings-icon' onClick={toggleSettingsVisibility}>
        <span className='material-symbols-outlined'>settings</span>
      </div>
      <div className={`settings-content ${isSettingsVisible ? 'active' : ''}`}>
        <input
          type='text'
          value={city}
          onChange={handleCityChange}
          placeholder='Enter city'
        />
        <button className='search-button' onClick={handleFetchWeather}>
          <span className='material-symbols-outlined'>search</span>
        </button>
        <button className='unit-toggle-button' onClick={toggleUnit}>
          {unit === Unit.Celsius ? 'EU' : 'US'}
        </button>
      </div>
    </div>
  );
};

export default connector(SettingsMenu);
