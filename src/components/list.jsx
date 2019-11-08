import React from 'react';
import Flat from './flat';

const List = ({ flats, updateMarker }) => {
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (
          <Flat flat={flat} key={flat.name} updateMarker={updateMarker} />
        );
      })}
    </div>
  );
};

export default List;
