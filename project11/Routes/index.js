const express = require("express");
const {adduser} = require("../controller/user")
const {isFreeUserMW,isFreeUserMW2}=require('../middleware/isCheckFreeUser')
const {purchase}=require('../controller/order')
// const {addbooks,allbooks,updatebooks} = require("../controller/book")
const router = express.Router();



router.get("/",(req,res)=>{
    console.log('hii')
    res.send("hiiiiii")
})

router.post("/addUser",isFreeUserMW,adduser)
router.post("/purchase",isFreeUserMW2,purchase)









module.exports = router;