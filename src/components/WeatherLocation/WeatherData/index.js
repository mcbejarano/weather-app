import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './style.css';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from './../../../constants/weathers';

const WeatherData = ({data}) => {
  const { temperature, weatherState, humidity, wind } = data;
  return (<div className="weatherDataCont">
  <WeatherTemperature
    temperature={temperature}
    weatherState={weatherState}
  />
<WeatherExtraInfo humidity={humidity} wind={wind}/>
</div>);
};

export default WeatherData;
