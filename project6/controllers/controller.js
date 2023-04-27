const Book = require("../models/user")


const createBook = async(req,res)=>{
    
    const data = await Book.create(req.body);
 
    console.log(data)
     
    
 }

 const findBook = async (req,res)=>{
    
    const books = await Book.find();
    
  
    res.json({data:books,status : true})
}

module.exports = {createBook,findBook}