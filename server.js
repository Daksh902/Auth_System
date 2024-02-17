const app = require('./index');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB().then(() => {
    // Start the server after successful database connection
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});