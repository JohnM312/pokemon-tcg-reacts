import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from '../components/Card';
import AddingForm from '../components/AddingForm'; // Import the AddingForm component
import '../styles/Catalog.css';

function Catalog() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]); // State for filtered results
  const [loading, setLoading] = useState(true); //Loading Screen
  const [error, setError] = useState(null); //Set to Error If There Is

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get('https://pokemon-tcg-node.onrender.com/api/pokemon');
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

  const handleCardAdded = (newCard) => {
    setCards([...cards, newCard]); // Update the state
    setFilteredCards([...filteredCards, newCard]); // Also update the filtered cards (if no search)
  }

  if (loading) return <p>Loading Pokemon TCG Database...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="catalog">
      <h1>Catalog</h1>
      <p className="catalog-subtitle">Trading Card Database:</p>

      {/* Top section:  AddingForm and Search Form */}
      <div className="catalog-top-section">
        <AddingForm onCardAdded={handleCardAdded} />

        <div className="search-form-container">
          <form className="search-form">
            <label htmlFor="card-name">Card Name:</label>
            <input type="text" id="card-name" placeholder="Please enter" />

            <label htmlFor="energy-types">Energy Types:</label>
            <select id="energy-types">
              <option value="">Energy Types Menu</option>
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

            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      {/* Card Results Grid */}
      <div className="card-grid">
        {filteredCards.map(card => (
          <Card
            key={card._id}
            image={"https://pokemon-tcg-node.onrender.com/api/pokemon" + card.img_name}
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