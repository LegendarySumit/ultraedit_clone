// Scroll to downloads section on download button click
const scrollToDownloadsBtn = document.getElementById('scrollToDownloads');
const downloadsSection = document.getElementById('downloads');
if (scrollToDownloadsBtn && downloadsSection) {
    scrollToDownloadsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        downloadsSection.scrollIntoView({ behavior: 'smooth' });
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
