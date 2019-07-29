import React from 'react';
import WeatherLocation from './WeatherLocation'

const LocationList = () => (
    <div>
        <WeatherLocation city="Corrientes,ar"/>
        <WeatherLocation city="Parana,ar"/>
        <WeatherLocation city="Calafate,ar"/>
        <WeatherLocation city="Cafayate,ar"/>
    </div>
);

export default LocationList;