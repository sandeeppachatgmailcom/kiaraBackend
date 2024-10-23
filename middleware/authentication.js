const jwt = require('jsonwebtoken');
require('dotenv').config();
const createToken = (req, res, next) => {
    try {
        // Create the token using the user's email and a secret key
        const token = jwt.sign({ email: req?.body?.email }, 'secretKey', { expiresIn: '1h' });

        // Set the token in an HTTP-only cookie for security
        res.cookie('authToken', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict',  
            maxAge: 60 * 60 * 1000  
        });

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        // Handle errors and send a response if token creation fails
        res.status(500).json({ error: 'Failed to create token' });
    }
};

module.exports = {createToken}
