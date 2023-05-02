const express = require("express");
// const {addAuthor,allAuthor,updateAuthor} = require("../controller/author")
const {addbooks,updateFile,range} = require("../controller/book")
const router = express.Router();

router.get("/",(req,res)=>{
    console.log('hii')
    res.send("hiiiiii")
})

router.post("/addbooks",addbooks)
router.post("/updateFile",updateFile)
router.get("/range",range)

module.exports = router;