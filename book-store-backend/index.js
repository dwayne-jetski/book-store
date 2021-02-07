const connectDB = require('./startup/db');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const retailer = require('./routes/api/retailer'); 

const app = express();

//Bodyparser middleware

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

//Connect to database via ./startup/db
connectDB();

// Passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

//routes
app.use('/api', retailer);
app.use('/api', users);

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server up and running on port ${port}`));
