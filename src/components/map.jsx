import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


const SimpleMap = (props) => {

  return (
    // Important! Always set the container height explicitly
    <div className="map-container" >
      <GoogleMapReact
        // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={props.mapCenter}
        defaultZoom={11}
      >
        <Marker
          lat={props.selectedFlat.lat}
          lng={props.selectedFlat.long}
          // text="HERE"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
