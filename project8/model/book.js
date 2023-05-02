const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name : String,
    price : Number,
    author_id : Number,
    rating : Number

})


const Book = mongoose.model("kitab",bookSchema);

module.exports = Book;