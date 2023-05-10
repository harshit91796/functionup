const mongoose = require('mongoose');

const order = new mongoose.Schema({

	userId: {type : mongoose.Schema.Types.ObjectId,
         ref : "user1",
    },
	productId: {type : mongoose.Schema.Types.ObjectId,
        ref : "product",
   },
	amount: Number,
	isFreeAppUser: Boolean, 
	date : {
        type : Date,
        default : Date.now()
    },
    
})



const Order = mongoose.model("order",order);

module.exports = Order;