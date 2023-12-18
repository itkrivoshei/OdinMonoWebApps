import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { fetchGif } from '../../redux/actions/weatherActions';

const mapStateToProps = (state: RootState) => ({
  currentCondition: state.weather.weatherData?.current.condition.text,
  gifUrl: state.weather.gifUrl,
});

const mapDispatchToProps = {
  fetchGif,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const WeatherMeme: React.FC<PropsFromRedux> = ({
  currentCondition,
  gifUrl,
  fetchGif,
}) => {
  useEffect(() => {
    if (currentCondition) {
      fetchGif(currentCondition);
    }
  }, [currentCondition, fetchGif]);

  return <div>{gifUrl && <img src={gifUrl} alt='Weather Meme' />}</div>;
};

export default connector(WeatherMeme);
