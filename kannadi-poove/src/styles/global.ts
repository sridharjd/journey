import { css, keyframes } from '@emotion/react';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
    background-color: #fff5f9;
    color: #333;
    overflow-x: hidden;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes floatEmoji {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes floatBackgroundEmoji {
    0% {
      transform: translateY(100vh) rotate(0deg);
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
    }
  }

  @keyframes loadProgress {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes pulseHeart {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  .particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #ff69b4;
    border-radius: 50%;
    opacity: 0.3;
    animation: floatParticle 3s linear infinite;
  }

  @keyframes floatParticle {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }

  .floating-emoji {
    position: absolute;
    font-size: 2rem;
    opacity: 0.3;
    animation: floatBackgroundEmoji 15s linear infinite;
  }

  .gradient-text {
    background: linear-gradient(45deg, #ff69b4, #ff1493, #ff69b4);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradient 3s ease infinite;
    background-size: 200% 200%;
  }

  .hidden {
    display: none;
  }

  .show {
    display: block;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`; 