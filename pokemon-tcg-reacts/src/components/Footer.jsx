import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pokémon TCG</p>
    </footer>
  );
}

export default Footer;