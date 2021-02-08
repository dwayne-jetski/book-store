const express = require('express');
const router = express.Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//load input validation
const validateBook = require('../../validation/book');
const validateNewRetailUserInput = require("../../validation/retailer");


const Retailer = require('../../models/Retailer');
const Book = require('../../models/Book');
const { userInfo } = require('os');

router.post(`/store/createstore`, (req, res) => {
    //create a store

    try { 

        const retailer = new Retailer;

        retailer.save();
        return res.send(retailer)

    } catch(ex) {
        console.log(ex);
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }


});

router.post(`/store/createnewuser`, async (req, res) => {

    const { errors, isValid } = validateNewRetailUserInput(req.body);
    
})


router.get(`/store`, async (req, res) => {
    //get store info
    try{
        const retailer = await Retailer.find();
        return res.send(retailer); 
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
    

});

router.put(`/store`, (req, res) => {
    //edit store info

    Retailer.findByIdAndUpdate(
        req.params.id,

        //the change to be made. Mongoose will smartly combinde your existing document with this change which allows for partial updates too
        req.body,

        //an option that asks mongoose to run the updated version of the document instead of the pre-updated one
        {new: true},

        // the calback function
        (err, retailer) => {
            //handle any possible database errors
            if (err) return res.status.send(err);
            return res.send(retailer);
        }
    );

});

router.post(`/store/products`, (req, res) => {
    //create a product

   

    try {
        const { error } = validateBook(req.body);
        if (error){
            console.log(error);
            return res.status(400).send(error);
        }

        const book = new Book({
            authors: req.body.authors,
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

        book.save();
        
        return res.send(book);

    } catch(ex) {
        console.log(ex);
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }

});

router.get(`/store/products`, async (req, res) =>{
    //get a list of ALL products
    try{
        const books = await Book.find();
        return res.send(books); 
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get(`/store/products/:id`, async (req, res) => {
    //get a list of product by id

    try{ 

        const book = await Book.findById(req.params.id);

        if(!product){

            return res.status(400).send(`The product with id "${req.params.id}" does not exist`)
        }
        
        return res.send(book);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }

});


//may just take care of this on the front end by filtering the array
router.get(`store/products/subject`, (req, res) => {
    //get a list of products by subject
    const subject = req.subject;

    Book.find({'subjects': {$in: subject}}, )

})

module.exports = router;