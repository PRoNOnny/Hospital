// Import the required modules
const express = require('express');
const cors = require('cors');

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());
app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization,token,id,mode');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
})


const userResourcce = require('./resource/userResource')

const user = new userResourcce()

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {

    user.init(app)
    console.log(`Server is running on http://localhost:${PORT}`);
});