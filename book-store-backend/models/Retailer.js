const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./Book')

const storeUser = new Schema ({

    email: { type: String },
    password: { type: String },


});

const RetailerSchema = new Schema ({
    users: { type: Array, required: true, default: [ {email: "admin", password: "password1234"} ] },
    type: { type: String, default: "retailer"},
    orders:  {type: Array, default: [] }
});

module.exports = Retailer = mongoose.model('Store', RetailerSchema);