import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pokémon TCG - John Mai</p>
    </footer>
  );
}

export default Footer;