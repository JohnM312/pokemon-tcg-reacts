import React from 'react';
import '../styles/Rules.css';  // Corrected path

function Rules() {
  return (
    <div className="rules">
      <h1>Rules and Setup</h1>
      <div className="game-setup">
        <h2>Game Setup</h2>
        <ul>
          <li>Each player needs a "60-card deck".</li>
          <li>Shuffle your deck and draw "7 cards".</li>
          <li>Place "one Basic Pokémon" as your Active Pokémon.</li>
          <li>Set aside "6 Prize cards".</li>
          <li>Flip a coin to decide who goes first.</li>
        </ul>
        <img src="/images/TCGDiagram.png" alt="Game Setup" />
      </div>
      <div className="turn-structure">
        <h2>Turn Structure</h2>
        <div className="phase">
          <h3>Beginning Phase</h3>
          <ul>
            <li>Draw a card (except first turn for the first player).</li>
            <li>Play Basic Pokémon to your Bench.</li>
            <li>Attach "1" Energy card"" per turn.</li>
          </ul>
        </div>
        <div className="phase">
          <h3>Action Phase</h3>
          <ul>
            <li>Evolve Pokémon if possible.</li>
            <li>Play "*Trainer cards*" (Supporter, Item, Stadium).</li>
            <li>Use "*Abilities*" if applicable.</li>
          </ul>
        </div>
        <div className="phase">
          <h3>Battle Phase</h3>
          <ul>
            <li>Attack using your Active Pokémon.</li>
            <li>Apply Weakness & Resistance.</li>
            <li>Knock out Pokémon and take "*Prize cards*".</li>
          </ul>
        </div>
      </div>
      <div className="winning-the-game">
        <h2>Winning the Game</h2>
        <ul>
          <li>Take all "*6 Prize cards*".</li>
          <li>Your opponent has "*no Pokémon left*".</li>
          <li>Your opponent "can't draw a card" at the start of their turn.</li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;