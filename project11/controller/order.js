const User = require("../model/user")
const Product = require("../model/products")
const Order = require("../model/order")


async function purchase(req,res){
    try {
        const product = (await Product.findById(req.body.productId))
        const productPrice = product.price
        const user = (await User.findById(req.body.userId))
        const userAmount = user.balance
        
        if(await User.findById(req.body.userId)&&(Product.findById(req.body.productId))){
            // console.log("idfound")
           if(user.isFreeAppUser===true){
            console.log("isfree")
               await Order.create(req.body)
           }
           else{
            // console.log("not")
              if(productPrice<=userAmount){
                // console.log("balance")
                const newBalance = userAmount - productPrice    
                // user.balance = newUser
                // await user.save()
                await User.findByIdAndUpdate(req.body.userId,{balance : newBalance})
                await Order.create({
                userId: req.body.userId ,
               productId: req.body.productId ,
              
               amount: productPrice,
               isFreeAppUser: false, 
                })
                
              }             
           }
        }
       
        res.status(200).json({success:true})
    } catch (error) {
        res.status(500).json({success:false,error:error})
    }
}

module.exports = {purchase}