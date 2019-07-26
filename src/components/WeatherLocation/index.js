import React, {Component} from 'react';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
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


const data = {
  temperature: -5,
  weatherState: SNOW,
  humidity: 10,
  wind: '10 m/s',
}

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Corrientes',
      data: data,
    };
  }

  handleUpdateClick = () => {
    fetch(api_weather).then( resolve => {
      return resolve.json();
    }).then( data => {
      const newWeather = transformWeather(data);
      console.log(newWeather);
      debugger;
      this.setState({
        data:newWeather,
      });
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
