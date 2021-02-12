const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./Book');

const OrderSchema = new Schema({
    books: { type: [Book], required: true },
    total: { type: Number, required: true },
    addresses: { type: Array },
    date: {type: Date, default: Date.now },
    contact: { type: Array }

});

module.exports = Order = mongoose.model('OrderSchema', OrderSchema);