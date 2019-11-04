import React from 'react';

const Flat = (props) => {
  return (
    <div>
      {props.name}
      <img src={props.imageUrl} alt=""/>
      {props.price}
    </div>
  );
};

export default Flat;
