// Updated Home.jsx
import React from 'react';
import Card from '../components/Card'; // Assuming Card component is available
import '../styles/Home.css';

function Home() {
  // Example data for featured cards (replace with actual data source if needed)
  const featuredCards = [
    { _id: 'cz', name: 'Charizard', img_name: 'images/Charizard EX.png', type: 'Fire', hp: '180' }, 
    { _id: 'pk', name: 'Pikachu V', img_name: 'images/Pikachu V.jpg', type: 'Electric', hp: '190' },
    { _id: 'bl', name: 'Blastoise', img_name: 'images/Blastoise EX.png', type: 'Water', hp: '180' }
  ];


  return (
    <div className="home">
      <h1>Welcome to the World of Pokémon TCG!</h1>
      <p className="intro-paragraph">The Pokémon Trading Card Game (TCG) is a collectible card game based on the Pokémon franchise. Players build decks of Pokémon, Trainer, and Energy cards to battle each other, using strategy to outplay their opponents.</p>

      {/* Top two sections */}
      <div className="home-sections-row">
        <div className="home-section bordered-section"> {/* Added class */}
          <h2>What is Pokémon TCG?</h2>
          <p>Pokémon TCG is a competitive trading card game where players use decks featuring their favorite Pokémon to battle opponents. The objective is to take all of your Prize Cards by knocking out enemy Pokémon!</p>
          <img src={process.env.PUBLIC_URL + "/images/PokemonGettingStarted.png"} alt="What is Pokémon TCG?" />
          </div>
        <div className="home-section bordered-section"> {/* Added class */}
          <h2>How to Play</h2>
          <p>Players take turns playing Pokémon, attaching Energy cards, and using attacks. The game ends when one player has no Pokémon left in play or when all Prize Cards are taken.</p>
          <img src={process.env.PUBLIC_URL + "/images/PokemonHowToPlay.png"} alt="How to Play" />
          </div>
      </div>

      {/* Why Play Section - Full Width */}
      <div className="home-section-full bordered-section"> {/* Added class */}
        <h2>Why Play Pokémon TCG?</h2>
        <p><b>Strategic Depth:</b> The game combines skill, strategy, and a bit of luck, making every match exciting.</p>
        <p><b>Collectible Cards:</b> Players can build powerful decks and collect rare, shiny, and special edition cards.</p>
        <p><b>Community & Tournaments:</b> There are local leagues, online matches, and even world championships.</p>
        <p><b>Fun for All Ages:</b> Whether you're a beginner or a competitive player, there's a place for everyone.</p>
      </div>

      {/* Fun Facts Section - Full Width */}
      <div className="home-section-full bordered-section">
         <h2>Fun Facts about Pokémon TCG</h2>
         <ul>
            <li>The most expensive Pokémon card ever sold is a Pikachu Illustrator card, auctioned for over $5 million!</li>
            <li>Some cards, like Shadowless First Edition Charizard, are worth thousands due to their rarity.</li>
            <li>Pokémon TCG was first released in 1996 in Japan, and it's still growing worldwide.</li>
            <li>There are over 13,000 different Pokémon cards printed since the game began.</li>
            <li>Some older cards, like Ancient Mew, had unique text that made them mysterious and collectible.</li>
         </ul>
      </div>


      {/* Featured Cards Section */}
      <div className="featured-cards-section">
        <h2>Featured Pokémon Cards</h2>
        <div className="featured-cards-container">
           {featuredCards.map(card => (
            <Card
             key={card._id}
             image={process.env.PUBLIC_URL + "/" + card.img_name}
             title={card.name}
             description={`Type: ${card.type}, HP: ${card.hp}`}
           />
           ))}
        </div>
      </div>

    </div>
  );
}

export default Home;