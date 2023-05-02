const Book = require("../model/book")
const Author = require("../model/author")

async function addbooks(req,res){
    try {
        const book = await Book.create(req.body)
        res.status(200).json({success:true,data:book})
    } catch (error) {
        res.status(500).json({success:false,error:error})
    }
}


async function updateFile(req,res){
    try {
        const book = await Book.findOneAndUpdate({
            name : req.body.name
        },{
            price : req.body.price
        })
        
    
       
        const author = await Author.findOne({
            author_id : book.author_id
        }
        )
        const data = {
            author_id : author.author_id,
            authorName : author.author_name,
            price : book.price
        }
    
        res.status(200).json({success:true,data:data})
        
    } catch (error) {
        res.status(500).json({success:false,error:error})
        console.log(error)
    }
}

async function range(req,res){
    try {
        const book = await Book.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
        let datasets = await Promise.all(book.map(async (data) => {
            let products = {};
            let last = await Author.findOne({
              author_id: data.author_id
            });
            products.name   = last.author_name;
            
            console.log(last);
            return products;
        }));
        console.log(datasets)
   
    res.status(200).json({ msg: datasets, success: true });
      
    } catch (error) {
        res.status(500).json({success:false,error:error})
    }
}


module.exports = {addbooks,updateFile,range};