const mongoose = require('mongoose');

const user = new mongoose.Schema({

        name: String,
        balance: Number, // Default balance at user registration is 100
        address: String,
        age: Number,
        gender: String ,// Allowed values are - “male”, “female”, “other”
        isFreeAppUser: {
                type :String,
                required : true,
        }// Default false value.
        


})

const User = mongoose.model("user1", user);

module.exports = User;