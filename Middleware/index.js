const express = require('express');

const app = express();


//  Built-in Middleware for Parsing JSON & Form Data
app.use(express.json()); // Parses JSON requests
app.use(express.urlencoded({ extended: true })); // Parses form data (URL-encoded)

//  Logging Middleware - Logs request details
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next(); // Pass control to the next middleware/route handler
});

//  Authentication Middleware - Protects /profile route
const authenticate = (req, res, next) => {
    if (req.query.auth === 'true') {
        next(); // Allow access
    } else {
        res.status(403).json({ message: 'Access denied! Authentication required.' });
    }
};

// Public Route - Home
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

//  Protected Route - Profile (Only accessible if ?auth=true is in the url)
app.get('/profile', authenticate, (req, res) => {
    res.send('Welcome to your profile!');
});

//  Route to Test JSON Middleware (Send JSON in POST request)
app.post('/data', (req, res) => {
    console.log('Received JSON Data:', req.body);
    res.json({ message: 'JSON received!', data: req.body });
});

//  Route to Test Form Data Middleware (Send Form Data in POST request)
app.post('/form', (req, res) => {
    console.log('Received Form Data:', req.body);
    res.json({ message: 'Form data received!', data: req.body });
});

// Force an Error for Testing
app.get('/error', (req, res, next) => {
    next(new Error('This is a test error!'));
});

//  Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ message: 'Something went wrong! Please try again later.' });
});

// Start Server
const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
