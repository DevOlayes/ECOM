// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle click events on social icons
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.getAttribute('href');
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// GSAP Animations
gsap.from('.hero-content', { opacity: 0, y: -50, duration: 1 });
gsap.from('.hero-image img', { opacity: 0, x: 50, duration: 1 });

// Popup Order Form
const orderPopup = document.getElementById('orderPopup');
const buyNowBtn = document.getElementById('buyNowBtn');
const closePopup = document.getElementById('closePopup');

buyNowBtn.addEventListener('click', function(event) {
    event.preventDefault();
    orderPopup.style.display = 'flex';
});

closePopup.addEventListener('click', function() {
    orderPopup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === orderPopup) {
        orderPopup.style.display = 'none';
    }
});

// Order form submission handler (you can replace this with actual form handling logic)
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Order submitted successfully!');
    orderPopup.style.display = 'none';
});

// JavaScript to toggle the menu
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
