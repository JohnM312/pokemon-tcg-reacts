// Updated Catalog.jsx
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../styles/Catalog.css';
import cardData from '../data/pokemon.json';

function Catalog() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]); // State for filtered results

  useEffect(() => {
    // Simulate fetching data - replace with actual fetch if needed
    setCards(cardData);
    setFilteredCards(cardData); // Initially show all cards
  }, []);

  // Add search/filter logic here later if needed

  return (
    <div className="catalog">
      <h1>Catalog</h1>
      <p className="catalog-subtitle">Trading Card Database:</p>

      {/* Top section: Search Form & Featured Card */}
      <div className="catalog-top-section">
        <div className="search-form-container"> {/* Wrapper for form */}
          <form className="search-form"> {/* Use form tag */}
            <label htmlFor="card-name">Card Name:</label>
            <input type="text" id="card-name" placeholder="Please enter" />

            <label htmlFor="energy-types">Energy Types:</label>
            <select id="energy-types">
              <option value="">Energy Types Menu</option>
              {/* Add options dynamically if possible */}
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
            <option value="Pokemon">Pokemon</option>
            <option value="Basic">Basic</option>
            <option value="Stage 1">Stage 1</option>
            <option value="Stage 2">Stage 2</option>
            <option value="EX">EX</option>
            <option value="GX">GX</option>
            <option value="V">V</option>
            <option value="VSTAR">VSTAR</option>
            </select>
            
            <label htmlFor="trainer-types">Trainer Types:</label>
            <select id="trainer-types">
               <option value="">Select Trainer - Item</option>
               <option value="Item">Item</option>
               <option value="Supporter">Supporter</option>
               <option value="Stadium">Stadium</option>
            </select> 

            <button type="submit">Search</button> {/* Use type="submit" */}
          </form>
        </div>

        <div className="featured-card-display bordered-section"> {/* Featured Card Area */}
            {/* Update image path if needed */}
            <img src={process.env.PUBLIC_URL + "/images/Zapdos EX.jpg"} alt="Zapdos EX" />
            </div>
      </div>

      {/* Card Results Grid */}
      <div className="card-grid">
        {filteredCards.map(card => (
          <Card
            key={card._id}
            image={process.env.PUBLIC_URL + "/" + card.img_name} // Adjusted path
            title={card.name}
            description={`
              Type: ${card.type},
              HP: ${card.hp},
              Abilities: ${card.abilities ? card.abilities.join(', ') : 'N/A'},
              Rarity: ${card.rarity},
              Set: ${card.set}
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;