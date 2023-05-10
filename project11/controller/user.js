const User = require("../model/user")
const Product = require("../model/products")
const Order = require("../model/order")




const adduser = async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.header('isFreeAppUser',req.body.isFreeAppUser)
        res.status(200).json({success:true,data:user})
    } catch (error) {
        res.status(500).json({success:false,error:error})
    }
}




module.exports = {adduser}
