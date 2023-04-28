const mongoose = require('mongoose');
const bookSchema = {
    bookName : {
        type : String,
        required : true
    },
    bookAuthor : String,
    tag : [String],
    price : Array,
    currency:String,
    year : {
       type : String,
       default : "2021"
    },
    totalPages : Number,
    stockAvailable : Boolean
}

const Book = mongoose.model("book",bookSchema);

module.exports = Book;