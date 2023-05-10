const User = require("../model/user")
const Product = require("../model/products")
const Order = require("../model/order")

async function addproduct(req,res){
    try {
        const book = await Product.create(req.body)
        res.status(200).json({success:true,data:book})
    } catch (error) {
        res.status(500).json({success:false,error:error})
    }
}




module.exports = {addproduct};