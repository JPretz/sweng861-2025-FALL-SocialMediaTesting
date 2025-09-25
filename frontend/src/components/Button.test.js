import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders default label', () => {
    render(<Button />);
    expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
  });

  test('renders custom label', () => {
    render(<Button label="Submit" />);
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  test('fires onClick event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Click Me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
