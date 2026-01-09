const express = require('express');
const router = express.Router();
const User = require('../models/User'); // User model import kiya
const { body, validationResult } = require('express-validator'); // Validation ke liye
const bcrypt = require('bcryptjs'); // Password hashing ke liye

// ROUTE 1: User Create karne ke liye (POST "/api/auth/createuser") - No Login Required
router.post('/createuser', [
    // Validation Rules
    body('name', 'Name must be at least 3 chars').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 chars').isLength({ min: 5 }),
], async (req, res) => {
    
    // 1. Agar validation fail ho jaye toh error return karo
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // 2. Check karo ki kya user pehle se exist karta hai?
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists" });
        }

        // 3. Password ko secure (Hash) karo
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);

        // 4. Database mein naya User create karo
        user = await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
        });

        // 5. Response bhejo
        res.json({ message: "User Created Successfully", userId: user.id });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;