import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from '../components/Card';
import AddingForm from '../components/AddingForm';
import '../styles/Catalog.css';

function Catalog() {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingCardId, setEditingCardId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        type: '',
        hp: '',
        abilities: '',
        rarity: '',
        set: ''
    });
    const [message, setMessage] = useState(""); // State for displaying messages

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3001/api/pokemon');
                console.log("API Response:", response);
                console.log("API Response Data:", response.data);

                await setCards(response.data); // Update cards state
                console.log("Cards State:", cards);

                await setFilteredCards(response.data); // Update filteredCards state
                console.log("FilteredCards State:", filteredCards);

            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
                setMessage("Failed to load cards.");
            } finally {
                setLoading(false);
            };
        }
        fetchData();
    }, []);

    const handleCardAdded = (newCard) => {
        setCards([...cards, newCard]);
        setFilteredCards([...filteredCards, newCard]);
    };

    const handleEditClick = (card) => {
        setEditingCardId(card._id);
        setEditFormData({
            name: card.name,
            type: card.type,
            hp: card.hp,
            abilities: Array.isArray(card.abilities) ? card.abilities.join(',') : card.abilities,
            rarity: card.rarity,
            set: card.set
        });
    };

    const handleEditFormChange = (event) => {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        });
    };

    const handleEditFormSubmit = async (cardId) => {
        try {
            const response = await axios.put(`http://localhost:3001/api/pokemon${cardId}`, {
                ...editFormData,
                abilities: editFormData.abilities.split(',')
            });

            console.log("handleEditFormSubmit data", response.data);

            if (response.status === 200) {
                setMessage('Card updated successfully!');

                // Update state variables
                await setCards(cards.map(card => card._id === cardId ? response.data.card : card));
                console.log("Updated Cards State after edit:", cards);  // AFTER setting state

                await setFilteredCards(filteredCards.map(card => card._id === cardId ? response.data.card : card));
                console.log("Updated FilteredCard State after edit:", filteredCards);  // AFTER setting state

                setEditingCardId(null); // Exit editing mode
            } else {
                setMessage(`Error updating card: ${response.data.message}`);
            }
        } catch (error) {
            setMessage('Error: Could not connect to the server.');
            console.error('There was an error!', error);
        }
    };

    const handleDeleteClick = async (cardId) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/pokemon${cardId}`);
            console.log("handleDeleteClick data", response);
            if (response.status === 200) {
                setMessage('Card deleted successfully!');

                await setCards(cards.filter(card => card._id !== cardId));
                console.log("Updated Cards State after delete:", cards);  // AFTER setting state

                await setFilteredCards(filteredCards.filter(card => card._id !== cardId));
                console.log("Updated FilteredCards State after delete:", filteredCards);  // AFTER setting state
            } else {
                setMessage(`Error: ${response.data.message}`);
            }
        } catch (error) {
            setMessage('Error: Could not connect to the server.');
            console.error('There was an error deleting the card!', error);
        }
    };

    if (loading) return <p>Loading Pokemon Database...</p>;
    if (error) return <p>Error: {message}</p>; // Display message if there's an error

    return (
        <div className="catalog">
            <h1>Catalog</h1>
            <p className="catalog-subtitle">Trading Card Database:</p>
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

            <div className="card-grid">
                {filteredCards.map(card => {
                   console.log("Card Object in Map:", card); // LOGGING

                   return(
                    <div key={card._id} className="card-container">
                        <Card
                            image={`http://localhost:3001/api/pokemon${card.img_name}`}
                            title={card.name}
                            description={`
                                Type: ${card.type},
                                HP: ${card.hp},
                                Abilities: ${Array.isArray(card.abilities) ? card.abilities.join(', ') : card.abilities},
                                Rarity: ${card.rarity},
                                Set: ${card.set}
                            `}
                        />
                           {editingCardId === card._id ? (
                            <div className="edit-form">
                                <input type="text" name="name" value={editFormData.name} onChange={handleEditFormChange} placeholder="Name" />
                                <input type="text" name="type" value={editFormData.type} onChange={handleEditFormChange} placeholder="Type" />
                                <input type="number" name="hp" value={editFormData.hp} onChange={handleEditFormChange} placeholder="HP" />
                                <input type="text" name="abilities" value={editFormData.abilities} onChange={handleEditFormChange} placeholder="Abilities (comma-separated)" />
                                <input type="text" name="rarity" value={editFormData.rarity} onChange={handleEditFormChange} placeholder="Rarity" />
                                <input type="text" name="set" value={editFormData.set} onChange={handleEditFormChange} placeholder="Set" />
                                <button type="button" onClick={() => handleEditFormSubmit(card._id)}>Update</button>
                            </div>
                        ) : (
                            <div className="edit-actions">
                                <button onClick={() => handleEditClick(card)}>Edit</button>
                                <button onClick={() => handleDeleteClick(card._id)}>Delete</button>
                            </div>
                        )}
                    </div>
                   )
                })}
            </div>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default Catalog;