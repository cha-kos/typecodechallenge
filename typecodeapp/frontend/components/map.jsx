// import React from "react";
// import AirportSearch from "./airport-search";
//
// var map;
// var flightPath;
// var airplaneIcon ={
//     url:'http://maps.google.com/mapfiles/kml/shapes/airports.png', // url
//     scaledSize: new google.maps.Size(30, 30)
//   };
// export default class Map extends React.Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//       origin: null,
//       destination: null
//     };
//     }
//
//   componentDidMount() {
//       let initMap = () => {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 39.024690, lng: -96.076979},
//           zoom: 4
//         });
//       };
//       initMap();
//     }
//
//   placeMarker(property){
//     let location = property.toLowerCase();
//     if (this.state[location] && flightPath) {
//       this.state[location].setMap(null);
//       flightPath.setMap(null);
//     } else if (this.state[location]) {
//       this.state[location].setMap(null);
//     }
//     this.state[location] = new google.maps.Marker({
//          position: {lat: this.props[location].lat, lng: this.props[location].lon},
//          map: map,
//          title: `${location}`,
//          icon: airplaneIcon
//        });
//   }
//
//   drawPath(){
//     flightPath = new google.maps.Polyline({
//       path: [
//           new google.maps.LatLng(this.props.origin.lat, this.props.origin.lon),
//           new google.maps.LatLng(this.props.destination.lat, this.props.destination.lon)
//       ],
//       strokeColor: "#FF0000",
//       strokeOpacity: 0.6,
//       strokeWeight: 4,
//       map: map
//     });
//   }
//
//   render(){
//     return (
//       <div id="map"></div>
//     );
//   }
// }
