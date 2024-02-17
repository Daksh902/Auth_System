// routes
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/authMiddleware'); 

router.get('/signup', (req, res) => {
    res.render('pages/signup');
});


router.post('/signup', (req, res) => {
    authController.signup(req, res);
});

router.get('/login', (req, res) => {
    res.render('pages/login');
});

router.post('/login', (req, res) => {
    authController.login(req, res);
});

router.get('/home', isAuthenticated, (req, res) => {
    res.render('pages/home');
});

router.get('/logout', (req, res) => {
    authController.logout(req, res);
});

router.post('/forgot-password', (req, res) => {
    authController.forgotPassword(req, res);
});

router.post('/reset-password/:token', (req, res) => {
    authController.resetPassword(req, res);
});

module.exports = router;
