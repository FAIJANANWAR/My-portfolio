const jwt = require('jsonwebtoken');

// Middleware to protect routes and verify JWT from httpOnly cookie
const requireAuth = (req, res, next) => {
    // We strictly read the token from the cookies, NEVER from localStorage or headers
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach the authenticated user payload (e.g., id) to the request object
        req.user = decoded;
        
        next();
    } catch (error) {
        // Token is invalid or expired
        console.error('JWT Verification Error:', error.message);
        return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }
};

module.exports = { requireAuth };
