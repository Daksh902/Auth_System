// controller
const User = require('../models/User');
const bcrypt = require('bcrypt');
const emailMiddleware = require('../middlewares/emailMiddleware');

exports.signup = async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.send('Passwords do not match');
    }

    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.send('Email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
        email,
        password: hashedPassword
    });
    await newUser.save();

    // Redirect to login page
    res.redirect('/login');
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists and password is correct
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid email or password');
        }

        // Set session
        req.session.userId = user._id;

        // Redirect to home page
        res.redirect('/home');
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login');
};

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.send('User not found');
        }

        // Generate reset token
        const resetToken = await bcrypt.hash(user.email, 10);

        // Send password reset email
        await emailMiddleware.sendPasswordResetEmail(user.email, resetToken);

        res.send('Password reset email sent');
    } catch (error) {
        console.error('Error sending password reset email:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.send('Passwords do not match');
    }

    try {
        // Logic to reset password based on token
        res.send('Password reset successfully');
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).send('Internal Server Error');
    }
};
