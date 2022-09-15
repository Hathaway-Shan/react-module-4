import React from 'react';

import './Preview.css';

export default function Preview({ head, body }) {
  // implement a Preview screen here
  //  Note - the HTML should have the following structure
  //  the main div should have a class of preview and the font-name prop
  //  and should have style interpolated using the alignment prop

  return (
    //add style properties to the div as objects
    <div className="preview">
      <img src={`${process.env.PUBLIC_URL}/pictures/${head}-head.png`} />
      <img src={`${process.env.PUBLIC_URL}/pictures/${body}-middle.png`} />
      <h3>Feet</h3>
    </div>
  );
}
