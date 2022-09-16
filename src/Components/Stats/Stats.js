import React from 'react';
import './Stats.css';

export default function Stats({ slogan }) {
  return (
    <div className="preview">
      <h3>catchphrases</h3>
      <ul>
        {slogan.map((slogan) => (
          <li key={slogan}>{slogan}</li>
        ))}
      </ul>
    </div>
  );
}
