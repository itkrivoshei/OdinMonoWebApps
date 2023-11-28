import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  setUnitCelsius,
  setUnitFahrenheit,
} from '../../redux/actions/weatherActions';
import { RootState } from '../../redux/reducers';
import { Unit } from '../../redux/reducers/weatherReducer';

const mapStateToProps = (state: RootState) => ({
  unit: state.weather.unit,
});

const mapDispatchToProps = {
  setUnitCelsius,
  setUnitFahrenheit,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const SettingsMenu: React.FC<PropsFromRedux> = ({
  setUnitCelsius,
  setUnitFahrenheit,
  unit,
}) => {
  const toggleUnit = () => {
    if (unit === Unit.Celsius) {
      setUnitFahrenheit();
    } else {
      setUnitCelsius();
    }
  };

  return (
    <div>
      <button onClick={toggleUnit}>
        Switch to {unit === Unit.Celsius ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
};

export default connector(SettingsMenu);
