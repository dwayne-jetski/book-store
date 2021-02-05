const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./Book')

const InventorySchema = new Schema({
    type: [Book]
});

module.exports = Inventory = mongoose.model('inventory', InventorySchema);