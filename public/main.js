const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const logo = document.getElementById('logo');
const scrollTopBtn = document.getElementById("scrollTopBtn");
const navbar = document.getElementById('header');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('mt-[0]');
    menuToggle.classList.add('hidden');
    logo.classList.add('hidden');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('mt-[0]');
    menuToggle.classList.remove('hidden');
    logo.classList.remove('hidden');
});

// Show "Scroll to Top" button when user scrolls down 20px
window.onscroll = () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    // Toggle scroll top button
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

// Scroll to the top when the user clicks the button
scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Disable Right-Click
//document.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
// });

// Block Common Keyboard Shortcuts
//document.addEventListener('keydown', function (event) {
    // F12 key
    if (event.key === "F12") {
        event.preventDefault();
    }

    // Ctrl+Shift+I (Inspect)
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
    }

    // Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.key === "J") {
        event.preventDefault();
    }

    // Ctrl+U (View Source)
    if (event.ctrlKey && event.key === "U") {
        event.preventDefault();
    }
// });

// Disable Developer Tools Detection (Aggressive)
function detectDevTools() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            // Detected developer tools open
            alert('Developer tools are open! Please close them.');
            // You could also redirect the user or take another action here
        }
    });
}

setInterval(detectDevTools, 1000); // Check every second