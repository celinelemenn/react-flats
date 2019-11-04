import React, { Component } from 'react';
import flats from '../../data/flats';
import List from './list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <h1>left</h1>
          <List flats={flats} />
        </div>
        <div className="right-scene">
          <h1>right</h1>
        </div>
      </div>
    );
  }
}

export default App;
