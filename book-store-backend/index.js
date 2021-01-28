const connectDB = require('./startup/db');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser middleware

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

//Connect to database via ./startup/db
connectDB();

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server up and running on port ${port}`));
