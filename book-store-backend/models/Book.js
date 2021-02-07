const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    authors: {
        type: [String]
    },
    binding: {
        type: String,
        default: ''
        
    },
    datePublished: {
        type: String,
        default: ''
    },
    dimensions: {
        type: String,
        default: ''
    },
    edition: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    isbn13: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: ''
        
    },
    msrp: {
        type: Number,
        default: 00
        
    },
    pages: {
        type: Number,
        default: 000

    },
    price: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        default: ''

    },
    title: {
        type: String,
        required: true
    },
    titleLong: {
        type: String,
        default: ''

    },
    subjects: {
        type: [String],
        required: true
    },
    synopsis: {
        type: String,
        default: ''

    },
});

module.exports = Book = mongoose.model('book', BookSchema);