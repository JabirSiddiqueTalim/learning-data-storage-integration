import React, {useState } from 'react';
import './bottle.css';

const Bottle = ({bottle, handleBottle}) => {
  console.log(bottle);
  const [buy,setBuy]=useState(false);
  const clickBuyBtn=()=>
  {
    setBuy(!buy);
    handleBottle(bottle);



  }
  return (
  
     

      <div className={`card && ${buy && 'buy-card'}`}>
        <h3>Bottle : {bottle.id}</h3>
        <h4>Bottle Name : {bottle.name}</h4>
        <h4>Bottle Type : {bottle.type}</h4>
        <img className="bottle-img"src={bottle.image} alt="" />
        <h4>Bottle price : {bottle.price}</h4>
        <button onClick={clickBuyBtn}>{buy? "Buy" : "Not Buy"}</button>
        

      </div>

  

  );
};

export default Bottle;