const express = require("express");
const {addAuthor,findAuthor,updateAuthor} = require("../controller/author")
// const {addbooks,allbooks,updatebooks} = require("../controller/book")
const router = express.Router();



router.get("/",(req,res)=>{
    console.log('hii')
    res.send("hiiiiii")
})

router.post("/addAuthor",addAuthor)
router.post("/findAuthor",findAuthor)
router.put("/",updateAuthor)
// router.delete("/",allAuthor)








module.exports = router;