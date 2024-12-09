// Select the element you want to animate
const slideInElement = document.querySelector('.slide-in');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Observe the target element
observer.observe(slideInElement);
