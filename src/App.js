import React, { useState } from 'react';
import Choices from './Choices';
import './App.css';
import { stances } from './Stances';

function App() {
  const [stance, setStance] = useState(Object.values(stances)[0].image);
  const [distance] = useState('3.4');
  return (
    <div className="App">
      <div className="battlefield">
        <img alt="Swordfighting" className="swordfighter" src={stance} />
        <img
          alt="Monster"
          className="monster"
          src="https://www.psyborg.com.au/wp-content/uploads/2011/11/Illustration-Monster.jpg"
        />
      </div>
      <div className="distance">{`${distance}m`}</div>
      <Choices onStanceSelect={setStance} />
    </div>
  );
}

export default App;
