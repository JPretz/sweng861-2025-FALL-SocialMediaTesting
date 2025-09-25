// src/components/Button.js
import React from 'react';
import './Button.css'; // Optional styling

function Button({ label, onClick }) {
  return (
    <button className="App-button" type="button" onClick={onClick}>
      {label || 'Click Me'}
    </button>
  );
}

// Default props ensure the button has a label even if none is passed
Button.defaultProps = {
  label: 'Click Me',
  onClick: () => {}, // default no-op function
};

export default Button;
