const express = require('express');
const router = express.Router();
const bycrypt = require('bycriptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const User = require('../../models/User');
const { userInfo } = require('os');

//@route POST api/users/register
//@desc Register user
//@access Public
router.post('/register', (req, res) => {
    //form validation
    
    const { errors, isValid } = validateRegisterInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(error);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if(user) {
            return res.status(400).json({ email: "Email aready exists"});
        } else {
            const newUser = new User({
                forstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            });

            //hash password before saving in database
            bycrypt.genSalt(10, (err, salt) => {
                bycrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});