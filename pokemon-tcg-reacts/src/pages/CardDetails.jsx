import React from 'react';
import '../styles/CardDetails.css';

function CardDetails() {
  return (
    <div className="card-details">
      <h1>Card Details</h1>
      <p className="details-subtitle">- This will provide descriptions on how the card works.</p>

      <div className="card-section">
      <img src={process.env.PUBLIC_URL + "/images/Charizard EX.png"} alt="Charizard EX" />
      <div className="details-list"> 
          <p className="detail-item">
            <b>Stage</b> - Displays the evolution level of the Pokémon.
          </p>
          <p className="detail-item">
            <b>Pre-Evolution</b> - Shows which Pokémon it evolves from.
          </p>
          <p className="detail-item">
            <b>HP</b> - Displays the Pokémon's total health points.
          </p>
          <p className="detail-item">
            <b>Attack Moves</b> - Shows the moves the Pokémon can use.
          </p>
          <p className="detail-item">
            <b>Attack Cost</b> - The energy required to use each move.
          </p>
          <p className="detail-item">
            <b>Damage</b> - Displays the amount of damage the move deals.
          </p>
          <p className="detail-item">
            <b>Weakness</b> - Shows which Pokémon types deal extra damage.
          </p>
          <p className="detail-item">
            <b>Retreat Cost</b> - The energy needed to switch out the Pokémon.
          </p>
          <p className="detail-item">
            <b>EX Rule</b> - Some Pokémon EX give additional prizes when knocked out.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;