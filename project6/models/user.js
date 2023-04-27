const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
     bookName:String,
     bookAuthor:String,
     category : String,
     year:Number
     
    
});

const Book = mongoose.model("Book",bookSchema);

module.exports = Book;