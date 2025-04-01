// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={process.env.PUBLIC_URL + "/images/PokemonTCG.png"}
          alt="Pokemon TCG Logo"
          className="logo"
        />
      </Link>

      <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
      <label htmlFor="menu-toggle" className="hamburger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rules">Rules</Link>
          </li>
          <li>
            <Link to="/sampledecks">Sample Decks</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/carddetails">Card Details</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}