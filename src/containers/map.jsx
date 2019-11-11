import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

// import Marker from '../components/marker';

// const SimpleMap = ({ mapCenter, selectedFlat }) => {

const SimpleMap = ({ selectedFlat }) => {
  let marker = null;
  let center = { lat: 48.856614, lng: 2.352222 };

  if (selectedFlat !== null) {
    center = {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
    marker = (
      <div
        className="marker"
        lat={selectedFlat.lat}
        lng={selectedFlat.lng}
      />
    );
  }
  return (
    <div className="map-container">
      <GoogleMapReact
        // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        center={center}
        defaultZoom={11}
      >
        { marker }

      </GoogleMapReact>
    </div>
  );
};

const mapStateToProps = (state) => {
  // debugger;
  return {
    selectedFlat: state.selectedFlat
  };
};

export default connect(mapStateToProps)(SimpleMap);
