import React, { use } from 'react';
import Bottle from '../bottle/bottle';
// 
const Bottles = ({bottlePromise}) => {
  // console.log(bottlePromise);
  const bottles=use(bottlePromise);
  // console.log(bottles);
  return (
    <div>
      {
        bottles.map(bottle => <Bottle bottle={bottle}></Bottle>)
      }

      
    </div>
  );
};

export default Bottles;