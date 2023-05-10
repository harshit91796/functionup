const mongoose = require('mongoose');

const product = new mongoose.Schema({
    name : String,
    price : Number,
    category : String,
    
})


const Product = mongoose.model("product",product);

module.exports = Product;