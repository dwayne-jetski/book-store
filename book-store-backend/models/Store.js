const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./Book')

const StoreSchema = new Schema ({
    email: { type: String },
    password: { type: String },
    type: { type: String, default: "retailer"},
    inventory: [Book],
    orders:  []
});

module.exports = Store = mongoose.model('Store', StoreSchema);