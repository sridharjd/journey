import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const PoemContainer = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: radial-gradient(circle at center, rgba(255,230,236,0.9), rgba(255,255,255,0.9));
`;

const PoemContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.15);
  backdrop-filter: blur(10px);
  margin: 20px auto;
  max-width: 600px;
  transform: translateY(0);
  transition: all 0.3s ease;
  border: 2px solid rgba(255,105,180,0.1);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255,105,180,0.3);
    box-shadow: 0 6px 25px rgba(255, 105, 180, 0.2);
  }
`;

const Title = styled(motion.h2)`
  background: linear-gradient(45deg, #ff69b4, #ff1493, #ff69b4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.2rem;
  margin-bottom: 25px;
  text-align: center;
  font-family: 'Georgia', serif;
  font-weight: normal;
`;

const Verse = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: #333;
  text-align: center;
  font-family: 'Georgia', serif;
  font-style: italic;
  margin: 1rem 0;
`;

const Poem: React.FC = () => {
  const verses = [
    "In every smile, in every glance you share,",
    "My heart finds reasons to beat with special care.",
    "Through time and distance, my love grew strong,",
    "In this beautiful journey where you belong.",
    "Like stars that guide us through darkest night,",
    "Your presence makes my whole world bright.",
    "With you, each moment feels like a dream,",
    "Our love story flows like a gentle stream.",
    "Forever yours, this heart will be,",
    "Together writing our destiny.",
    "Will you hold my hand and walk with me?",
    "In this journey of love, eternally."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const verseVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <PoemContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <PoemContent>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Heart's Whisper
        </Title>
        {verses.map((verse, index) => (
          <Verse
            key={index}
            variants={verseVariants}
            whileHover={{ scale: 1.02, color: '#ff1493' }}
          >
            {verse}
          </Verse>
        ))}
      </PoemContent>
    </PoemContainer>
  );
};

export default Poem; 