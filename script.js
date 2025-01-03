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


window.onload = function () {
    // Hide the loading screen
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '1'; // Fade out effect
    loadingScreen.style.transition = 'opacity 0.5s ease';

    // Wait for the fade-out effect to complete before removing the element
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        
        // Show the main content
        const mainContent = document.getElementById('main-content');
        mainContent.style.display = 'block';
    }, 4000); // Set to 4000ms (4 seconds)
};


const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const dropdownMenu = document.getElementById("dropdownMenu");

menuButton.addEventListener("click", () => {
  dropdownMenu.classList.remove("hidden");
  dropdownMenu.classList.add("visible");
});

closeButton.addEventListener("click", () => {
  dropdownMenu.classList.remove("visible");
  dropdownMenu.classList.add("hidden");
});