import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Hero from './components/Hero';
import Poem from './components/Poem';
import Timeline from './components/Timeline';
import Future from './components/Future';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  color: white;
  font-size: 1.2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Particles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const Particle = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
`;

const FloatingEmojis = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingEmoji = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
  user-select: none;
`;

const App: React.FC = () => {
  const [namesMatched, setNamesMatched] = useState(false);
  const [showFuture, setShowFuture] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const [floatingEmojis, setFloatingEmojis] = useState<Array<{ id: number; emoji: string; x: number; y: number }>>([]);

  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 5 + 2
    }));
    setParticles(newParticles);

    // Create floating emojis
    const emojis = ['💖', '💝', '💕', '💓', '💗', '💘', '💞', '💟'];
    const newFloatingEmojis = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }));
    setFloatingEmojis(newFloatingEmojis);
  }, []);

  const handleNamesMatched = (matched: boolean) => {
    setNamesMatched(matched);
    // If names are no longer matched, hide the future section as well
    if (!matched) {
      setShowFuture(false);
    }
  };

  const handleYesClick = () => {
    setShowFuture(true);
    // Scroll to Future section
    const futureSection = document.querySelector('.future-section');
    if (futureSection) {
      futureSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppContainer>
      <Particles>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 1, 0],
              x: particle.x + (Math.random() - 0.5) * 100
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x
            }}
          />
        ))}
      </Particles>

      <FloatingEmojis>
        {floatingEmojis.map((emoji) => (
          <FloatingEmoji
            key={emoji.id}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 1, 0],
              x: emoji.x + (Math.random() - 0.5) * 100,
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{
              left: emoji.x
            }}
          >
            {emoji.emoji}
          </FloatingEmoji>
        ))}
      </FloatingEmojis>

      <Hero onNamesMatched={handleNamesMatched} />
      
      {namesMatched && (
        <>
          <Poem />
          <Timeline onYesClick={handleYesClick} />
        </>
      )}

      {showFuture && (
        <div className="future-section">
          <Future />
        </div>
      )}

      <Footer>
        Made with 💖 for our love story
      </Footer>
    </AppContainer>
  );
};

export default App;
