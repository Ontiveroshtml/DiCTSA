import React, { Component } from 'react';
import "./Ubicacion.css";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';



export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // for google map places autocomplete
      address: '',

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 24.031011749608545,
        lng: -104.672126411520975
      }
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);

        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));

  };

  render() {
    return (

      <>
        <useEffect />
        <section className='ubicacion' >
        <h1>Nuestra ubicación</h1>


        <div id='Ubicacion' className='googleMaps'  >
          <Map 
            style={{ width: "90%", height: "70%", backgroundColor: "#00000", marginLeft: "5%" }}
            google={this.props.google}
            initialCenter={{
              lat: this.state.mapCenter.lat, 
              lng: this.state.mapCenter.lng
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }} >

            <Marker
              position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
              }} />
          </Map>
        </div>
        </section>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA2c6qaPcmQPRBnKMGZN4unrftssqfO-VU')
})(MapContainer)

