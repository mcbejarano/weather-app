import React from 'react';
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

function App() {
  const handleWeatherLocationClick = city => {
    console.log("handleWeatherLocationClick");
  };  
  return (
    <div className="App">
      <LocationList 
        cities={cities} 
        onSelectLocation={handleWeatherLocationClick} 
      />
    </div>
  );
}

export default App;
