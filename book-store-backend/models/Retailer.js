const { date } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./Book')



const RetailerSchema = new Schema ({
    storeName: { type: String, required: true },
    userName: { type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true},
    accountType: { type: String, default: "retailer"},
    date: { type: Date, default: Date.now },
    openOrders:  {type: Array, default: [] },
    completedOrders: { type: Array, default: [] }
});

module.exports = Retailer = mongoose.model('Store', RetailerSchema);