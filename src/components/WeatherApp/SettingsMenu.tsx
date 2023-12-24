import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../../redux/store';
import {
  toggleRegionFormat,
  fetchWeather,
} from '../../redux/slices/weatherSlice';
import './styles/SettingsMenu.scss';

const SettingsMenu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const region = useSelector((state: RootState) => state.weather.region);
  const [city, setCity] = useState('');
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const toggleSettingsVisibility = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  const handleToggleRegion = () => {
    dispatch(toggleRegionFormat());
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleFetchWeather = () => {
    dispatch(fetchWeather({ city }));
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
        <button className='unit-toggle-button' onClick={handleToggleRegion}>
          {region === 'EU' ? 'US' : 'EU'}
        </button>
      </div>
    </div>
  );
};

export default SettingsMenu;
