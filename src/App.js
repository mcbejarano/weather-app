import React from 'react';
import LocationList from './components/LocationList'
import './App.css';

const cities = [
  "Corrientes,ar",
  "Lima,pe",
  "Sevilla,es",
  "London,uk",
  "Texas,us",
];

function App() {
  return (
    <div className="App">
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
