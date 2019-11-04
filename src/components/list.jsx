import React from 'react';
import Flat from './flat';

const List = ({ flats }) => {
  return (
      flats.map(flat => <Flat name={flat.name} imageUrl={flat.imageUrl} price={flat.price} />)
  );
};

export default List;
