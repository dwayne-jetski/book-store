const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    titleLong: {
        type: String,
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
    deweyDecimal: {
        type: String,
        required: true
    },
    binding: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    datePublished: {
        type: String,
        required: true
    },
    edition: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    dimensions: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    msrp: {
        type: Number,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    authors: {
        author1: { type: String, required: true },
        author2: { type: String },
        author3: { type: String },
        author4: { type: String },
        author5: { type: String }
    },
    subjects: {
        type: String,
        required: true
    },
    reviews: {
        type: String,
        required: true
    },
    prices: {
        type: Number,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    }
});

module.exports = Book = mongoose.model('book', BookSchema);