import React from 'react';
import './App.css';

function App() {
  return (
    <div className="hero-section">
      <div className="hearts-container">
        <div className="heart">❤️</div>
        <div className="heart">💖</div>
        <div className="heart">✨</div>
        <div className="heart">❤️</div>
        <div className="heart">💕</div>
      </div>
      
      <div className="content">
        <h1>Our Love Story</h1>
        <p>A journey through grace and memories</p>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default App;