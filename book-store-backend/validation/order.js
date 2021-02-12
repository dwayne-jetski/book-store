const mongoose = require('mongoose');
const Joi = require('joi');

module.exports = function validateBook(data) {

    const orderSchema = Joi.object({

        books: Joi.array().required(),
        total: Joi.number().required(), 
        addresses: Joi.array().required(),
        contact: Joi.array().required()

    });

    return orderSchema.validate(data)

}