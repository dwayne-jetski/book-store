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
router.post('/users/register', (req, res) => {
    //form validation
    
    console.log(req.body)

    const { errors, isValid } = validateRegisterInput(req.body);

    console.log(req.body)

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
router.post('/users/login', (req, res) => {
    //form validation

    console.log(req.body)
    const { errors, isValid } = validateLoginInput(req.body);
    console.log(req.body);

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

router.get(`/users/:id`, async (req, res) => {
    //get store info
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(400).send(`The store with id "${req.params.id}" does not exist...`);
        }
        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
    

});

router.put(`/users/orders/addorder/:id`, async (req, res) => {
    try{

        const id = req.params.id
        const updates = {
            $push: {
                orders: req.body
            }
        }

        const result = await User.findByIdAndUpdate(id, updates, {new: true})
        .then(()=> {
            res.status(200).json({
                message: `Order Placed`
            });
        });

    } catch (ex) {
        console.log(ex)
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
})

router.put(`/users/cart/addbook/:id`, async (req, res) =>{
    try{

        const id = req.params.id;
        const updates = {
            $push: {
                cart: req.body
            }
        };

        console.log(updates);

        const result = await User.findByIdAndUpdate(id, updates, {new: true})
        .then(() => {
            res.status(200).json({
                message: `${updates.title} was added to your cart!`
            });
        });

        res.send(result);


    } catch (ex) {
        console.log(ex);
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


module.exports = router;