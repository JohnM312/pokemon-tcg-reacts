import React from 'react';
import '../styles/SampleDecks.css';

function SampleDecks() {
  return (
    <div className="sample-decks">
      <h1>Sample Decks</h1>

      <div className="deck-container">
        <div className="deck">
          <h2>Fire Blast Deck</h2>
          <img src="/images/Fire Blast Deck.png" alt="Fire Blast Deck" />
          <p>A strong "*Fire-type*" deck featuring Charizard for high-damage attacks.</p>
          <ul>
            <li>Strong against "*Grass & Ice types*".</li>
            <li>Focuses on high-damage attacks.</li>
          </ul>
        </div>

        <div className="deck">
          <h2>Water Surge Deck</h2>
          <img src="/images/Water Surge Deck.png" alt="Water Surge Deck" />
          <p>A "*Water-type*" deck built around Blastoise's powerful Hydro Pump.</p>
          <ul>
            <li>Good against "*Fire & Rock types*".</li>
            <li>Uses "*Energy acceleration*" strategies.</li>
          </ul>
        </div>

        <div className="deck">
          <h2>Electric Speed Deck</h2>
          <img src="/images/Pikachu V.jpg" alt="Electric Speed Deck" />
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