import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Main.css';

export default function Main() {
  // add useState calls here for top, middle, feet, and slogans
  const [head, setHead] = useState('bird');
  const [body, setBody] = useState('blue');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview head={head} body={body} />
      <Editor head={head} setHead={setHead} body={body} setBody={setBody} />
    </main>
  );
}
