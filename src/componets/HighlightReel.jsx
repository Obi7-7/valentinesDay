import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const videos = [
  {
    id: 1,
    src: "https://assets.mixkit.co/videos/preview/mixkit-couple-walking-holding-hands-in-a-park-42646-large.mp4",
    title: "The Simple Moments",
    caption: "It's not the big dates, but the quiet walks that I cherish the most."
  },
  {
    id: 2,
    src: "",
    title: "Pure Magic",
    caption: "Every second with you feels like a celebration. You light up my world."
  },
  {
    id: 3,
    src: "https://assets.mixkit.co/videos/preview/mixkit-girl-laughing-in-a-park-4257-large.mp4",
    title: "Your Smile",
    caption: "The reason I wake up smiling every single day. I love you."
  }
];

const PhoneVideo = ({ src, title, caption, index }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.6, margin: "0px 0px -20% 0px" });
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play/pause logic based on scroll position
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        // Attempt to play
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented (browser policy)
            // We keep it muted to allow autoplay
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const isEven = index % 2 === 0;

  return (
    <div ref={containerRef} className="video-section">
      <div className={`content-container ${isEven ? "row" : "row-reverse"}`}>

        {/* Text Side */}
        <motion.div
          className="text-wrapper"
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="chapter-badge">Highlight {index + 1}</span>
          <h3 className="video-title">{title}</h3>
          <p className="video-caption">{caption}</p>
        </motion.div>

        {/* Phone Video Side */}
        <motion.div
          className="phone-wrapper"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="phone-frame">
            {/* The Video */}
            <video
              ref={videoRef}
              src={src}
              className="video-element"
              loop
              muted={isMuted} // Start muted to ensure autoplay works
              playsInline // Important for mobile
            />

            {/* Sound Toggle Overlay */}
            <button onClick={toggleMute} className="sound-toggle">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            {/* Phone Notch/Details */}
            <div className="phone-notch"></div>
          </div>

          {/* Aesthetic Shadow */}
          <div className="phone-shadow"></div>
        </motion.div>

      </div>
    </div>
  );
};

const HighlightReel = () => {
  return (
    <section className="highlight-reel">
      <style>{`
        .highlight-reel {
          background-color: #0f172a;
          color: white;
          padding-bottom: 5rem;
          font-family: serif;
        }

        .header {
          text-align: center;
          padding: 6rem 1rem 2rem;
        }

        .header-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .header-subtitle {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.7);
          font-family: sans-serif;
        }

        .text-gradient {
          background: linear-gradient(to right, #f9a8d4, #f43f5e);
          -webkit-background-clip: text;
          color: transparent;
        }

        /* Video Section */
        .video-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .content-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .content-container.row { flex-direction: row; }
          .content-container.row-reverse { flex-direction: row-reverse; }
        }

        /* Text Styling */
        .text-wrapper {
          flex: 1;
          text-align: center;
          padding: 1rem;
        }

        @media (min-width: 1024px) {
          .text-wrapper { text-align: left; }
          .content-container.row-reverse .text-wrapper { text-align: right; }
        }

        .chapter-badge {
          display: inline-block;
          font-family: sans-serif;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #f43f5e;
          margin-bottom: 1rem;
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 99px;
        }

        .video-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .video-caption {
          font-family: sans-serif;
          font-size: 1.1rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
        }

        /* Phone Frame Styling */
        .phone-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .phone-frame {
          width: 300px;
          height: 580px; /* Approx 9:16 aspect ratio */
          background: #000;
          border-radius: 40px;
          border: 8px solid #2d2d2d;
          box-shadow: 0 0 0 2px #4a4a4a; /* Outer thin bezel */
          position: relative;
          overflow: hidden;
          z-index: 10;
        }

        .video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .phone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 25px;
          background: #000;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          z-index: 20;
        }

        .phone-shadow {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 250px;
          height: 20px;
          background: rgba(0,0,0,0.5);
          filter: blur(15px);
          z-index: 1;
        }

        .sound-toggle {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s;
          z-index: 30;
        }

        .sound-toggle:hover {
          background: rgba(244, 63, 94, 0.8);
        }
      `}</style>

      <motion.div
        className="header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="header-title">The Highlight <span className="text-gradient">Reel</span></h2>
        <p className="header-subtitle">A few of my favorite moments of us.</p>
      </motion.div>

      <div className="reels-container">
        {videos.map((video, index) => (
          <PhoneVideo key={video.id} {...video} index={index} />
        ))}
      </div>
    </section>
  );
};

export default HighlightReel;