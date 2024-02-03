import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../Components/Home/Home';

test('clicking "Click Here" button displays alert', () => {
  render(<Home />);
  expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
  fireEvent.click(screen.getByText('Click Here'));
  expect(screen.getByText('Hello, World')).toBeInTheDocument();
});
test('clicking "Ok" button closes alert', async() => {
      render(<Home />);
     expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Click Here'));
    expect(screen.getByText('Hello, World')).toBeInTheDocument();
    fireEvent.click(screen.queryByText('Ok'));
    await waitFor(() => {
        expect(screen.getByText('Hello, World')).toBeInTheDocument();
      });
  });

