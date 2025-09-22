const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost:27017/express-bcrypt-demo")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define a User Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Registration route with password hashing
app.post("/api/users", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Generate a salt (a random value added to the hash to increase security)
        const salt = await bcrypt.genSalt(10); // 10 rounds of salt generation
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with the hashed password
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: { username: newUser.username, id: newUser._id }
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
        const user = await User.findOne({ username });
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
            user: { username: user.username, id: user._id }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: "Server error" });
    }
});

// Get all users (for testing purposes - in production you'd want to protect this)
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 }); // Exclude password field
        res.json(users);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ error: "Server error" });
    }
});

// Health check route
app.get("/", (req, res) => {
    res.json({ message: "Express bcrypt demo API is running!" });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API endpoints:`);
    console.log(`  POST /api/users - Register a new user`);
    console.log(`  POST /api/users/login - Login user`);
    console.log(`  GET /api/users - Get all users (for testing)`);
    console.log(`  GET / - Health check`);
});
