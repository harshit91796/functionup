const Author = require("../model/author")
const Book = require("../model/book")



const addAuthor = async(req,res)=>{
    try {
        const author = await Author.create(req.body)
        res.status(200).json({success:true,data:author})
    } catch (error) {
        res.status(500).json({success:false,error:error})
    }
}


const findAuthor = async(req,res)=>{
    try {
        const author = await Author.findOne({
            author_name : req.body.author_name
        })

        const books = await Book.find({
            author_id : author.author_id
        })

        res.status(200).json({success:true,data:books})
    } catch (error) {
        res.status(500).json({success:false,error:error})
        console.log(error)
    }
}

const updateAuthor = async(req,res)=>{
    try {
        const author = await author.find()
        res.status(200).json({success:true,author:author})
    } catch (error) {
        res.status(500).json({success:false,error:error})
    }
}

module.exports = {addAuthor,findAuthor,updateAuthor}
