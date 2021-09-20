import React, { useState, useEffect, useCallback } from 'react';
import Choice from './Choice';

const choices = ['Attack', 'Dodge', 'Move'];
function mod(n, m) {
  return ((n % m) + m) % m;
}

function Choices() {
  const LEFT = 37;
  const RIGHT = 39;
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
        default:
          break;
      }
    },
    [setSelectedButton, selectedButton],
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

export default Choices;
