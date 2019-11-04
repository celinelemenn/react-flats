import React, { Component } from 'react';

// const divStyle = (props) => {
//   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${props.imageUrl}`
// };

class Flat extends Component {
  handleClick = () => {
    // console.log(this.props);
    this.props.updateMarker(this.props.lat, this.props.long);
  };

  render() {
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.imageUrl}')` }} onClick={this.handleClick}>
        <div className="card-category">{this.props.price}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}

export default Flat;
