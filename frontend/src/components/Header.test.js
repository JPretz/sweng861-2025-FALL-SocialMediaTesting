import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders default title', () => {
    render(<Header />);
    expect(screen.getByText(/My App/i)).toBeInTheDocument();
  });

  test('renders custom title', () => {
    render(<Header title="Awesome App" />);
    expect(screen.getByText(/Awesome App/i)).toBeInTheDocument();
  });

  test('renders subtitle if provided', () => {
    render(<Header subtitle="Welcome!" />);
    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
  });

  test('does not render subtitle if not provided', () => {
    render(<Header />);
    const subtitleElement = screen.queryByText(/Welcome!/i);
    expect(subtitleElement).toBeNull();
  });
});
