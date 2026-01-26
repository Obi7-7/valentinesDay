import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const HeroSection = () => {
  // Simple logic to make the seconds count up vividly
  const [seconds, setSeconds] = useState(999999900);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
          font-family: serif;
        }

        /* Floating Hearts Animation */
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

        /* Main Content */
        .content {
          z-index: 10;
          padding: 0 1rem;
        }

        .title {
          font-size: 4rem;
          font-weight: bold;
          color: #ff4d6d;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
          margin-bottom: 20px;
          line-height: 1.1;
        }
        
        @media (min-width: 768px) {
            .title { font-size: 6rem; }
        }

        .verse {
          font-size: 1.5rem;
          font-style: italic;
          max-width: 800px;
          margin: 0 auto;
          color: #ffb3c1;
        }

        .reference {
          font-size: 1rem;
          margin-top: 10px;
          letter-spacing: 2px;
          color: #fff;
          font-family: sans-serif;
          text-transform: uppercase;
        }

        /* Corner Timer Badge */
        .timer-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            z-index: 20;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .timer-label {
            font-family: sans-serif;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: rgba(255,255,255,0.7);
            margin-bottom: 0.2rem;
        }

        .timer-value {
            font-family: monospace;
            font-size: 1.2rem;
            font-weight: bold;
            color: #f43f5e;
            text-shadow: 0 0 10px rgba(244, 63, 94, 0.5);
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          color: #ffb3c1;
          font-weight: bold;
          font-family: sans-serif;
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

      {/* Floating Hearts */}
      <div className="hearts-container">
        <div className="heart">❤️</div>
        <div className="heart">💖</div>
        <div className="heart">💗</div>
        <div className="heart">❤️</div>
        <div className="heart">💕</div>
      </div>

      {/* Corner Timer */}
      <motion.div 
        className="timer-badge"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <span className="timer-label">Time Together</span>
        <span className="timer-value">{seconds.toLocaleString()}s</span>
      </motion.div>
      
      {/* Main Content */}
      <div className="content">
        <motion.h1 
          className="title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Valentine's Day
        </motion.h1>
        <motion.p 
          className="verse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          "We love because He first loved us."
        </motion.p>
        <motion.p 
          className="reference"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          1 John 4:19
        </motion.p>
      </div>

      <div className="scroll-indicator">
        <span>Scroll for our story</span>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default HeroSection;