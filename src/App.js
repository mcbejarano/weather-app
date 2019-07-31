import React from 'react';
import { Component } from 'react';
import LocationList from './components/LocationList'
import './App.css';

const cities = [
  "Corrientes,ar",
  "Lima,pe",
  "Sevilla,es",
  "London,uk",
  "Texas,us",
  "Humahuaca,ar",
];

class App extends Component {

  handleSelectedLocationClick = city => {
    console.log(`handleSelectedLocationClick ${city}`);
  };  
  render(){
    return (
      <div className="App">
        <LocationList 
          cities={cities} 
          onSelectedLocation={this.handleSelectedLocationClick} 
        />
      </div>
    );
  }
}

export default App;
