import React, { Component } from 'react';
import flats from '../../data/flats';
import List from './list';
import SimpleMap from './map';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <List flats={flats} />
        </div>
        <div className="map-container">
          < SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
