const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./Book')

const storeUser = new Schema ({

    email: { type: String },
    userName: { type: String},
    password: { type: String },


});

const RetailerSchema = new Schema ({
    users: { type: Array, default: [ {email: "store@email.com", userName: "admin", password: "password1234"} ] },
    accountType: { type: String, default: "retailer"},
    date: { type: Date, default: Date.now },
    orders:  {type: Array, default: [] }
});

module.exports = Retailer = mongoose.model('Store', RetailerSchema);