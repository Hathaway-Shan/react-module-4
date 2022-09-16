import React from 'react';
import './Stats.css';

export default function Stats({ headChanges, middleChanges, feetChanges, slogan }) {
  return (
    <div className="preview">
      <p>
        head has been changed: {headChanges} times
        <br></br>
        middle has been changed: {middleChanges} times
        <br></br>
        legs has been changed: {feetChanges} times
        <br></br>
      </p>

      <h3>catchphrases</h3>
      <ul>
        {slogan.map((slogan) => (
          <li key={slogan}>{slogan}</li>
        ))}
      </ul>
    </div>
  );
}
