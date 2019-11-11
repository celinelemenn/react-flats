import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Flat from './flat';

// import setFlats from '../actions/index';

const List = ({ flats }) => {
  // UNSAFE_componentWillMount() {
  //   debugger;
  //   this.props.setFlats();
  // }
  return (
    <div className="flat-list">
      { flats.map((flat) => {
        return (
          // <Flat flat={flat} key={flat.name} updateMarker={updateMarker} />
          <Flat flat={flat} key={flat.name} />
        );
      })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setFlats },
//     dispatch
//   );
// }

export default connect(mapStateToProps)(List);
