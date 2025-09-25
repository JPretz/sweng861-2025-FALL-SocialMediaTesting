// src/components/Card.js
import React from 'react';
import './Card.css'; // Optional styling

function Card({ title, content }) {
  return (
    <div className="App-card">
      <h3>{title || 'Default Card Title'}</h3>
      <p>{content || 'Default card content.'}</p>
    </div>
  );
}

// Default props ensure the card always displays title and content
Card.defaultProps = {
  title: 'Default Card Title',
  content: 'Default card content.',
};

export default Card;
