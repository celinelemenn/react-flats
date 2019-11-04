import React from 'react';
import Flat from './flat';

const List = ({ flats }) => {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat name={flat.name} imageUrl={flat.imageUrl} price={flat.price} />) }
    </div>
  );
};

export default List;
