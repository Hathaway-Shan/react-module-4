import React from 'react';

import './Editor.css';

export default function Editor({ setHead, setBody, setFeet }) {
  return (
    <div className="editor">
      <div className="form-control">
        <label className="label">Head</label>
        <select onChange={(e) => setHead(e.target.value)}>
          <option value="bird">{'Bird'}</option>
          <option value="dog">Dog</option>
          <option value="duck">Duck</option>
          <option value="horse">Horse</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">Middle</label>
        <select onChange={(e) => setBody(e.target.value)}>
          <option value="blue">{'Blue'}</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">Feet</label>
        <select onChange={(e) => setFeet(e.target.value)}>
          <option value="blue">{'Blue'}</option>
          <option value="dog">Dog</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
      </div>
    </div>
  );
}
