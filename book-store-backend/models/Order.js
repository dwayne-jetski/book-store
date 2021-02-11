const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./Book');

const OrderSchema = new Schema({
    books: { type: [Book], required: true },
    total: { type: Number, required: true },
    date: {type: Date, default: Date.now },

});

module.exports = Order = mongoose.model('OrderSchema', OrderSchema);