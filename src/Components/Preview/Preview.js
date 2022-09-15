import React from 'react';

import './Preview.css';

export default function Preview({ title, subTitle, blogBody, textAlign, font }) {
  // implement a Preview screen here
  //  Note - the HTML should have the following structure
  //  the main div should have a class of preview and the font-name prop
  //  and should have style interpolated using the alignment prop

  return (
    //add style properties to the div as objects
    <div>
      <h3>Head</h3>
      <h3>Body</h3>
      <h3>Feet</h3>
    </div>
  );
}
