import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import Choice from './Choice';
import { strikes, stances } from './Stances';

function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function Choices({ onStanceSelect }) {
  const LEFT = 37;
  const RIGHT = 39;
  const ENTER = 13;
  const [selectedButton, setSelectedButton] = useState(Object.values(stances)[0].choices[0]);
  const [choices, setChoices] = useState(Object.values(stances)[0].choices);

  const selectChoice = useCallback(
    (choice) => {
      onStanceSelect(strikes[choice].result.image);
      setChoices(strikes[choice].result.choices);
      setSelectedButton(strikes[choice].result.choices[0]);
    },
    [onStanceSelect],
  );

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
          selectChoice(choices[currentIndex]);
          break;
        default:
          break;
      }
    },
    [setSelectedButton, choices, selectChoice, selectedButton],
  );

  const handleSelect = useCallback(
    (event) => {
      const choice = event.target.id;
      selectChoice(choice);
    },
    [selectChoice],
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
        <Choice
          choice={strikes[choice]}
          id={choice}
          key={choice}
          onSelect={handleSelect}
          selectedButton={selectedButton}
        />
      ))}
    </div>
  );
}

Choices.propTypes = {
  onStanceSelect: PropTypes.func.isRequired,
};
