const Book = require("../models/users")

async function createBook (req,res){
    // const {bookName,bookAuthor,price,totalPages,currency} = req.body;

    const data = await Book.create(req.body)
    res.json({data: data,status:true})
    console.log(req.body)
}

async function bookList(req,res){
    const data = await Book.find();
    const books = data.map((x)=>{
        return ({bookName:x.bookName , bookAuthor:x.bookAuthor})
    })

    res.json({data: books,status:true})
}


async function getBooksInYear(req,res){
    const data = await Book.find({year:req.body.year});
    res.json({data: data,status:true})
}


async function getParticularBooks(req,res){
    const data = await Book.find({$or:[{bookName: req.body.keyword},{year:req.body.keyword}]})
    res.json({data: data,status:true})
    console.log(data)
}


async function getXINRBooks(req,res){
    const data = await Book.find({$or:[{price:"100INR"},{price:"200INR"}]})
    res.json({data: data,status:true})
}


async function getRandomBooks(req,res){
    const data = await Book.find({$or:[{stockAvailable:true},{totalPages:{ $gte: 499}}]})
    res.json({data: data,status:true})
}



module.exports ={createBook,bookList,getBooksInYear,getParticularBooks,getXINRBooks,getRandomBooks}