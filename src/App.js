import React from 'react';
import Choices from './Choices';
import './App.css';
import oxGuard from './images/guards/ox-guard.png';

function App() {
  return (
    <div className="App">
      <div className="battlefield">
        <img alt="Swordfighting" className="swordfighter" src={oxGuard} />
        <img
          alt="Monster"
          className="monster"
          src="https://www.psyborg.com.au/wp-content/uploads/2011/11/Illustration-Monster.jpg"
        />
      </div>
      <div className="distance">3.4m</div>
      <Choices />
    </div>
  );
}

export default App;
