import React, { use, useState } from 'react';
import Bottle from '../bottle/Bottle';
import './bottles.css';
const Bottles = ({bottlePromise}) => {
  // console.log(bottlePromise);
  const bottles=use(bottlePromise);
  // console.log(bottles);
  const [selectedbuy,setSelected]=useState([]);
  const handleBottle=(bottle)=>
  {
    const newSelected=[...selectedbuy,bottle];

    setSelected(newSelected);
    // console.log(selected);
    
  }
  return (
    <div className=''>
       
       <h2>Bottle Show </h2>
       <h2>Number of bottle select : {selectedbuy.length} </h2>
       <div className='grid-contrainer'>
       {
        

        bottles.map(bottle => <Bottle key={bottle.id}  handleBottle={ ()=>handleBottle(bottle)} bottle={bottle}></Bottle>)
      }


       </div>
      
      
    </div>
  );
};

export default Bottles;