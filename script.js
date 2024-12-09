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
