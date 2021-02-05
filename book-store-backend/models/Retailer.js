const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./Book')

const Retailer = new Schema ({
    email: { type: String },
    password: { type: String },
    type: { type: String, default: "retailer"},
    orders:  []
});

module.exports = Retailer = mongoose.model('Store', RetailerSchema);