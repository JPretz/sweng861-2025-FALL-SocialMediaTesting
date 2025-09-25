import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the header with title', () => {
    render(<App />);
    const header = screen.getByRole('banner'); // selects <header>
    expect(within(header).getByText(/My Homework App/i)).toBeInTheDocument();
  });

  test('renders the subtitle in the header', () => {
    render(<App />);
    const header = screen.getByRole('banner');
    expect(within(header).getByText(/Testing Components in React/i)).toBeInTheDocument();
  });

  test('renders the interactive button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /Click Me/i })).toBeInTheDocument();
  });

  test('renders all cards', () => {
    render(<App />);
    expect(screen.getByText(/Card 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Card 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Card 3/i)).toBeInTheDocument();
  });

  test('renders the footer text', () => {
    render(<App />);
    const footer = screen.getByRole('contentinfo'); // selects <footer>
    expect(within(footer).getByText(/© 2025 My Homework App/i)).toBeInTheDocument();
  });

  test('handles button click', () => {
    // mock window.alert before firing the click
    window.alert = jest.fn();
    render(<App />);
    const button = screen.getByRole('button', { name: /Click Me/i });
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('Button clicked!');
  });
});

