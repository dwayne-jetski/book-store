const mongoose = require('mongoose');
const Joi = require('joi');

module.exports = function validateBook(data) {

    const bookSchema = Joi.object({
        authors: Joi.array().items(Joi.string.min(1)).required,
        binding: Joi.string().min(0).max(200),
        datePublished: Joi.string().min(0).max(100),
        dimensions: Joi.string().min(0).max(100),
        edition: Joi.string().min(0).max(100),
        image: Joi.string().min(0).max(5000).required(),
        inventory: Joi.number().min(0).required(),
        isbn: Joi.string().min(1).max(10).required(),
        isbn13: Joi.string().min(1).max(13).required(),
        language: Joi.string().min(0).max(20),
        msrp: Joi.number(),
        pages: Joi.number(),
        price: Joi.number.required(),
        publisher: Joi.string(),
        title: Joi.string.min(1).max(200).required(),
        titleLong: Joi.string().min(1).max(200),
        subjects: Joi.array().items(joi.string().min(1)).required(),
        synopsis: Joi.string().min(10).max(600),
        
    });

    return bookSchema.validate(data)

}