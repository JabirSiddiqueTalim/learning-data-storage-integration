import React from 'react';

const Bottle = (bottle) => {
  console.log(bottle)
  return (
    <div>
      <h3>Bottle : {bottle.bottle.id}</h3>

    </div>
  );
};

export default Bottle;