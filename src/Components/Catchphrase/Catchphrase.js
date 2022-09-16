import React from 'react';
import { useState } from 'react';

import './Catchphrase.css';

export default function Catchphrase({ setSlogan }) {
  const [currentPhrase, setNewPhrase] = useState('');
  const handleSavePhrase = () => {
    setSlogan((prevState) => [currentPhrase, ...prevState]);
    setNewPhrase('');
  };

  return (
    <div>
      <label className="displayContents">
        Catchphrases!
        <input onChange={(e) => setNewPhrase(e.target.value)} />
      </label>
      <button className="submit" onClick={handleSavePhrase}>
        submit
      </button>
    </div>
  );
}
