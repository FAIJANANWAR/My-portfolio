const User = require('../models/User.model');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d' // Token expires in 1 day
    });
};

// Set secure httpOnly cookie
const setTokenCookie = (res, token) => {
    res.cookie('jwt', token, {
        httpOnly: true, // Prevents XSS attacks (cookie cannot be accessed via JS)
        secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
        sameSite: 'none', // Prevents CSRF attacks
        maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    });
};

const registerUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Password hashing is handled by the pre-save middleware in User.model.js
        const user = await User.create({ email, password });

        const token = generateToken(user._id);
        setTokenCookie(res, token);

        res.status(201).json({
            message: 'User registered successfully',
            user: { id: user._id, email: user.email }
        });
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Use the comparePassword method defined in User.model.js
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user._id);
        setTokenCookie(res, token);

        res.status(200).json({
            message: 'Login successful',
            user: { id: user._id, email: user.email }
        });
    } catch (error) {
        next(error);
    }
};

const logoutUser = (req, res) => {
    // Clear the cookie by setting it to empty and expiring it immediately
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'Logged out successfully' });
};

// Route to get current authenticated user data
const getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getMe
};
