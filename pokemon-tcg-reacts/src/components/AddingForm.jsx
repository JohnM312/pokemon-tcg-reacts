import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddingForm.css'; // Make sure to create this CSS file

function AddingForm({ onCardAdded }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null); // Change from img_name to image
  const [type, setType] = useState('');
  const [hp, setHp] = useState('');
  const [abilities, setAbilities] = useState('');
  const [rarity, setRarity] = useState('');
  const [set, setSet] = useState('');
  const [message, setMessage] = useState(''); // For success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Sending....');

    const formData = new FormData();
    formData.append("access_key", "045045bd-7105-4d03-ac53-1c5f04ad227f"); // Keep your access key

    formData.append('image', image); // Append the image file
    formData.append('name', name);
    formData.append('type', type);
    formData.append('hp', hp);
    formData.append('abilities', abilities);
    formData.append('rarity', rarity);
    formData.append('set', set);

    try {
      const response = await axios.post("https://pokemon-tcg-node.onrender.com/api/pokemon/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        }
      });

      if (response.data.success) {
        setMessage("Form Submitted Successfully!");
        e.target.reset();
        setImage(null);
      } else {
        setMessage(`Error: ${response.data.message}`);
      }
    } catch (error) {
      setMessage("Error: Something went wrong. Please try again.");
      console.error("There was an error submitting the form:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected image file
  };

  return (
    <div className="adding-form-container">
      <h2>Add New Pokémon Card</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="image">Image Upload:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required /> {/* Change to file input */}

        <label htmlFor="type">Type:</label>
        <input type="text" id="type" name="type" value={type} onChange={(e) => setType(e.target.value)} required />

        <label htmlFor="hp">HP:</label>
        <input type="number" id="hp" name="hp" value={hp} onChange={(e) => setHp(e.target.value)} required />

        <label htmlFor="abilities">Abilities (comma-separated):</label>
        <input type="text" id="abilities" name="abilities" value={abilities} onChange={(e) => setAbilities(e.target.value)} required />

        <label htmlFor="rarity">Rarity:</label>
        <input type="text" id="rarity" name="rarity" value={rarity} onChange={(e) => setRarity(e.target.value)} required />

        <label htmlFor="set">Set:</label>
        <input type="text" id="set" name="set" value={set} onChange={(e) => setSet(e.target.value)} required />

        <button type="submit">Submit</button>
        <p className="form-message">{message}</p>
      </form>
    </div>
  );
}

export default AddingForm;