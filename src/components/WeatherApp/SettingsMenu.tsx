import React, { useState, ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  IconButton,
  TextField,
  Typography,
  Stack,
  Switch as AntSwitch,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { AppDispatch } from '../../redux/store';
import {
  toggleRegionFormat,
  fetchWeather,
} from '../../redux/slices/weatherSlice';

const SettingsMenu: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [city, setCity] = useState<string>('');
  const [isSettingsVisible, setIsSettingsVisible] = useState<boolean>(false);

  const toggleSettingsVisibility = () => setIsSettingsVisible((prev) => !prev);

  const handleToggleRegion = () => dispatch(toggleRegionFormat());

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCity(event.target.value);

  const handleFetchWeather = () => dispatch(fetchWeather({ city }));

  return (
    <Box position='absolute' top={0} margin={2}>
      <IconButton onClick={toggleSettingsVisibility} aria-label='settings'>
        <SettingsIcon />
      </IconButton>
      {isSettingsVisible && (
        <Box>
          <Box display='flex' alignItems='center' gap={1} marginY={2}>
            <TextField
              type='text'
              value={city}
              onChange={handleCityChange}
              placeholder='Enter city'
              variant='outlined'
              size='small'
            />
            <IconButton
              aria-label='search'
              color='primary'
              onClick={handleFetchWeather}
            >
              <SearchIcon />
            </IconButton>
          </Box>
          <Stack
            direction='row'
            spacing={1}
            alignItems='center'
            onClick={handleToggleRegion}
          >
            <Typography>US</Typography>
            <AntSwitch defaultChecked color='default' size='small' />
            <Typography>EU</Typography>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default SettingsMenu;
