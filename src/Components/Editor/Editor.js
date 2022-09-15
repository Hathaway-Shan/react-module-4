import React from 'react';

import './Editor.css';

export default function Editor({ setTitle, setSubTitle, setBlogBody, setTextAlign, setFont }) {
  return (
    <div className="editor">
      <div className="form-control">
        <label className="label">Head</label>
        <select onChange={(e) => setFont(e.target.value)}>
          <option value="bird">{'Bird'}</option>
          <option value="dog">Dog</option>
          <option value="duck">Duck</option>
          <option value="horse">Horse</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">Middle</label>
        <select onChange={(e) => setFont(e.target.value)}>
          <option value="blue">{'Blue'}</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">Feet</label>
        <select onChange={(e) => setFont(e.target.value)}>
          <option value="blue">{'Blue'}</option>
          <option value="dog">Dog</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label">Slogans</label>
        <textarea
          name="blogBody"
          type="text"
          style={{ height: '250px' }}
          onChange={(e) => setBlogBody(e.target.value)}
        />
      </div>
    </div>
  );
}
