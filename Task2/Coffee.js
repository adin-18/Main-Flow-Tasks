// Toggle Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

window.addEventListener('load', function() {
    // Get the hero and about sections
    const heroSection = document.querySelector('.hero');
    const aboutSection = document.querySelector('.about');
  
    // Add slide animation to the hero section
    heroSection.style.animation = 'slideInLeft 2s ease-in-out';
  
    // Add slide animation to the about section with a delay
    setTimeout(function() {
      aboutSection.style.animation = 'slideInRight 2s ease-in-out';
    }, 500); // delay of 500ms (0.5 seconds)
  });