const express = require('express');
const router = express.Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//load input validation
const validateBook = require('../../validation/book');

const Retailer = require('../../models/Retailer');
const Book = require('../../models/Book');
const { userInfo } = require('os');

router.post(`/store`, (req, res) => {
    //create a store
});

router.get(`/store`, (req, res) => {
    //get store info
});

router.put(`/store`, (req, res) => {
    //edit store info

});

router.post(`/store/products`, (req, res) => {
    //create a product
    try {
        const { error } = validateBook(req.body);
        if (error){
            return res.status(400).send(error);
        }

        const book = new Book({
            name: req.body.name,
            binding: req.body.binding,
            datePublished: req.body.datePublished,
            dimensions: req.body.dimensions,
            edition: req.body.edition,
            image: req.body.image,
            inventory: req.body.inventory,
            isbn: req.body.isbn,
            isbn13: req.body.isbn13,
            language: req.body.language,
            msrp: req.body.msrp,
            pages: req.body.pages,
            price: req.body.price,
            publisher: req.body.publisher,
            title: req.body.title,
            titleLong: req.body.titleLong,
            subjects: req.body.subjects,
            synopsis: req.body.synopsis

        });

        await book.save();

    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }

});

router.get(`/store/products`, (req, res) =>{
    //get a list of ALL products
});

router.get(`/store/products/:id`, (req, res) => {
    //get a list of product by id
});

router.get(`store/products/subject`, (req, res) => {
    //get a list of products by subject
    const subject = req.subject;

    Book.find({'subjects': {$in: subject}}, )

})

module.exports = router;