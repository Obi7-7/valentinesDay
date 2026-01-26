import React from 'react';
import './App.css';

function App() {
  return (
    <div className="hero-section">
      <div className="hearts-container">
        <div className="heart">❤️</div>
        <div className="heart">💖</div>
        <div className="heart">💗</div>
        <div className="heart">❤️</div>
        <div className="heart">💕</div>
      </div>
      
      <div className="content">
        <h1 className="title">Valentine's Day</h1>
        <p className="verse">"We love because He first loved us."</p>
        <p className="reference">1 John 4:19</p>
      </div>

      <div className="scroll-indicator">
        <span>Scroll for our story</span>
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default App;