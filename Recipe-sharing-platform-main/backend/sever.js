const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/Users'); // Ensure the User model includes the contact field
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 5000;
app.use(express.json());

// Home page API
app.get('/', (req, res) => {
    res.send("<h1 align=center>Welcome to the MERN stack week 2 session</h1>");
});

// Registration API
app.post('/register', async (req, res) => {
    const { fullname, username, email, password, contact } = req.body; // Include contact
    try {
        // Validate that contact contains only numbers
        if (!/^[0-9]{10}$/.test(contact)) {
            return res.status(400).json({ message: "Invalid contact number. It must be exactly 10 digits." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ fullname, username, email, password: hashedPassword, contact }); // Include contact
        await user.save();
        res.json({ message: "User Registered Successfully!" });
        console.log("User Registration completed...");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
});

// Login API
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        res.json({ message: "Login Successful", username: user.username, contact: user.contact }); // Send contact in response
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
});

// Database Connection
mongoose.connect(process.env.MONGO_URL).then(
    () => console.log("DB connected successfully..")
).catch(
    (err) => console.log(err)
);

// Server
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server is running on port: " + PORT);
});
