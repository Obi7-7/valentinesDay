import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <style>{`
        .hero-section {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          color: #fff;
          text-align: center;
        }

        .hearts-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .heart {
          position: absolute;
          font-size: 30px;
          animation: float 5s infinite ease-in;
          filter: drop-shadow(0 0 5px rgba(255,105,180,0.5));
        }

        .heart:nth-child(1) { left: 15%; animation-delay: 0s; }
        .heart:nth-child(2) { left: 35%; animation-delay: 1.5s; }
        .heart:nth-child(3) { left: 65%; animation-delay: 0.5s; }
        .heart:nth-child(4) { left: 85%; animation-delay: 2.5s; }
        .heart:nth-child(5) { left: 50%; animation-delay: 3.5s; }

        @keyframes float {
          0% { transform: translateY(110vh) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(-10vh) scale(1.5); opacity: 0; }
        }

        .title {
          font-size: 5rem;
          font-weight: bold;
          color: #ff4d6d;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
          margin-bottom: 20px;
          font-family: 'Times New Roman', serif;
        }

        .verse {
          font-size: 2rem;
          font-style: italic;
          max-width: 80%;
          margin: 0 auto;
          color: #ffb3c1;
        }

        .reference {
          font-size: 1.2rem;
          margin-top: 10px;
          letter-spacing: 2px;
          color: #fff;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          color: #ffb3c1;
          font-weight: bold;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-15px); }
          60% { transform: translateY(-7px); }
        }

        .arrow {
          width: 15px;
          height: 15px;
          border-right: 3px solid #ff4d6d;
          border-bottom: 3px solid #ff4d6d;
          transform: rotate(45deg);
          margin: 10px auto 0;
        }
      `}</style>

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
};

export default HeroSection;