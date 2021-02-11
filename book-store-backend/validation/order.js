const mongoose = require('mongoose');
const Joi = require('joi');

module.exports = function validateBook(data) {

    const orderSchema = Joi.object({

        books: Joi.array().required(),
        total: Joi.number().required(), 

    });

    return orderSchema.validate(data)

}