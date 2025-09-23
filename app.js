const textElement = document.querySelector('.typewriter-text');
const words = [
  "Welcome :]", 
  "Skills:",
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js (basics)",
  "OpenGL",
  "Accessibility (WCAG/AODA)",
  "Responsive Design",
  "UI / UX Design",
  "Git & GitHub",
  "Problem-Solving",
  "Communication",
  "Teamwork",
  "Adaptability"
];
 // Array of words to cycle through
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriterEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    // Delete characters
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Type characters
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Check if word is fully typed or deleted
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeWriterEffect, 1500); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Move to next word
    setTimeout(typeWriterEffect, 500); // Pause before typing next word
  } else {
    // Continue typing or deleting
    setTimeout(typeWriterEffect, isDeleting ? 75 : 150); // Adjust typing/deleting speed
  }
}

// Start the effect
document.addEventListener('DOMContentLoaded', typeWriterEffect);