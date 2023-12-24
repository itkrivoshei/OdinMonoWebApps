import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { fetchGif } from '../../redux/slices/weatherSlice';
import { RootState } from '../../redux/store';

const WeatherMeme: React.FC = () => {
  const dispatch = useDispatch();
  const currentCondition = useSelector(
    (state: RootState) => state.weather.weatherData?.current.condition.text
  );
  const gifUrl = useSelector((state: RootState) => state.weather.gifUrl);

  useEffect(() => {
    if (currentCondition) {
      dispatch(fetchGif(currentCondition));
    }
  }, [currentCondition, dispatch]);

  return <div>{gifUrl && <img src={gifUrl} alt='Weather Meme' />}</div>;
};

export default WeatherMeme;
