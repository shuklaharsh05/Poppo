const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const logo = document.getElementById('logo');
const scrollTopBtn = document.getElementById("scrollTopBtn");
const navbar = document.getElementById('header');

// Function to toggle mobile menu visibility
const toggleMobileMenu = (isOpen) => {
    mobileMenu.classList.toggle('mt-[0]', isOpen);
    menuToggle.classList.toggle('hidden', isOpen);
    logo.classList.toggle('hidden', isOpen);
};

// Event listeners for menu toggling
menuToggle.addEventListener('click', () => toggleMobileMenu(true));
closeMenu.addEventListener('click', () => toggleMobileMenu(false));

// Function to handle scroll events
const handleScroll = () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Toggle scroll top button visibility
    scrollTopBtn.style.display = scrollPosition > 20 ? 'block' : 'none';

    // Change navbar background on scroll
    if (scrollPosition > 50) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-[#750DBC]', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-[#750DBC]', 'shadow-lg');
        navbar.classList.add('bg-transparent');
    }
};

// Debounce function to optimize scroll handling
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Attach scroll event listener with debouncing
window.addEventListener('scroll', debounce(handleScroll, 100));

// Scroll to the top when the user clicks the button
scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Disable Right-Click
document.addEventListener('contextmenu', event => event.preventDefault());

// Block Common Keyboard Shortcuts
document.addEventListener('keydown', event => {
    const blockedKeys = [
        { keys: ['F12'] },
        { keys: ['I'], ctrl: true, shift: true },
        { keys: ['J'], ctrl: true, shift: true },
        { keys: ['U'], ctrl: true }
    ];

    blockedKeys.forEach(({ keys, ctrl, shift }) => {
        if (keys.includes(event.key) && (ctrl ? event.ctrlKey : true) && (shift ? event.shiftKey : true)) {
            event.preventDefault();
        }
    });
});
