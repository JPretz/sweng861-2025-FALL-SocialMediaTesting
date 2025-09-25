import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders title and content', () => {
    render(<Card title="Card Title" content="Card content here" />);
    expect(screen.getByText(/Card Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Card content here/i)).toBeInTheDocument();
  });

  test('renders empty content if not provided', () => {
    render(<Card title="No Content" />);
    expect(screen.getByText(/No Content/i)).toBeInTheDocument();
    const contentElement = screen.queryByText(/Card content here/i);
    expect(contentElement).toBeNull();
  });
});
