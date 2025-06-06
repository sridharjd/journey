import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const FutureContainer = styled(motion.section)`
  position: relative;
  max-width: 800px;
  margin: 20px auto;
  padding: 2rem;
`;

const FutureItem = styled(motion.div)`
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  margin: 30px 0;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.15);
`;

const Date = styled(motion.div)`
  font-weight: bold;
  color: #ff1493;
  margin-bottom: 15px;
  font-size: 1.2em;
  text-align: center;
`;

const EmojiContainer = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  justify-content: center;
`;

const AnimatedEmoji = styled(motion.span)`
  display: inline-block;
  font-size: 1.2rem;
`;

const RoadmapContainer = styled(motion.div)`
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.2);
`;

const Roadmap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #ff69b4, #ff1493);
    z-index: 1;
  }
`;

const RoadmapItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(255, 105, 180, 0.1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  }

  &.active {
    background: linear-gradient(45deg, rgba(255,105,180,0.2), rgba(255,20,147,0.2));
    transform: scale(1.05);
  }
`;

const RoadmapIcon = styled(motion.div)`
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #ff69b4, #ff1493);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const RoadmapContent = styled.div`
  h4 {
    margin: 0;
    font-size: 1.1rem;
    color: #ff1493;
    font-weight: 600;
  }

  p {
    margin: 5px 0 0;
    font-size: 0.9rem;
    color: #333;
  }
`;

const LoadingAnimation = styled(motion.div)`
  margin: 20px 0;
  padding: 15px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
`;

const LoadingBar = styled(motion.div)`
  height: 15px;
  background: rgba(255, 105, 180, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0;
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(45deg, #ff69b4, #ff1493, #ff69b4);
  background-size: 200% 200%;
  border-radius: 10px;
  width: 0;
  animation: loadProgress 3s ease-out forwards;
`;

const Future: React.FC = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (currentEventIndex > 0) {
      setShowLoading(true);
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentEventIndex]);

  const roadmapSteps = [
    {
      icon: "💬",
      title: "Formal Chats & Calls",
      description: "Starting with sweet talks and late-night calls 📞"
    },
    {
      icon: "🤝",
      title: "Building Trust",
      description: "Overcoming doubts, promising forever 🤝"
    },
    {
      icon: "😜",
      title: "Roasting & Fun",
      description: "Teasing and laughing till our sides hurt 😜"
    },
    {
      icon: "😘",
      title: "Getting Closer",
      description: "Playful banter, shy moments, and spicy talks 😘"
    },
    {
      icon: "♾️",
      title: "Loop of Love",
      description: "Endless cycle of love, laughs, and us 🔄"
    }
  ];

  const futureEvents = [
    {
      date: "Our Love Story Begins",
      emojis: ["💑", "💌", "💕", "🌟"],
      description: "Thank you for making me the happiest person alive! I know you love me too. Thank you for choosing us.",
      image: "img/hpy.jpeg",
      showRoadmap: true
    },
    {
      date: "Building Together Loading...",
      emojis: ["💼", "📚", "💪", "🎯"],
      description: "Growing together in our careers and dreams",
      image: "img/career.jpg"
    },
    {
      date: "Growing Together Loading...",
      emojis: ["🌱", "🤝", "💖", "🌟"],
      description: "Learning and evolving as a couple",
      image: "img/grow.jpg"
    },
    {
      date: "Forever Together Loading...",
      emojis: ["💒", "👶", "🏡", "💫"],
      description: "Building our family and home together",
      image: "img/forevr.jpg"
    },
    {
      date: "Love Loop...........",
      emojis: ["🌈", "💝", "✨", "∞"],
      description: "Our endless journey of love and happiness",
      image: "img/load.jpg"
    }
  ];

  return (
    <FutureContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {futureEvents.slice(0, currentEventIndex + 1).map((event, index) => (
        <FutureItem
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Date>{event.date}</Date>
          <EmojiContainer>
            {event.emojis.map((emoji, emojiIndex) => (
              <AnimatedEmoji
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
              </AnimatedEmoji>
            ))}
          </EmojiContainer>
          <p>{event.description}</p>
          {event.showRoadmap && (
            <RoadmapContainer>
              <Roadmap>
                {roadmapSteps.map((step, stepIndex) => (
                  <RoadmapItem
                    key={stepIndex}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RoadmapIcon
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {step.icon}
                    </RoadmapIcon>
                    <RoadmapContent>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </RoadmapContent>
                  </RoadmapItem>
                ))}
              </Roadmap>
            </RoadmapContainer>
          )}
        </FutureItem>
      ))}

      {showLoading && (
        <LoadingAnimation>
          <LoadingBar>
            <LoadingProgress />
          </LoadingBar>
        </LoadingAnimation>
      )}

      {currentEventIndex < futureEvents.length - 1 && (
        <motion.button
          onClick={() => setCurrentEventIndex(prev => prev + 1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(45deg, #ff69b4, #ff1493)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            margin: '2rem auto',
            display: 'block',
            boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)'
          }}
        >
          Continue Our Journey
        </motion.button>
      )}
    </FutureContainer>
  );
};

export default Future; 