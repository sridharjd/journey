import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import Confetti from 'react-confetti';

const TimelineContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
`;

const TimelineTitle = styled.h2`
  text-align: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TimelineItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.15);
`;

const TimelineDate = styled.div`
  font-weight: bold;
  color: #ff1493;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const TimelineEmojis = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  justify-content: center;
`;

const TimelineEmoji = styled(motion.span)`
  font-size: 1.5rem;
`;

const TimelineDescription = styled.p`
  color: #333;
  line-height: 1.6;
  margin: 1rem 0;
`;

const TimelineImage = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  margin: 1rem auto;
  display: block;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
`;

const YesButton = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1.2rem;
  background: linear-gradient(45deg, #ff69b4, #ff1493);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.4);
  }
`;

const NoButton = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1.2rem;
  background: #f8f9fa;
  color: #ff1493;
  border: 2px solid #ff1493;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #ff1493;
    color: white;
  }
`;

interface TimelineEvent {
  date: string;
  emojis: string[];
  description: string;
  image: string;
}

interface TimelineProps {
  onYesClick: () => void;
}

const Timeline: React.FC<TimelineProps> = ({ onYesClick }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [yesButtonText, setYesButtonText] = useState('Yes');
  const [showNoButton, setShowNoButton] = useState(true);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonScale, setNoButtonScale] = useState(1);
  const [noButtonOpacity, setNoButtonOpacity] = useState(1);
  const [noButtonAttempts, setNoButtonAttempts] = useState(0);
  const [showFuture, setShowFuture] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const timelineEvents = [
    {
      date: "First Sight",
      emojis: ["👀", "💫", "💝"],
      description: "I saw a girl with the most beautiful smile while walking through the college campus — it left a lasting impression.",
      image: "img/first.jpeg"
    },
    {
      date: "Bus Journey",
      emojis: ["🚌", "💕", "✨"],
      description: "Our first real meet happened unexpectedly on a bus ride, though we ended up sitting apart.",
      image: "img/bus.jpg"
    },
    {
      date: "Little Conversations",
      emojis: ["🗣️", "💫", "💭"],
      description: "We shared sweet little conversations over time, each moment making my heart skip a beat.",
      image: "img/lil.jpg"
    },
    {
      date: "The Pause",
      emojis: ["💔", "😔", "🙏"],
      description: "Our conversations stopped, and I deeply regret not expressing myself better. I'm truly sorry for the silence.",
      image: "img/lev.jpg"
    },
    {
      date: "Three Years Later",
      emojis: ["⏳", "💪", "💓"],
      description: "After three long years, I finally gathered the courage to return and express my true feelings.",
      image: "img/sry.jpg"
    },
    {
      date: "Today",
      emojis: ["🙏", "💝", "✨"],
      description: "Now, I'm nervously waiting for your response, hoping for a yes.",
      image: "img/today.jpg"
    },
    {
      date: "The Question",
      emojis: ["💍", "💝", "✨", "💑"],
      description: "Will you Marry me?",
    }
  ];

  const futureEvents = [
    {
      date: "Our Love Story Begins",
      emojis: ["💑", "💌", "💕", "🌟"],
      description: "Thank you for making me the happiest person alive! I know you love me too. Thank you for choosing us.",
      image: "img/hpy.jpeg"
    },
    {
      date: "Building Together",
      emojis: ["💼", "📚", "💪", "🎯"],
      description: "Starting our journey to build strong careers together, supporting each other every step of the way.",
      image: "img/career.jpg"
    },
    {
      date: "Forever Together",
      emojis: ["💒", "👶", "🏡", "💫"],
      description: "Marriage, kids, and a beautiful life ahead - our perfect little family in the making.",
      image: "img/forevr.jpg"
    },
    {
      date: "Love Loop...",
      emojis: ["🌈", "💝", "✨", "∞"],
      description: "Our love in loop mode ever after...",
      image: "img/load.jpg"
    }
  ];

  const handleYesClick = () => {
    setShowConfetti(true);
    setYesButtonText('❤️ Yes, I Will! ❤️');
    setShowNoButton(false);
    onYesClick();
  };

  const handleNoHover = () => {
    // Increase movement range with each attempt
    const range = 100 + (noButtonAttempts * 20);
    const newX = (Math.random() - 0.5) * range;
    const newY = (Math.random() - 0.5) * range;
    
    setNoButtonPosition({ x: newX, y: newY });
    setNoButtonScale(1 + (noButtonAttempts * 0.1));
    setNoButtonOpacity(1 - (noButtonAttempts * 0.1));
    setNoButtonAttempts(prev => prev + 1);

    // Create color pieces
    for (let i = 0; i < 5; i++) {
      const piece = document.createElement('div');
      piece.className = 'color-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.top = `${Math.random() * 100}%`;
      piece.style.animationDuration = `${Math.random() * 2 + 1}s`;
      document.querySelector('.timeline-container')?.appendChild(piece);
      setTimeout(() => piece.remove(), 2000);
    }
  };

  return (
    <TimelineContainer className="timeline-container">
      {showConfetti && <Confetti />}
      <TimelineTitle>Our Journey Together</TimelineTitle>
      <TimelineContent>
        {timelineEvents.map((event, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TimelineDate>{event.date}</TimelineDate>
            <TimelineEmojis>
              {event.emojis.map((emoji, emojiIndex) => (
                <TimelineEmoji
                  key={emojiIndex}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: emojiIndex * 0.2
                  }}
                >
                  {emoji}
                </TimelineEmoji>
              ))}
            </TimelineEmojis>
            <TimelineDescription>{event.description}</TimelineDescription>
            {event.image && (
              <TimelineImage
                src={event.image}
                alt={event.description}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {event.date === "The Question" && (
              <ButtonContainer>
                <YesButton
                  onClick={handleYesClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {yesButtonText}
                </YesButton>
                {showNoButton && (
                  <NoButton
                    onClick={handleNoHover}
                    onMouseEnter={handleNoHover}
                    animate={{
                      x: noButtonPosition.x,
                      y: noButtonPosition.y,
                      scale: noButtonScale,
                      opacity: noButtonOpacity
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{
                      position: 'absolute',
                      left: '60%',
                      top: '50%'
                    }}
                  >
                    No
                  </NoButton>
                )}
              </ButtonContainer>
            )}
          </TimelineItem>
        ))}
      </TimelineContent>
    </TimelineContainer>
  );
};

export default Timeline; 