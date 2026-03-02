import React, { use } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css';
const Bottles = ({bottlePromise}) => {
  // console.log(bottlePromise);
  const bottles=use(bottlePromise);
  // console.log(bottles);
  return (
    <div className=''>
       <h2>Bottle Show </h2>
       <div className='grid-contrainer'>
       {
        

        bottles.map(bottle => <Bottle bottle={bottle}></Bottle>)
      }


       </div>
      
      
    </div>
  );
};

export default Bottles;