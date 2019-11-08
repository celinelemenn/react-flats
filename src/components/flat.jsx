import React, { Component } from 'react';

// const divStyle = (props) => {
//   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${props.imageUrl}`
// };

class Flat extends Component {
  handleClick = () => {
    const { flat, updateMarker } = this.props;
    console.log(updateMarker);
    updateMarker(flat.lat, flat.lng);
  };

  render() {
    const { flat } = this.props;
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${flat.imageUrl}')` }} onClick={this.handleClick}>
        <div className="card-category">{flat.price}</div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}

export default Flat;
