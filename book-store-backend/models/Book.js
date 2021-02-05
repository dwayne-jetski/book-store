const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema ({
    type: String,
});

const SubjectSchema = new Schema ({
    type: String,
})

const BookSchema = new Schema ({
    publisher: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    titleLong: {
        type: String,
        
    },
    isbn: {
        type: String,
        required: true
    },
    isbn13: {
        type: String,
        required: true
    },
    binding: {
        type: String,
        
    },
    language: {
        type: String,
        
    },
    datePublished: {
        type: String,
        
    },
    edition: {
        type: String,
        
    },
    pages: {
        type: Number,
        
    },
    dimensions: {
        type: String,
        
    },
    image: {
        type: String,
        required: true
    },
    msrp: {
        type: Number,
        
    },
    excerpt: {
        type: String,
        
    },
    synopsis: {
        type: String,
        
    },
    authors: {
        type: [AuthorSchema]
    },
    subjects: {
        type: [SubjectSchema],
        required: true
    },
    reviews: {
        type: String,
        
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