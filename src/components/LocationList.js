import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const LocationList = ({ cities }) => (
    <div>
        <WeatherLocation city="Corrientes,ar"/>
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;