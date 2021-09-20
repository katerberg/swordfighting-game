import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';

export default function Choice({ selectedButton, text }) {
  return <Button variant={selectedButton === text ? 'contained' : 'outlined'}>{text}</Button>;
}

Choice.propTypes = {
  selectedButton: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
