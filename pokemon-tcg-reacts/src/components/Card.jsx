import React from 'react';
import '../styles/Card.css';

function Card({ image, title, description }) {
  const descriptionLines = description.split(',\n');  // Split on comma AND newline
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      {descriptionLines.map((line, index) => (
        <p key={index}>{line.trim()}</p> // Trim whitespace
      ))}
    </div>
  );
}

export default Card;