import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import Catchphrase from '../Catchphrase/Catchphrase';
import Stats from '../Stats/Stats';

import './Main.css';

export default function Main() {
  // add useState calls here for top, middle, feet, and slogans
  const [head, setHead] = useState('bird');
  const [body, setBody] = useState('blue');
  const [feet, setFeet] = useState('blue');
  const [slogan, setSlogan] = useState([]);
  const [headChanges, setHeadChanges] = useState(0);
  const [middleChanges, setMiddleChanges] = useState(0);
  const [feetChanges, setFeetChanges] = useState(0);

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <div>
        <Preview head={head} body={body} feet={feet} slogan={slogan} />
        <Stats
          slogan={slogan}
          headChanges={headChanges}
          middleChanges={middleChanges}
          feetChanges={feetChanges}
          setHeadChanges={setHeadChanges}
          setMiddleChanges={setMiddleChanges}
          setFeetChanges={setFeetChanges}
        />
      </div>

      <div>
        <Editor
          head={head}
          setHead={setHead}
          body={body}
          setBody={setBody}
          feet={feet}
          setFeet={setFeet}
          setHeadChanges={setHeadChanges}
          setMiddleChanges={setMiddleChanges}
          setFeetChanges={setFeetChanges}
        />
        <Catchphrase setSlogan={setSlogan} />
      </div>
    </main>
  );
}
