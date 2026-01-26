import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

// Unsplash Images
const valentineBg = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop";
const pointingImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"; 

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
      if (noClickCount >= 3) {
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
              Will You Be My
              <br />
              <span className="text-gradient">Valentine?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="sub-text"
            >
              Because every love story is beautiful, but ours is my favorite.
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
                <span className="btn-content">No...</span>
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
              Wait... <span className="text-gradient">Are you sure?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sub-text"
            >
              Think about it one more time... 💭
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
                  Still No
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
            className="content-wrapper"
          >
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="image-reveal"
            >
              <img src={pointingImage} alt="You're mine!" className="img-cover" />
              <div className="img-gradient" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="main-heading-small"
            >
              I don't even know why
              <br />
              I asked...
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="main-text-bold"
            >
              You're MINE! 💕
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="sub-text"
            >
              (I can't wait to spend Valentine's Day with you!)
            </motion.p>

            {/* Confetti */}
            <div className="confetti-container">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="confetti-piece"
                  initial={{ x: "50%", y: "50%", scale: 0 }}
                  animate={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    scale: [0, 1, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    delay: Math.random() * 0.5,
                    repeat: Infinity,
                    repeatDelay: 2,
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
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          font-family: serif;
        }
        .bg-wrapper { position: absolute; inset: 0; }
        .bg-image { height: 100%; width: 100%; object-fit: cover; }
        .bg-overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(2px); }
        .content-container { position: relative; z-index: 10; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 6rem 1.5rem; text-align: center; }
        .content-wrapper { display: flex; flex-direction: column; align-items: center; gap: 2rem; }
        
        .main-heading { font-size: 3rem; font-weight: bold; line-height: 1.1; color: white; }
        @media (min-width: 768px) { .main-heading { font-size: 5rem; } }
        .main-heading-small { font-size: 2.5rem; font-weight: bold; color: white; }
        
        .text-gradient { background: linear-gradient(to right, #f9a8d4, #f43f5e); -webkit-background-clip: text; color: transparent; }
        .sub-text { font-size: 1.25rem; color: rgba(255, 255, 255, 0.8); max-width: 28rem; margin: 0 auto; }
        
        .button-group { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; margin-top: 1rem; }
        .btn { position: relative; overflow: hidden; border-radius: 9999px; padding: 1rem 2.5rem; font-size: 1.125rem; font-weight: 600; cursor: pointer; transition: transform 0.2s; border: none; }
        .btn-yes { background: linear-gradient(to right, #ec4899, #e11d48); color: white; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4); }
        .btn-yes-strong { background: linear-gradient(to right, #ec4899, #e11d48); color: white; padding: 1rem 3rem; font-size: 1.25rem; box-shadow: 0 4px 20px rgba(236, 72, 153, 0.6); }
        .btn-no { background: rgba(255, 255, 255, 0.1); border: 2px solid rgba(255, 255, 255, 0.3); color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(4px); }
        .btn-content { position: relative; z-index: 10; display: flex; align-items: center; gap: 0.75rem; }
        .btn-icon { width: 1.25rem; height: 1.25rem; }
        .btn-icon-small { width: 1rem; height: 1rem; }
        .animate-heartbeat { animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        
        .image-reveal { position: relative; margin: 0 auto; max-width: 28rem; overflow: hidden; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
        .img-cover { width: 100%; height: 100%; object-fit: cover; }
        .img-gradient { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); }
        
        .main-text-bold { font-size: 2.5rem; font-weight: bold; background: linear-gradient(to right, #f9a8d4, #f43f5e); -webkit-background-clip: text; color: transparent; }
        
        .confetti-container { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .confetti-piece { position: absolute; }
        .heart-small { width: 1rem; height: 1rem; color: #f43f5e; }
        
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
      `}</style>

      <div className="bg-wrapper">
        <img src={valentineBg} alt="Valentine background" className="bg-image" />
        <div className="bg-overlay" />
      </div>

      <div className="content-container">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FinalAskSection;