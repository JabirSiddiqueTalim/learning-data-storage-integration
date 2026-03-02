import React from 'react';
import './bottle.css';

const Bottle = (bottle) => {
  console.log(bottle)
  return (
    <div>
     

      <div className='card '>
        <h3>Bottle : {bottle.bottle.id}</h3>
        <img className="bottle-img"src={bottle.bottle.image} alt="" />

      </div>

    </div>

  );
};

export default Bottle;