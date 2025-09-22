const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// In-memory storage for demo purposes (in production, use a real database)
let users = [];

// Registration route with password hashing
app.post("/api/users", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = users.find(u => u.username === username);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Generate a salt (a random value added to the hash to increase security)
        const salt = await bcrypt.genSalt(10); // 10 rounds of salt generation
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with the hashed password
        const newUser = {
            id: Date.now().toString(),
            username,
            password: hashedPassword
        };

        users.push(newUser);

        res.status(201).json({
            message: "User registered successfully",
            user: { username: newUser.username, id: newUser.id }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: "Server error" });
    }
});

// Login route with password comparison
app.post("/api/users/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = users.find(u => u.username === username);
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare the input password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({
            message: "Login successful",
            user: { username: user.username, id: user.id }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: "Server error" });
    }
});

// Get all users (for testing purposes - in production you'd want to protect this)
app.get("/api/users", async (req, res) => {
    try {
        const usersWithoutPasswords = users.map(({ password, ...user }) => user);
        res.json(usersWithoutPasswords);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ error: "Server error" });
    }
});

// Get user details including hashed password (for demonstration)
app.get("/api/users/demo", async (req, res) => {
    try {
        res.json(users.map(user => ({
            id: user.id,
            username: user.username,
            hashedPassword: user.password,
            passwordLength: user.password.length
        })));
    } catch (error) {
        console.error('Get users demo error:', error);
        res.status(500).json({ error: "Server error" });
    }
});

// Health check route
app.get("/", (req, res) => {
    res.json({
        message: "Express bcrypt demo API is running!",
        usersCount: users.length,
        note: "This is a demo version using in-memory storage"
    });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📋 API endpoints:`);
    console.log(`  POST /api/users - Register a new user`);
    console.log(`  POST /api/users/login - Login user`);
    console.log(`  GET /api/users - Get all users (without passwords)`);
    console.log(`  GET /api/users/demo - Get all users (with hashed passwords for demo)`);
    console.log(`  GET / - Health check`);
    console.log(`\n💡 This is a demo version that doesn't require MongoDB!`);
});
