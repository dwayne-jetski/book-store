const connectDB = require('./startup/db');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const users = require('./routes/api/users');
const retailer = require('./routes/api/retailer'); 
const heroImage = require('./routes/api/heroImage');
const app = express();



//Bodyparser middleware
app.use(cors());
app.use(express.json());
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
app.use('/api', heroImage);
app.use('/api', users);

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server up and running on port ${port}`));
