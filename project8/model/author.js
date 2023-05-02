const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    
        author_id :{
            type : Number,
           required : true
        },
        author_name : String,
        age : Number,
        address : String
   
   
})

const Author = mongoose.model("Author",authorSchema);

module.exports = Author;