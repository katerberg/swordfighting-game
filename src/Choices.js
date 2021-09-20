import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import Choice from './Choice';
import oxGuard from './images/guards/ox-guard.png';
import roofGuard from './images/guards/roof-guard.png';

const choices = ['Attack', 'Dodge', 'Move'];
function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function Choices({ onStanceSelect }) {
  const LEFT = 37;
  const RIGHT = 39;
  const ENTER = 13;
  const [selectedButton, setSelectedButton] = useState('Attack');
  const handleKeyDown = useCallback(
    (event) => {
      const currentIndex = choices.indexOf(selectedButton);
      switch (event.keyCode) {
        case LEFT:
          setSelectedButton(choices[mod(currentIndex - 1, choices.length)]);
          break;
        case RIGHT:
          setSelectedButton(choices[mod(currentIndex + 1, choices.length)]);
          break;
        case ENTER:
          if (currentIndex === choices.indexOf('Attack')) {
            onStanceSelect(oxGuard);
          } else {
            onStanceSelect(roofGuard);
          }
          break;
        default:
          break;
      }
    },
    [setSelectedButton, selectedButton, onStanceSelect],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="choices">
      {choices.map((choice) => (
        <Choice key={choice} selectedButton={selectedButton} text={choice} />
      ))}
    </div>
  );
}

Choices.propTypes = {
  onStanceSelect: PropTypes.func.isRequired,
};
