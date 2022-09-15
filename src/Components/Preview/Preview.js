import React from 'react';

import './Preview.css';

export default function Preview({ head }) {
  // implement a Preview screen here
  //  Note - the HTML should have the following structure
  //  the main div should have a class of preview and the font-name prop
  //  and should have style interpolated using the alignment prop

  return (
    //add style properties to the div as objects
    <div>
      <h3>{head}</h3>
      {/* <img src="../../../public/pictures/bird-head.png"></img> */}
      <h3>Body</h3>
      <h3>Feet</h3>
    </div>
  );
}
