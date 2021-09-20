import React, { useState } from 'react';
import Choices from './Choices';
import './App.css';
import oxGuard from './images/guards/ox-guard.png';

function App() {
  const [stance, setStance] = useState(oxGuard);
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
      <div className="distance">3.4m</div>
      <Choices onStanceSelect={setStance} />
    </div>
  );
}

export default App;
