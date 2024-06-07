const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()
module.exports = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            const user = await User.findOne({ username });
            if (!user) {
                throw new Error("Invalid username or password");
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid username or password");
            }

            const token = jwt.sign({
                id: user._id,
                username: user.username
            }, process.env.SECRET_KEY, { expiresIn: '1h' });

            res.json({
                message: "Login successful",
                user: { // Include user data
                    id: user._id,
                    username: user.username,
                    role: user.role,
                    isAdmin: user.role === 'admin'
                },
                token
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    regis: async (req, res) => {
        try {
            const { username, password } = req.body;
    
            if (!password || !username) {
                throw new Error('Username and password are required');
            }
    
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                throw new Error('Username already in use');
            }
    
            const hashedPassword = await bcrypt.hash(password, 10);
    
            const newUser = await User.create({
                username,
                password: hashedPassword
            });
    
            res.status(201).json({
                message: 'Registration successful',
                user: {
                    id: newUser._id,
                    username: newUser.username
                }
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }    
};
