import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders document', () => {
  render(<App />);
  expect( screen.getByText("JANE APPLESED") ).toBeInTheDocument();
  expect( screen.getByText("0000 0000 0000 0000") ).toBeInTheDocument();
  expect( screen.getByText("00/00") ).toBeInTheDocument();
  expect( screen.getByText("CARDHOLDER NAME") ).toBeInTheDocument();
  expect( screen.getByText("CARD NUMBER") ).toBeInTheDocument();
  expect( screen.getByText("EXP. DATE (MM/YY)") ).toBeInTheDocument();
  expect( screen.getByText("CVC") ).toBeInTheDocument();
});
