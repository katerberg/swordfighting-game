import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { strikes } from './Stances';

export default function Choice({ id, onSelect, selectedButton, choice }) {
  return (
    <Button
      id={id}
      onClick={onSelect}
      variant={strikes[selectedButton].text === choice.text ? 'contained' : 'outlined'}
    >
      {choice.text}
    </Button>
  );
}

Choice.propTypes = {
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  selectedButton: PropTypes.string.isRequired,
  choice: PropTypes.shape({ text: PropTypes.string.isRequired }).isRequired,
};
