
# Auth System

This is a simple authentication system built with Node.js, Express, and MongoDB.

## Features

- User signup with email and password
- User login with email and password
- Session-based authentication
- Password hashing for security
- Password reset functionality

## Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or accessible remotely
- Gmail account for sending password reset emails (you can use another email service by modifying the `emailMiddleware.js` file)

## Installation

1. Clone this repository:

   ```bash
   git clone (https://github.com/Daksh902/Auth_System/tree/main)


## Navigate into the project directory:

## cd Auth-System
   - Install dependencies:
   - npm install


## Create a .env file in the root directory and add the following environment variables:
   - MONGODB_URI=your_mongodb_uri
   - SESSION_SECRET=your_session_secret
   - EMAIL_USERNAME=your_email_username
   - EMAIL_PASSWORD=your_email_password
   - BASE_URL=http://localhost:3000

## Start the server:
   - npm start
     Visit http://localhost:3000 in your browser to access the application.

## Usage
   - Sign up for a new account by visiting /signup
   - Log in to your account by visiting /login
   - After logging in, you'll be redirected to the home page /home
   - lick on the "Forgot Password" link on the login page if you forget your password
   - Reset your password by clicking on the link sent to your email

## Folder Structure
   - config: Contains configuration files (e.g., database connection)
   - controllers: Contains controller functions for handling HTTP requests
   - middlewares: Contains custom middleware functions (e.g., authentication)
   - models: Contains Mongoose models for interacting with MongoDB
   - public: Contains static assets (e.g., CSS files)
   - routes: Contains route definitions
   - views: Contains EJS templates for rendering HTML
   - index.js: Entry point of the application
   - server.js: File to start the server

## License
   - This project is licensed under the MIT License - see the LICENSE file for details.
