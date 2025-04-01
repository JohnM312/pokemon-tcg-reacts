// Updated SampleDecks.jsx
import React from 'react';
import '../styles/SampleDecks.css';

function SampleDecks() {
  return (
    <div className="sample-decks">
      <h1>Sample Decks</h1>

      <div className="deck-container">
        <div className="deck bordered-section">
          <h2>Fire Blast Deck</h2>
          <img src={process.env.PUBLIC_URL + "/" + "/images/charizard deck.jpg"} />
          <p>A strong "*Fire-type*" deck featuring Charizard for high-damage attacks.</p>
          <ul>
            <li>Strong against "*Grass & Ice types*".</li>
            <li>Focuses on high-damage attacks.</li>
          </ul>
        </div>

        <div className="deck bordered-section">
          <h2>Water Surge Deck</h2>
          <img src={process.env.PUBLIC_URL + "/" + "/images/blastoise deck.png"} />
          <p>A "*Water-type*" deck built around Blastoise's powerful Hydro Pump.</p>
          <ul>
            <li>Good against "*Fire & Rock types*".</li>
            <li>Uses "*Energy acceleration*" strategies.</li>
          </ul>
        </div>

        <div className="deck bordered-section">
          <h2>Electric Speed Deck</h2>
          <img src={process.env.PUBLIC_URL + "/" + "/images/pikachu deck.png"} />
          <p>An "*Electric-type*" deck featuring Pikachu and Raichu for quick attacks.</p>
          <ul>
            <li>Great for fast-paced battles.</li>
            <li>Weak against "*Ground types*".</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SampleDecks;