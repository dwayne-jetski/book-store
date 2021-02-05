const express = require('express');
const router = express.Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const Retailer = require('../../models/Retailer');
const Book = require('../../models/Book');
const { userInfo } = require('os');

router.post(`/store`, (req, res) => {
    
})