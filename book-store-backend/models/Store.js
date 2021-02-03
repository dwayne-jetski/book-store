const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./Book')

const StoreSchema = new Schema ({
    inventory: [Book],
    orders:  []
});

module.exports = Store = mongoose.model('Store', StoreSchema);