const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const { isAuthenticated } = require('./middlewares/authMiddleware');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Middleware for authentication
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.userId ? true : false;
    next();
});

app.use('/', isAuthenticated, authRoutes); // Protected routes

module.exports = app;