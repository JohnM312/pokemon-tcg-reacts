import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../styles/Catalog.css'; // Corrected path
import cardData from '../data/pokemon.json'; // Changed path to correct json file

function Catalog() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardData);
  }, []);

  return (
    <div className="catalog">
      <h1>Catalog</h1>
      <div className="search-form">
        <label htmlFor="card-name">Card Name:</label>
        <input type="text" id="card-name" placeholder="Please enter" />

        <label htmlFor="energy-types">Energy Types:</label>
        <select id="energy-types">
          <option value="">Energy Types Menu</option>
          <option value="Electric">Electric</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          <option value="Ghost">Ghost</option>
          <option value="Psychic">Psychic</option>
          <option value="Fighting">Fighting</option>
          <option value="Dragon">Dragon</option>
        </select>

        <label htmlFor="card-types">Card Types:</label>
        <select id="card-types">
          <option value="">Select Pokémon Type</option>
          <option value="Pokemon">Pokemon</option>
          <option value="Basic">Basic</option>
          <option value="Stage 1">Stage 1</option>
          <option value="Stage 2">Stage 2</option>
          <option value="EX">EX</option>
          <option value="GX">GX</option>
          <option value="V">V</option>
          <option value="VSTAR">VSTAR</option>
          <option value="Trainer">Select Trainer - Item</option>
            <option value="Item">Item</option>
            <option value="Supporter">Supporter</option>
            <option value="Stadium">Stadium</option>
        </select>

        <button>Search</button>
      </div>

      <div className="card-grid">
        {cards.map(card => (
          <Card
            key={card._id}
            image={`/`+card.img_name}
            title={card.name}
            description={`Type: ${card.type}, HP: ${card.hp}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;