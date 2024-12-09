// Select the element you want to animate
const slideInElement = document.querySelector('.slide-in');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the class when in view
        } else {
            entry.target.classList.remove('visible'); // Remove the class when out of view
        }
    });
}, { threshold: 0.1 }); // Adjust threshold as needed

// Observe the target element
observer.observe(slideInElement);



// Wait until all page content is fully loaded
window.onload = function () {
    // Hide the loading screen
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0'; // Fade out effect
    loadingScreen.style.transition = 'opacity 0.5s ease';

    // Wait for the fade-out effect to complete before removing the element
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        
        // Show the main content
        const mainContent = document
