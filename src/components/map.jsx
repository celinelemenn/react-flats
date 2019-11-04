import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


  // constructor(props) {
  //   super(props);
  //   console.log(this.props.selectedFlat)
  // }

  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.selectedFlat.lat}
            lng={this.props.selectedFlat.long}
            // text="HERE"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
