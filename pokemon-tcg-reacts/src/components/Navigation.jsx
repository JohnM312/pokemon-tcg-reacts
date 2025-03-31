// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/sampledecks">Sample Decks</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/carddetails">Card Details</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;