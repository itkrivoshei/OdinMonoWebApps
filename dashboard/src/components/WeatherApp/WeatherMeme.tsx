import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import axios from 'axios';

const mapStateToProps = (state: RootState) => ({
  currentCondition: state.weather.weatherData?.current.condition.text,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const WeatherMeme: React.FC<PropsFromRedux> = ({ currentCondition }) => {
  const [gifUrl, setGifUrl] = useState<string>('');

  useEffect(() => {
    if (currentCondition) {
      fetchGif(currentCondition);
    }
  }, [currentCondition]);

  const fetchGif = async (condition: string) => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          q: condition,
          limit: 30,
        },
      });

      if (response.data.data.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * response.data.data.length
        );
        setGifUrl(response.data.data[randomIndex].images.fixed_height.url);
      }
    } catch (error) {
      console.error('Error fetching gif:', error);
    }
  };

  return <div>{gifUrl && <img src={gifUrl} alt='Weather Meme' />}</div>;
};

export default connector(WeatherMeme);
