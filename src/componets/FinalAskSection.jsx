import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

// Unsplash Images
const valentineBg = "https://i.postimg.cc/5tP6SZk6/IMG-3440.jpg";
const pointingImage = "https://i.postimg.cc/JhZVxJhd/IMG-4067-2.png=fit=crop&w=800&q=80";

const FinalAskSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [stage, setStage] = useState("initial");
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);

  const handleYesClick = () => {
    setStage("accepted");
  };

  const handleNoClick = () => {
    if (stage === "initial") {
      setStage("areYouSure");
    } else if (stage === "areYouSure") {
      if (noClickCount >= 2) {
        setStage("accepted");
      } else {
        setNoClickCount(prev => prev + 1);
        setNoButtonPosition({
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
        });
      }
    }
  };

  const renderContent = () => {
    switch (stage) {
      case "initial":
        return (
          <motion.div
            key="initial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="content-wrapper"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="main-heading"
            >
              niagra be my
              <br />
              <span className="text-gradient">Valentine?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="sub-text"
            >
              bro..every love story is beautiful, but ours is my favorite.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="button-group"
            >
              <motion.button
                onClick={handleYesClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-yes"
              >
                <span className="btn-content">
                  <Heart className="btn-icon animate-heartbeat" fill="currentColor" />
                  Yes!
                </span>
              </motion.button>

              <motion.button
                onClick={handleNoClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-no"
              >
                <span className="btn-content">Nah...</span>
              </motion.button>
            </motion.div>
          </motion.div>
        );

      case "areYouSure":
        return (
          <motion.div
            key="areYouSure"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="content-wrapper"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="main-heading-small"
            >
              holdzon... <span className="text-gradient">you gotta be serious?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sub-text"
            >
              think about it one more time... 💭
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="button-group"
            >
              <motion.button
                onClick={handleYesClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="btn btn-yes-strong"
              >
                <span className="btn-content">
                  <Heart className="btn-icon" fill="currentColor" />
                  Yes, I'm Sure!
                </span>
              </motion.button>

              <motion.button
                onClick={handleNoClick}
                animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="btn btn-no"
              >
                <span className="btn-content">
                  <X className="btn-icon-small" />
                  Bounce No!
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        );

      case "accepted":
        return (
          <motion.div
            key="accepted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="content-wrapper accepted-wrapper"
          >
            {/* FLOATING HEARTS BACKGROUND */}
            <div className="hearts-container">
              <div className="heart">❤️</div>
              <div className="heart">💖</div>
              <div className="heart">💗</div>
              <div className="heart">❤️</div>
              <div className="heart">💕</div>
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="image-reveal"
            >
              <img src={pointingImage} alt="You're mine!" className="img-cover" />
              <div className="img-gradient" />
            </motion.div>

            <div style={{ marginTop: '0.5rem' }}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="main-heading-small"
                style={{ marginBottom: '0.5rem' }}
              >
                it's non negotiable...😡
                <br />
                sillyyyyyy...
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="main-text-bold"
              >
                you and i forever and always. 💕
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <h3 className="success-heading">you fill me with joy bro!</h3>
              <p className="sub-text">
                When i catch you it's on sight!!🫵
              </p>
            </motion.div>

            {/* FULL SCREEN CONFETTI POP */}
            <div className="confetti-container">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="confetti-piece"
                  initial={{ x: "50%", y: "50%", scale: 0 }}
                  animate={{
                    x: `${Math.random() * 100}vw`,
                    y: `${Math.random() * 100}vh`,
                    scale: [0, 1.5, 0],
                    rotate: [0, 180, 360],
                    opacity: [1, 1, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    ease: "easeOut",
                    delay: Math.random() * 0.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <Heart className="heart-small" fill="currentColor" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section ref={ref} className="final-ask-section">
      <style>{`
        .final-ask-section {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: serif;
        }

        .bg-wrapper { position: absolute; inset: 0; pointer-events: none; }
        .bg-image { height: 100%; width: 100%; object-fit: cover; }
        .bg-overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(2px); }

        .hearts-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
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

        .content-container { 
            position: relative; 
            z-index: 10; 
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 1rem;
        }
        
        .content-wrapper { 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center;
            gap: 1.5rem; 
            width: 100%;
        }

        .accepted-wrapper {
            gap: 1rem;
        }
        
        .main-heading { font-size: 3rem; font-weight: bold; line-height: 1.1; color: white; }
        @media (min-width: 768px) { .main-heading { font-size: 5rem; } }
        
        .main-heading-small { 
            font-size: 2rem;
            font-weight: bold; 
            color: white; 
            line-height: 1.2;
        }
        @media (min-width: 768px) { .main-heading-small { font-size: 3rem; } }
        
        .success-heading {
            font-size: 2.2rem;
            font-weight: bold;
            color: #ffe4e6;
            margin-bottom: 0.5rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .text-gradient { background: linear-gradient(to right, #f9a8d4, #f43f5e); -webkit-background-clip: text; color: transparent; }
        .sub-text { font-size: 1.1rem; color: rgba(255, 255, 255, 0.8); max-width: 28rem; margin: 0 auto; }
        
        .button-group { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; margin-top: 1rem; }
        .btn { position: relative; overflow: hidden; border-radius: 9999px; padding: 1rem 2.5rem; font-size: 1.125rem; font-weight: 600; cursor: pointer; transition: transform 0.2s; border: none; }
        .btn-yes { background: linear-gradient(to right, #ec4899, #e11d48); color: white; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4); }
        .btn-yes-strong { background: linear-gradient(to right, #ec4899, #e11d48); color: white; padding: 1rem 3rem; font-size: 1.25rem; box-shadow: 0 4px 20px rgba(236, 72, 153, 0.6); }
        .btn-no { background: rgba(255, 255, 255, 0.1); border: 2px solid rgba(255, 255, 255, 0.3); color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(4px); }
        .btn-content { position: relative; z-index: 10; display: flex; align-items: center; gap: 0.75rem; }
        .btn-icon { width: 1.25rem; height: 1.25rem; }
        .btn-icon-small { width: 1rem; height: 1rem; }
        .animate-heartbeat { animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        
        .image-reveal { 
            position: relative; 
            margin: 0 auto; 
            max-width: 28rem; 
            max-height: 35vh; /* Slightly smaller to fit new text */
            overflow: hidden; 
            border-radius: 1rem; 
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); 
            z-index: 20; 
        }
        .img-cover { width: 100%; height: 100%; object-fit: cover; }
        .img-gradient { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); }
        
        .main-text-bold { 
            font-size: 2.5rem; 
            font-weight: bold; 
            background: linear-gradient(to right, #f9a8d4, #f43f5e); 
            -webkit-background-clip: text; 
            color: transparent; 
        }
        
        /* Updated Confetti to cover full screen */
        .confetti-container { 
            position: fixed; /* Fixed to cover whole screen */
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden; 
            pointer-events: none; 
            z-index: 50; 
        }
        .confetti-piece { position: absolute; }
        .heart-small { width: 1.5rem; height: 1.5rem; color: #f43f5e; }
        
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
      `}</style>

      {/* Background */}
      <div className="bg-wrapper">
        <img src={valentineBg} alt="Valentine background" className="bg-image" />
        <div className="bg-overlay" />
      </div>

      {/* Content */}
      <div className="content-container">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FinalAskSection;