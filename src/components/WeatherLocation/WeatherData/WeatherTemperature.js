import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  TRUNDER,
  DRIZZLE,
} from './../../../constants/weathers';

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy",
  [TRUNDER]: "day-thunderstore",
  [DRIZZLE]: "day-showers",
};

const getWeatherIcon = weatherState => {
  const sizeIcon="4x";
  const icon= icons[weatherState];
  if (icon)
      return <WeatherIcons name={icon} className="wicon" size={sizeIcon}/>;
  else
      return <WeatherIcons name={"day-rain"} className="wicon" size={sizeIcon}/>;
};

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="weatherTemperatureCont">
    {
      getWeatherIcon(weatherState)
    }
    <span className="temperature">{` ${temperature}`} </span>
    <span className="temperatureType">{` C°`} </span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
