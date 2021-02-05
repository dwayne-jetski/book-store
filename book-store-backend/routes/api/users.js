const express = require('express');
const router = express.Router();
const bycrypt = require('bcryptjs');
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
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if(user) {
            return res.status(400).json({ email: "Email aready exists"});
        } else {
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            });

            console.log(newUser, req.body)

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

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
    //form validation

    console.log(req.body)
    const { errors, isValid } = validateLoginInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //find user by email
    User.findOne({ email }).then(user => {
        //check if user exists
        if(!user) {
            res.status(404).json({ emailnotfound: "Email not found"
    })
        }

        //check password
        bycrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                //user matched
                //create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

                //sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 3155629236 //1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect"});
            }
        });
    });
});

module.exports = router;