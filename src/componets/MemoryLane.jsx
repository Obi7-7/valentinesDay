import React from "react";
import { motion } from "framer-motion";

// Unsplash placeholders for the memories
const timelineData = [
  {
    image: "https://i.postimg.cc/4xkW5tkj/IMG-3438.jpg",
    title: "Where It All Began",
    description: "auhh  I still remember the first time we met. It was like the universe conspired to bring us together. That moment changed everything.",

    date: "23 September 2023",
  },
  {
    image: "https://i.postimg.cc/QtPfzNdJ/Chat-GPT-Image-Feb-14-2026-at-04-39-42-PM.png",
    title: "Our First Adventure",
    description: "Late nights, shared dreams, and endless conversations,every moment with you feels like magic bro. I cherish every memory we've created together.",
    date: "Chapter Two",
  },
  {
    image: "https://i.postimg.cc/YqLv7nDr/Chat-GPT-Image-Feb-14-2026-at-04-33-02-PM.png",
    title: "Dancing Through Life",
    description: "We learned to dance in the rain together,in the distance, finding joy in the simplest of moments,your laughter became my favorite melody.",
    date: "Chapter Three",
  },
  {
    image: "https://i.postimg.cc/Vk92bwZp/0FC47B1D-EAAF-417D-ADB0-89F64C93B823-1-105-c.jpg",
    title: "Weirdos in Love",
    description: "together,we've climbed mountains and conquered fears. With you, anything feels possible i love seeing what feels impossible made possible with you, every peak is better with you by my side ;).",
    date: "Chapter Four",
  },
  {
    image: "https://i.postimg.cc/4xFVP706/91918026-5018-469A-86A9-B124557B3A2A.jpg",
    title: "Forever & Always",
    description: "as time moves on, my love for you only grows stronger,this is just the beginning of our foreverrrrr, i always choose you chiiii!!!!🌍❤️",
    date: "Chapter Five",
  },
];

const TimelineItem = ({ image, title, description, date, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`timeline-item ${isEven ? "even" : "odd"}`}
    >
      {/* Date/Chapter Label */}
      <div className="timeline-date">
        <span>{date}</span>
      </div>

      {/* Content Side */}
      <div className="timeline-content">
        <h3 className="item-title">{title}</h3>
        <p className="item-desc">{description}</p>
      </div>

      {/* Image Side */}
      <div className="timeline-image-wrapper">
        <img src={image} alt={title} className="timeline-img" />
        <div className="img-overlay"></div>
      </div>
    </motion.div>
  );
};

const MemoryLane = () => {
  return (
    <section id="timeline" className="memory-lane-section">
      <style>{`
        .memory-lane-section {
          position: relative;
          background: #0f172a; /* Dark slate background */
          padding-bottom: 5rem;
          color: white;
          overflow: hidden;
        }

        /* Header Styles */
        .header-container {
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.5rem;
          text-align: center;
        }

        .eyebrow {
          display: inline-block;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: #f43f5e;
          margin-bottom: 1rem;
        }

        .main-title {
          font-family: serif;
          font-size: 3rem;
          font-weight: bold;
          line-height: 1.1;
        }

        @media (min-width: 768px) {
          .main-title { font-size: 5rem; }
        }

        .text-gradient {
          background: linear-gradient(to right, #f9a8d4, #f43f5e);
          -webkit-background-clip: text;
          color: transparent;
        }

        /* Timeline Container */
        .timeline-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        /* Center Line */
        .center-line {
          position: absolute;
          left: 50%;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, transparent, rgba(244, 63, 94, 0.3), transparent);
          transform: translateX(-50%);
          display: none;
        }

        @media (min-width: 1024px) {
          .center-line { display: block; }
        }

        /* Timeline Items */
        .timeline-item {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 4rem;
          position: relative;
          padding: 0 1.5rem;
        }

        @media (min-width: 1024px) {
          .timeline-item {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 4rem;
          }

          .timeline-item.even { flex-direction: row; }
          .timeline-item.odd { flex-direction: row-reverse; }
        }

        .timeline-content, .timeline-image-wrapper {
          flex: 1;
        }

        .timeline-content {
          text-align: center;
          z-index: 2;
        }

        @media (min-width: 1024px) {
          .timeline-item.even .timeline-content { text-align: right; }
          .timeline-item.odd .timeline-content { text-align: left; }
        }

        .item-title {
          font-family: serif;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #fff;
        }

        .item-desc {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .timeline-image-wrapper {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          aspect-ratio: 4/3;
        }

        .timeline-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .timeline-image-wrapper:hover .timeline-img {
          transform: scale(1.05);
        }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
        }

        /* Floating Chapter Label */
        .timeline-date {
          display: block;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .timeline-date span {
          background: rgba(244, 63, 94, 0.2);
          color: #f43f5e;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid rgba(244, 63, 94, 0.3);
        }

        @media (min-width: 1024px) {
          .timeline-date {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
            margin-bottom: 0;
            background: #0f172a; /* Match section bg to hide line */
            padding: 10px;
          }
        }
      `}</style>

      {/* Section Header */}
      <div className="header-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow"
          >
            Our Journey Together
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="main-title"
          >
            Moments That
            <br />
            <span className="text-gradient">Matter</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Timeline Items */}
      <div className="timeline-container">
        {/* Central Line */}
        <div className="center-line" />

        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default MemoryLane;