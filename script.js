// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Scroll animation trigger
const sections = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }
  });
}, {
  threshold: 0.3
});

sections.forEach(section => {
  observer.observe(section);
});

// Create particles
function createParticles() {
  const particles = document.querySelector('.particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    particle.style.opacity = Math.random();
    particles.appendChild(particle);
  }
}

// Create color pieces
function createColorPiece() {
  const piece = document.createElement('div');
  piece.className = 'color-piece';
  piece.style.left = Math.random() * 100 + 'vw';
  piece.style.animationDuration = Math.random() * 2 + 1 + 's';
  piece.style.opacity = Math.random();
  document.querySelector('.color-pieces').appendChild(piece);
  
  const colors = ['#ff69b4', '#ff1493', '#ff69b4', '#ff8da1'];
  piece.style.background = colors[Math.floor(Math.random() * colors.length)];
  
  setTimeout(() => piece.remove(), 3000);
}

// Create floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
  heart.style.animationDuration = Math.random() * 2 + 2 + 's';
  document.querySelector('.hearts-container').appendChild(heart);
  
  setTimeout(() => heart.remove(), 2000);
}

// Background Emojis
const emojis = ['❤️', '💕', '💝', '💖', '✨', '💫', '🌟', '💑', '💏', '💘'];
function createBackgroundEmoji() {
  const emoji = document.createElement('div');
  emoji.className = 'floating-emoji';
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = Math.random() * 10 + 15 + 's';
  document.querySelector('.floating-emojis').appendChild(emoji);
  
  setTimeout(() => emoji.remove(), 25000);
}

setInterval(createBackgroundEmoji, 1000);

// Names and Personality Reveal
const herName = document.getElementById('her-name');
const hisName = document.getElementById('his-name');
const revealBtn = document.getElementById('reveal-btn');
const herPersonality = document.querySelector('.her-personality');
const hisPersonality = document.querySelector('.his-personality');

revealBtn.addEventListener('click', () => {
  if (!herName.value || !hisName.value) {
    alert('Please enter both names to reveal your personalities!');
    return;
  }

  // Update personality headers
  herPersonality.querySelector('h3').textContent = `${herName.value}'s Nature`;
  hisPersonality.querySelector('h3').textContent = `${hisName.value}'s Nature`;

  // Show personalities with animation
  herPersonality.classList.remove('hidden');
  hisPersonality.classList.remove('hidden');
  
  setTimeout(() => {
    herPersonality.classList.add('show');
    hisPersonality.classList.add('show');
    
    // Animate list items
    const lists = document.querySelectorAll('.personality li');
    lists.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`;
    });
  }, 100);

  // Create extra floating emojis for celebration
  for (let i = 0; i < 10; i++) {
    setTimeout(createBackgroundEmoji, i * 200);
  }
});

// Function to reveal future timeline items
function revealFutureItems() {
    const futureItems = document.querySelectorAll('.future-item');
    futureItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.remove('hidden');
            item.classList.add('show');
            
            // Ensure emojis are visible
            const emojis = item.querySelectorAll('.animated-emoji');
            emojis.forEach(emoji => {
                emoji.style.opacity = '1';
                emoji.style.visibility = 'visible';
            });
            
            // Initialize emoji container
            const emojiContainer = item.querySelector('.emoji-container');
            if (emojiContainer) {
                emojiContainer.style.opacity = '1';
                emojiContainer.style.visibility = 'visible';
                emojiContainer.style.display = 'flex';
            }
        }, index * 800); // Stagger the reveal of each item
    });
}

// Handle Yes button click
document.getElementById('yesBtn').addEventListener('click', function() {
    // Create celebratory effects
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 } 
        }));
    }, 250);

    // Reveal future items with a slight delay
    setTimeout(revealFutureItems, 1000);
    
    // Scroll to the first future item smoothly
    setTimeout(() => {
        const firstFutureItem = document.querySelector('.future-item');
        if (firstFutureItem) {
            firstFutureItem.scrollIntoView({ behavior: 'smooth' });
        }
    }, 1500);

    // Disable the buttons
    this.disabled = true;
    const noBtn = document.getElementById('noBtn');
    noBtn.style.display = 'none';
    this.innerHTML = '❤️ Thank You ❤️';
});

// Enhanced No button movement
const noBtn = document.getElementById("noBtn");
const buttonsContainer = document.querySelector(".proposal-buttons");
let moveCount = 0;

function smoothMoveNoButton(e) {
  e.preventDefault();
  moveCount++;
  
  const containerRect = buttonsContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  
  let newX, newY;
  const range = Math.min(100 + (moveCount * 20), 300);
  
  do {
    newX = Math.random() * (containerRect.width - btnRect.width);
    newY = Math.random() * (containerRect.height - btnRect.height);
  } while (
    Math.abs(newX - parseFloat(noBtn.style.left)) < 50 &&
    Math.abs(newY - parseFloat(noBtn.style.top)) < 50
  );
  
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
  noBtn.style.transform = `rotate(${(Math.random() - 0.5) * 20}deg) scale(${0.9 - moveCount * 0.05})`;
  
  for (let i = 0; i < 3; i++) {
    setTimeout(createColorPiece, i * 100);
  }
}

noBtn.addEventListener("mouseenter", smoothMoveNoButton);
noBtn.addEventListener("click", smoothMoveNoButton);
noBtn.addEventListener("touchstart", smoothMoveNoButton);

// Close modal when clicking outside
document.getElementById('love-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('show');
    // Scroll back to ask section
    document.getElementById('ask').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

// Initialize on load
window.addEventListener('load', () => {
  // Start background emojis
  for (let i = 0; i < 10; i++) {
    setTimeout(createBackgroundEmoji, i * 500);
  }
  
  // Background music
  const audio = document.getElementById('bg-music');
  audio.play().catch(() => {
    document.body.addEventListener('click', () => audio.play(), { once: true });
  });
});