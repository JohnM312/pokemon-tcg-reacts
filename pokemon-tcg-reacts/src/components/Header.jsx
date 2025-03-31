import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"; // Create this CSS file for styling

export default function Header() {
  return (
    <header>
      <img src="/images/PokemonTCG.png" alt="Pokémon Logo" className="logo" />
      <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
      <label htmlFor="menu-toggle" className="hamburger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rules">Rules</Link></li>
          <li><Link to="/sampledecks">Sample Decks</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/carddetails">Card Details</Link></li>
        </ul>
      </nav>
    </header>
  );
}