import React from 'react';
import Flat from './flat';

const List = ({ flats, updateMarker }) => {
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (
          <Flat
            name={flat.name}
            imageUrl={flat.imageUrl}
            key={flat.name}
            price={flat.price}
            lat={flat.lat}
            long={flat.lng}
            updateMarker={updateMarker}
          />
        );
      })}
    </div>
  );
};

export default List;
