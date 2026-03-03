import React, { use, useState } from 'react';
import Bottle from '../bottle/Bottle';
import './bottles.css';
const Bottles = ({ bottlePromise }) => {
  // console.log(bottlePromise);
  const bottles = use(bottlePromise);
  // console.log(bottles);
  const [selectedbuy, setSelected] = useState([]);
  const handleBottle = (bottle) => {

    const itemSelected = selectedbuy.find(item => item.id === bottle.id);
  
    if (!itemSelected) {
      const newSelected = [...selectedbuy, bottle];
      setSelected(newSelected);
    } else {
      const newSelected = selectedbuy.filter(item => item.id !== bottle.id);
      setSelected(newSelected);
    }
  };
  return (
    <div className=''>
      <h2>Bottle Show </h2>
      <h2>Number of bottle select : {selectedbuy.length} </h2>
      <div className='grid-contrainer'>
        {
          bottles.map(bottle => <Bottle key={bottle.id} handleBottle={() => handleBottle(bottle)} bottle={bottle}></Bottle>)
        }
      </div>
    </div>
  );
};

export default Bottles;