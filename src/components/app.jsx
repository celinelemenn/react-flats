import React, { Component } from 'react';
import flats from '../../data/flats';
import List from './list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <List flats={flats} />
        </div>
        <div className="map-container">
          <h1>right</h1>
        </div>
      </div>
    );
  }
}

export default App;
