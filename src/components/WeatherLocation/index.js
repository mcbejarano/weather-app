import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from './../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "1102837a6152ed4ba277725fb88956ec";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`
const data = {
  temperature: -5,
  weatherState: SNOW,
  humidity: 10,
  wind: '10 m/s',
}
const data2 = {
  temperature: 35,
  weatherState: SUN,
  humidity: 85,
  wind: '5 m/s',
}

class WeatherLocation extends Component {
  constructor() {
    super();
    console.log(fetch(api_weather));
    this.state = {
      city: 'Corrientes',
      data: data,
    }
  }
  handleUpdateClick = () => {
    this.setState({
        data: data2,
    });
  }
  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
};

export default WeatherLocation;
