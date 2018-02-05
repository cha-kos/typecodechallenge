import React from "react";
import AirportSearch from "./airport-search";
import Map from "./map";

export default class DistanceCalculator extends React.Component {
  constructor() {
    super();
     this.state = {
       origin: null,
       destination: null,
       distance : null,
       distanceText: " "
     };

     this.calculateDistance = this.calculateDistance.bind(this);
  }

// Update the origin or destination airport information for calculation
  updateAirport(property, airport) {
    return () => {
      this.setState({ [property.toLowerCase()] : airport}, () => this.refs.map.placeMarker(property));
    };
  }

// Calculate distance between origin and destination based on latitude and longitude
  calculateDistance(){
    if (this.state.destination && this.state.origin){
          const lat1 = this.state.origin.lat;
          const lon1 = this.state.origin.lon;
          const lat2 = this.state.destination.lat;
          const lon2 = this.state.destination.lon;

        	var radlat1 = Math.PI * lat1/180;
        	var radlat2 = Math.PI * lat2/180;
        	var theta = lon1-lon2;
        	var radtheta = Math.PI * theta/180;
        	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        	dist = Math.acos(dist);
        	dist = dist * 180/Math.PI;
        	dist = dist * 60 * 1.1515;
        	this.setState({distance : Math.floor(dist)}, () => {
              this.setState({"distanceText": `Total Distance: ${this.state.distance} Nautical Miles`}, () => this.refs.map.drawPath());
              });
        } else {
          this.setState({"distanceText": "Error: Please choose a valid Origin and Destination"});
      }
  }


  render(){
    return(
      <div className='calculator-map-container'>
        <div className='calculator-body'>
            <div className="text">From</div>
            <AirportSearch type="Origin" updateAirport={this.updateAirport.bind(this)}/>
            <div className="text">To</div>
            <AirportSearch type="Destination" updateAirport={this.updateAirport.bind(this)}/>
          <button className="calculator-button" onClick={this.calculateDistance}>Calculate Distance</button>
        </div>
        <div className="distance-text">{this.state.distanceText}</div>
      </div>
    );
  }
}

// <Map {...this.state} ref="map"/>
