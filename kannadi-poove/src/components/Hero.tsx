import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

const HeroContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(255, 105, 180, 0.3);
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  color: white;
  font-size: 3em;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #ff69b4, #ff1493);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const NameInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled(motion.input)`
  padding: 0.8rem 1.5rem;
  border: 2px solid #ff1493;
  border-radius: 50px;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #ff69b4;
    box-shadow: 0 0 8px rgba(255, 105, 180, 0.5);
  }
`;

const Personality = styled(motion.div)`
  background: rgba(255, 20, 147, 0.1);
  padding: 1rem;
  border-radius: 10px;
  margin-top: 0.5rem;
  text-align: left;
  width: 100%;
  overflow: hidden;

  h3 {
    color: #ff1493;
    margin-top: 0;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 1rem;
  }
`;

const RevealButton = styled(motion.button)`
  padding: 1rem 2.5rem;
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

const ErrorMessage = styled(motion.div)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: red;
  opacity: 0;
  transition: opacity 0.3s ease;

  &.show {
    opacity: 1;
  }
`;

interface HeroProps {
  onNamesMatched: (matched: boolean) => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

const containerVariants = {
  hidden: { opacity: 0, height: 0, padding: '0 1rem' },
  visible: {
    opacity: 1,
    height: 'auto',
    padding: '1rem',
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5
    }
  },
  exit: { opacity: 0, height: 0, padding: '0 1rem', transition: { duration: 0.3 } }
};

const Hero: React.FC<HeroProps> = ({ onNamesMatched }) => {
  const [herName, setHerName] = useState('');
  const [hisName, setHisName] = useState('');
  const [showPersonalities, setShowPersonalities] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [lovePercentage, setLovePercentage] = useState<number | null>(null);
  const [namesWereMatched, setNamesWereMatched] = useState(false);

  useEffect(() => {
    if (namesWereMatched && (herName.trim().toLowerCase() !== 'nisha' || hisName.trim().toLowerCase() !== 'sridhar')) {
      setShowPersonalities(false);
      setShowError(false);
      setErrorMessage('');
      setLovePercentage(null);
      onNamesMatched(false);
      setNamesWereMatched(false);
    }
  }, [herName, hisName, namesWereMatched, onNamesMatched]);

  const handleReveal = () => {
    const herNameValue = herName.trim().toLowerCase();
    const hisNameValue = hisName.trim().toLowerCase();
    const isHerNameCorrect = herNameValue === 'nisha';
    const isHisNameCorrect = hisNameValue === 'sridhar';

    setShowError(false);
    setShowPersonalities(false);
    setErrorMessage('');
    setLovePercentage(null);
    setNamesWereMatched(false);

    if (!herNameValue || !hisNameValue) {
      setErrorMessage('Please enter both names to reveal your personalities! 😊');
      setShowError(true);
      onNamesMatched(false);
      return;
    }

    if (isHerNameCorrect && isHisNameCorrect) {
      setShowPersonalities(true);
      onNamesMatched(true);
      setNamesWereMatched(true);

    } else {
      const percentage = Math.floor(Math.random() * (90 - 50 + 1)) + 50;
      setLovePercentage(percentage);
      onNamesMatched(false);
      setNamesWereMatched(false);

      if (!isHerNameCorrect && hisNameValue === 'sridhar') {
        setErrorMessage('This is not the matched couple, the universe suggests "Nisha" 👑');
      } else if (herNameValue === 'nisha' && !isHisNameCorrect) {
        setErrorMessage('This is not the matched couple, the universe suggests "Sridhar" 👑');
      } else {
        setErrorMessage(`Your love compatibility is ${percentage}% 💕`);
      }
      setShowError(true);
    }
  };

  return (
    <HeroContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroContent>
        <Title
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Our Names, Our Story
        </Title>
        <NamesContainer>
          <NameInput>
            <Input
              type="text"
              placeholder="Enter her name"
              value={herName}
              onChange={(e) => setHerName(e.target.value)}
            />
            <AnimatePresence>
              {showPersonalities && (
                <Personality
                  key="her-personality"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                >
                  <h3>{herName}'s Nature</h3>
                  <ul>
                    <motion.li variants={itemVariants}>💝 More love, more emotional</motion.li>
                    <motion.li variants={itemVariants}>❤️ Less logic, more feelings</motion.li>
                    <motion.li variants={itemVariants}>😠 Ready to fight when angry</motion.li>
                    <motion.li variants={itemVariants}>✨ Pure soul with strong emotions</motion.li>
                    <motion.li variants={itemVariants}>🌟 Beautiful smile that lights up the world</motion.li>
                    <motion.li variants={itemVariants}>💫 Kind heart that cares deeply</motion.li>
                  </ul>
                </Personality>
              )}
            </AnimatePresence>
          </NameInput>
          <NameInput>
            <Input
              type="text"
              placeholder="Enter his name"
              value={hisName}
              onChange={(e) => setHisName(e.target.value)}
            />
            <AnimatePresence>
              {showPersonalities && (
                <Personality
                  key="his-personality"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                >
                  <h3>{hisName}'s Nature</h3>
                  <ul>
                    <motion.li variants={itemVariants}>💝 More love, more understanding</motion.li>
                    <motion.li variants={itemVariants}>🧠 More logic, thoughtful decisions</motion.li>
                    <motion.li variants={itemVariants}>😊 No anger, always convincing</motion.li>
                    <motion.li variants={itemVariants}>✨ Patient and caring soul</motion.li>
                    <motion.li variants={itemVariants}>🌟 Will always protect and cherish you</motion.li>
                    <motion.li variants={itemVariants}>💫 Loyal and committed to forever</motion.li>
                  </ul>
                </Personality>
              )}
            </AnimatePresence>
          </NameInput>
          <AnimatePresence>
            {showError && errorMessage && lovePercentage === null && (
              <ErrorMessage key="error-msg" className={'show'}>
                {errorMessage}
              </ErrorMessage>
            )}
            {showError && lovePercentage !== null && (
              <ErrorMessage key="love-percent" className={'show'}>
                {errorMessage}
              </ErrorMessage>
            )}
          </AnimatePresence>
          <RevealButton
            onClick={handleReveal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reveal Our Nature
          </RevealButton>
        </NamesContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 