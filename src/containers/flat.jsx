import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedFlat } from '../../src/actions/index.js';
// const divStyle = (props) => {
//   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${props.imageUrl}`
// };

class Flat extends Component {
  handleClick = () => {
    this.props.setSelectedFlat(this.props.flat);
    // console.log(this.props);
    // const { flat, updateMarker } = this.props;
    // console.log(updateMarker);
    // updateMarker(flat.lat, flat.lng);

    // props.selectedFlat(this.props.flat)
  };


  render() {
    const { flat } = this.props;

    let classList = "card";
    // debugger;
    if (this.props.selectedFlat === flat) {
      classList += " selected";
    }

    return (

      <div className={classList} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${flat.imageUrl}')` }} onClick={this.handleClick}>
        <div className="card-category">{flat.price}</div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedFlat: state.selectedFlat
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setSelectedFlat }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
