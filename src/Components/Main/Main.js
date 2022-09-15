import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Main.css';

export default function Main() {
  // add useState calls here for top, middle, feet, and slogans
  const [head, setHead] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview head={head} />
      <Editor head={head} setHead={setHead} />
    </main>
  );
}
