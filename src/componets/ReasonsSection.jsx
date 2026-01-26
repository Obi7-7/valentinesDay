import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const horizontalItems = [
  {
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop",
    title: "Kindest Heart",
    description: "You have the kindest heart I've ever known.",
    id: "01",
  },
  {
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
    title: "Your Laugh",
    description: "Your laugh is my absolute favorite sound in the world.",
    id: "02",
  },
  {
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop",
    title: "Better Person",
    description: "You push me to be a better person every single day.",
    id: "03",
  },
  {
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1000&auto=format&fit=crop",
    title: "Adventurous Spirit",
    description: "You make even the boring days feel like an adventure.",
    id: "04",
  },
  {
    image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1000&auto=format&fit=crop",
    title: "Safe Haven",
    description: "You make me feel safe, loved, and understood.",
    id: "05",
  },
  {
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop",
    title: "Your Wisdom",
    description: "I love how you see the world and the advice you give.",
    id: "06",
  },
  {
    image: "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=1000&auto=format&fit=crop",
    title: "Your Faith",
    description: "Seeing God's light shine through you is a blessing.",
    id: "07",
  },
  {
    image: "https://images.unsplash.com/photo-1520024144160-3929e3e239f8?q=80&w=1000&auto=format&fit=crop",
    title: "Your Strength",
    description: "You are stronger than you know, and I admire that.",
    id: "08",
  },
  {
    image: "https://images.unsplash.com/photo-1517021897933-0e03195bb869?q=80&w=1000&auto=format&fit=crop",
    title: "Our Future",
    description: "I simply cannot imagine my life without you in it.",
    id: "09",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    title: "Everything",
    description: "I love everything about you, inside and out.",
    id: "10",
  },
  {
    id: "end",
    title: "And yet...",
    description: "My love for you is not bound to these reasons.",
    image: null 
  }
];

const ReasonsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section ref={containerRef} className="reasons-section">
      <style>{`
        .reasons-section {
          height: 600vh;
          position: relative;
          background: #0f172a;
          overflow: visible;
        }

        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .section-title {
          position: absolute;
          top: 50%;
          left: 2rem;
          transform: translateY(-50%);
          z-index: 20;
          color: white;
          display: none;
        }

        @media (min-width: 1024px) {
          .section-title {
            display: block;
          }
        }

        .section-title span {
          display: block;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #f43f5e;
          margin-bottom: 0.5rem;
        }

        .section-title h2 {
          font-family: serif;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0;
        }

        .cards-container {
          display: flex;
          gap: 2rem;
          padding-left: 2rem;
          padding-right: 50vw;
        }

        @media (min-width: 1024px) {
          .cards-container {
            padding-left: 18rem;
            gap: 4rem;
          }
        }

        .card {
          position: relative;
          height: 60vh;
          width: 80vw;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          border-radius: 1rem;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .card { width: 45vw; height: 70vh; }
        }

        .card-image-wrapper {
          position: relative;
          height: 100%;
          width: 100%;
          border-radius: 1rem;
          overflow: hidden;
          background: #1e293b;
          transition: transform 0.3s ease;
        }

        .card-image {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .card:hover .card-image {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2), transparent);
        }

        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          color: white;
        }

        .card-id {
          display: inline-block;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #f43f5e;
          margin-bottom: 0.5rem;
        }

        .card-title {
          font-family: serif;
          font-size: 2rem;
          font-weight: bold;
          margin: 0 0 0.5rem 0;
        }

        .card-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 24rem;
          line-height: 1.5;
        }

        .final-card-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            padding: 3rem; 
            text-align: center;
            box-sizing: border-box;
        }
        
        .final-text {
            color: #ffffff;
            font-size: 3rem;
            font-weight: bold;
            font-family: serif;
            line-height: 1.5; 
            text-shadow: 0 4px 10px rgba(0,0,0,0.5);
            max-width: 100%;
            word-wrap: break-word;
        }

        @media (min-width: 768px) {
            .final-text {
                font-size: 4.5rem;
            }
        }

        .progress-bar-container {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 30;
        }

        .progress-dot {
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 9999px;
          background-color: rgba(244, 63, 94, 0.3);
        }
      `}</style>

      <div className="sticky-wrapper">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <span>Why I Love You</span>
          <h2>10 Reasons</h2>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <motion.div style={{ x }} className="cards-container">
          {horizontalItems.map((item, index) => {
            const isLast = item.id === "end";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card group"
              >
                <div 
                  className="card-image-wrapper" 
                  style={isLast ? { 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)'
                  } : {}}
                >
                  {!isLast && (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="card-image"
                      />
                      <div className="card-overlay" />
                    </>
                  )}
                  
                  {isLast ? (
                     // FINAL CARD: Centered Container with White Text
                     <div className="final-card-container">
                        <h3 className="final-text">
                           {item.description}
                        </h3>
                     </div>
                  ) : (
                    // NORMAL CARD: TEXT AT BOTTOM
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="card-content"
                    >
                      <span className="card-id">REASON {item.id}</span>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.description}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="progress-bar-container">
          {horizontalItems.map((_, index) => (
            <motion.div
              key={index}
              className="progress-dot"
              style={{
                scale: useTransform(
                  scrollYProgress,
                  [index / horizontalItems.length, (index + 0.5) / horizontalItems.length, (index + 1) / horizontalItems.length],
                  [1, 1.5, 1]
                ),
                opacity: useTransform(
                  scrollYProgress,
                  [index / horizontalItems.length, (index + 0.5) / horizontalItems.length, (index + 1) / horizontalItems.length],
                  [0.3, 1, 0.3]
                ),
                backgroundColor: useTransform(
                  scrollYProgress,
                  [index / horizontalItems.length, (index + 0.5) / horizontalItems.length, (index + 1) / horizontalItems.length],
                  ["rgba(244, 63, 94, 0.3)", "#f43f5e", "rgba(244, 63, 94, 0.3)"]
                ),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;