const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create Schema

const creditCard = new Schema({
    ccNumber: { type: Number, required: true, default: '' },
    security: { type: Number, required: true },
    zip_code: { type: Number, required: true }
})

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
    },
    paymentMethods: {
      type: [creditCard],
      default: []

    },
    shippingAddress: {
        address: { type: String,  default: '' },
        address2: { tyep: String, default: '' },
        city: { type: String,  default: '' },
        state: { type: String, min: 2, max: 2, default: ''},
        zip_code: { type: String, default: '' }

    }

});




module.exports = User = mongoose.model('users', UserSchema);