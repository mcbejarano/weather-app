import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { propTypes } from 'prop-types';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city }=props;
    this.state = {
      city,
      data: null,
    };
  }
  componentDidMount() {
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    fetch(api_weather).then( resolve => {
      return resolve.json();
    }).then( data => {
      const newWeather = transformWeather(data);
      console.log(newWeather);
      //debugger;
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
        { data ?
            <WeatherData data={data}></WeatherData> :
            <CircularProgress />
        }
      </div>
    );
  }
};

WeatherLocation.propTypes = {
  city: propTypes.string.isRequired,
}

export default WeatherLocation;
