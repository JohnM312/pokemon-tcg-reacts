import React from 'react';
import '../styles/CardDetails.css';  

function CardDetails() {
  return (
    <div className="card-details">
      <h1>Card Details</h1>

      <div className="card-section">
        <img src="/images/Charizard EX.png" alt="Charizard EX" />
        <div className="details">
          <div className="detail">
            <b>Stage</b> - Displays the evolution level of the Pokémon.
          </div>
          <div className="detail">
            <b>Pre-Evolution</b> - Shows which Pokémon it evolves from.
          </div>
          <div className="detail">
            <b>HP</b> - Displays the Pokémon's total health points.
          </div>
          <div className="detail">
            <b>Attack Moves</b> - Shows the moves the Pokémon can use.
          </div>
          <div className="detail">
            <b>Attack Cost</b> - The energy required to use each move.
          </div>
          <div className="detail">
            <b>Damage</b> - Displays the amount of damage the move deals.
          </div>
          <div className="detail">
            <b>Weakness</b> - Shows which Pokémon types deal extra damage.
          </div>
          <div className="detail">
            <b>Retreat Cost</b> - The energy needed to switch out the Pokémon.
          </div>
          <div className="detail">
            <b>EX Rule</b> - Some Pokémon EX give additional prizes when knocked out.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;