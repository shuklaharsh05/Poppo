const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to Agency Page
app.get('/agency', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './agency-corporation/index.html'));
});

// Route to Blog Page
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './blog/index.html'));
});

// Route to About Page
app.get('/about', (req, res) => {
    res.redirect('/#about');
});

// Route to Privacy Policy Page
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './privacy-policy/index.html'));
});

// Route to Terms and Conditions Page
app.get('/terms-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './terms-and-conditions/index.html'));
});

// Route to Host Blog Page
app.get('/blog/poppo-host-registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './blog/poppo-host-registration.html'));
});

// Route to Agency Blog Page
app.get('/blog/become-poppo-agent', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './blog/become-poppo-agent.html'));
});

// Route to Coin Seller Blog Page
app.get('/blog/poppo-coin-seller', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './blog/poppo-coin-seller.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});