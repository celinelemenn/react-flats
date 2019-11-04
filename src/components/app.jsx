import React, { Component } from 'react';
import flats from '../../data/flats';
import List from './list';
import SimpleMap from './map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: { lat: 59.955413, long: 30.337844 }
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <List flats={flats} />
        </div>
        <div className="map-container">
          <SimpleMap selectedFlat={this.state.selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
