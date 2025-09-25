// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Optional styling

function Footer({ text }) {
  return (
    <footer className="App-footer">
      <p>{text || '© 2025 My App'}</p>
    </footer>
  );
}

// Default props ensure the footer always displays text
Footer.defaultProps = {
  text: '© 2025 My App',
};

export default Footer;
