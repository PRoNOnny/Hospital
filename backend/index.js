// Import the required modules
const express = require('express');
const cors = require('cors');
const config = require('config');

// Create an instance of an Express application
const app = express();

const AppConfig = require('./config/AppConfig');
const appCfgInstance = new AppConfig(config);

const repo = require('./dbconnect/db')
const db = new repo()

// Middleware to parse incoming JSON request bodies
app.use(express.json());
app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization,token,id,mode');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

const userResource = require('./resource/userResource')
const postResource = require('./resource/postResource')
const bookResource = require('./resource/bookResource')

const user = new userResource(db)
const post = new postResource(db)
const book = new bookResource(db)

// Start the server
app.listen(appCfgInstance.appPort, appCfgInstance.appLocalHost,() => {

    user.init(app)
    post.init(app)
    book.init(app)

    console.log(`Server is running on ${appCfgInstance.appLocalHost}:${appCfgInstance.appPort}`);
});