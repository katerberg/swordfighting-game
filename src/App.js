import React, { useState, useCallback } from 'react';
import Choices from './Choices';
import './App.css';
import Enemy from './Enemy';
import { stances } from './Stances';

const ENEMY_STARTING_HP = 100;
function App() {
  const [stance, setStance] = useState(Object.values(stances)[0].image);
  const [enemyHp, setEnemyHp] = useState(ENEMY_STARTING_HP);
  const [distance] = useState('3.4');

  const handleAttack = useCallback(
    (damage) => {
      setEnemyHp(enemyHp - damage > 0 ? enemyHp - damage : 0);
    },
    [enemyHp],
  );

  return (
    <div className="App">
      <div className="battlefield">
        <img alt="Swordfighting" className="swordfighter" src={stance} />
        <Enemy hp={enemyHp} totalHp={ENEMY_STARTING_HP} />
      </div>
      <div className="distance">{`${distance}m`}</div>
      <Choices onAttack={handleAttack} onStanceSelect={setStance} />
    </div>
  );
}

export default App;
