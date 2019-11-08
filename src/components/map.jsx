import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


const SimpleMap = ({ mapCenter, selectedFlat }) => {
  console.log(mapCenter);
  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <GoogleMapReact
        // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={mapCenter}
        defaultZoom={11}
      >
        <Marker
          lat={selectedFlat.lat}
          lng={selectedFlat.long}
          // text="HERE"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
