// src/pages/Home.jsx
import React from 'react';
import '../styles/Home.css'; // Corrected path

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the World of Pokémon TCG!</h1>
      {/* Add your content here based on the image you provided */}
      <p>The Pokémon Trading Card Game (TCG) is a collectible card game based on the Pokémon franchise. Players build decks of Pokémon, Trainer, and Energy cards to battle each other, using strategy to outplay their opponents.</p>
      <div className="sections">
        <div className="section">
          <h2>What is Pokémon TCG?</h2>
          <p>Pokémon TCG is a competitive trading card game where players use decks featuring their favorite Pokémon to battle opponents. The objective is to take all of your Prize Cards by knocking out enemy Pokémon!</p>
          <img src="/images/PokemonGettingStarted.png" alt="What is Pokémon TCG?" />
        </div>
        <div className="section">
          <h2>How to Play</h2>
          <p>Players take turns playing Pokémon, attaching Energy cards, and using attacks. The game ends when one player has no Pokémon left in play or when all Prize Cards are taken.</p>
          <img src="/images/PokemonHowToPlay.png" alt="How to Play" />
        </div>
      </div>
      <div className="section">
        <h2>Why Play Pokémon TCG?</h2>
        <p><b>Strategic Depth:</b> The game combines skill, strategy, and a bit of luck, making every match exciting.</p>
        <p><b>Collectible Cards:</b> Players can build powerful decks and collect rare, shiny, and special edition cards.</p>
      </div>
    </div>
  );
}

export default Home;