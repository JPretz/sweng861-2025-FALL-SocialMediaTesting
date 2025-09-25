// src/components/Header.js
import React from 'react';
import './Header.css'; // Optional: for styling

function Header({ title, subtitle }) {
  return (
    <header className="app-header">
      {/* Use default text if title prop is missing */}
      <h1>{title || 'My App'}</h1>
      {/* Render subtitle only if provided */}
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
}

// Default props ensure title shows even if not passed
Header.defaultProps = {
  title: 'My App',
  subtitle: '', // Empty subtitle by default
};

export default Header;
