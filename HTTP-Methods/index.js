const express = require('express');

const app = express();


// Middleware to parse JSON data
app.use(express.json());

// Sample user data (Stored in an array)
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// GET – Fetch and display a list of users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST – Add a new user to the list
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.json({ message: 'User added successfully!', user: newUser });
});

// PUT – Update an existing user’s information
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    let user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found!' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    res.json({ message: 'User updated successfully!', user });
});

// DELETE – Remove a user from the list
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.json({ message: 'User deleted successfully!' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
