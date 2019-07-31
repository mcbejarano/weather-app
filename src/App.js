import React from 'react';
import { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider } from '@material-ui/core';
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
       <Grid>
         <Row>
          <AppBar position="sticky">
            <Toolbar> 
              <Typography variant="title" color="inherit">
                  Weather App
              </Typography>
            </Toolbar>
          </AppBar>
         </Row>
         <Row>  
           <Col xs={12} md={6}>
              <LocationList 
                cities={cities} 
                onSelectedLocation={this.handleSelectedLocationClick} 
              />
           </Col>
           <Col xs={12} md={6}>
             <Paper elevation={10}>
                <div className="details" >
                
                </div>
             </Paper>
              
           </Col>

         </Row>
              
       </Grid>
    );
  }
}

export default App;
