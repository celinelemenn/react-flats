import React, { Component } from 'react';
// import flats from '../../data/flats';
import List from '../containers/list';
import SimpleMap from '../containers/map';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedFlat: { lat: 59.955413, long: 30.337844 },
  //     mapCenter: { lat: 59.95, lng: 30.33 }
  //   };
  // }

  // updateMarker = (lat, long) => {
  //   this.setState({
  //     selectedFlat: { lat: lat, long: long },
  //     mapCenter: { lat: lat, long: long }
  //   });
  // }


  render() {
    return (
      <div>
        <List
          // flats={flats}
          // updateMarker={this.updateMarker}
        />
        <SimpleMap
          // selectedFlat={this.state.selectedFlat}
          // mapCenter={this.state.mapCenter}
        />
      </div>
    );
  }
}

export default App;
