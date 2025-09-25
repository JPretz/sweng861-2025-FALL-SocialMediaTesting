import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders default text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 My App/i)).toBeInTheDocument();
  });

  test('renders custom text', () => {
    render(<Footer text="Custom Footer" />);
    expect(screen.getByText(/Custom Footer/i)).toBeInTheDocument();
  });
});
