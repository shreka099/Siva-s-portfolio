// script.js
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Toggle the mobile menu when the menu icon is clicked
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});

// Close the mobile menu when a link is clicked
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Close the menu when a link is clicked
    });
});