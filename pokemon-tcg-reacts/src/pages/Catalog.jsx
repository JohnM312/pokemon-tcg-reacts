import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from '../components/Card';
import '../styles/Catalog.css';

function Catalog() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]); // State for filtered results
  const [loading, setLoading] = useState(true); //Loading Screen
  const [error, setError] = useState(null); //Set to Error If There Is

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true); //Set to Loading

        try {
          const response = await axios.get('https://pokemon-tcg-node.onrender.com');

          //if (!response.ok) {
            //throw new Error(`HTTP error! status: ${response.status}`);
          //}
          const data = response.data;
          setCards(data);
          setFilteredCards(data); // Initially show all cards
        } catch (error) {
          console.error("There was a problem fetching the data:", error);
          setError(error);
        } finally {
          setLoading(false);
        }
      };
    fetchData();
  }, []);

  // Add search/filter logic here later if needed

  if (loading) return <p>Loading Houses...</p>;
    if (error) return <p>Error: {error.message}</p>;

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