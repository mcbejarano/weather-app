import React from 'react';
import { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList'
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';

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
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
                <div className="red"></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
                <div className="blue"></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
                <div className="green"></div>
            </Col>
          </Row>
        </Grid>
      

        {/* <div className="App">
              <LocationList 
                cities={cities} 
                onSelectedLocation={this.handleSelectedLocationClick} 
              />
            </div>*/
        } 
      </MuiThemeProvider>
    );
  }
}

export default App;
