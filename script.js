// Hamburger menu functionality
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Optional: Close menu when a link is clicked (for better UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}
// Scroll to Top Button Functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Smooth scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initially hide button
    scrollTopBtn.style.display = 'none';
}
