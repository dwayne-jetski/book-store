const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const UserSchema = new Schema ({
    type: {
        type: String,
        default: "customer"
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    }
});


module.exports = User = mongoose.model('users', UserSchema);