import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders some text', () => {
  render(<App />);
  const text = screen.getByText(/3\.4 m/i);
  expect(text).toBeInTheDocument();
});
