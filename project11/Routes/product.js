const express = require("express");
// const {addAuthor,allAuthor,updateAuthor} = require("../controller/author")
const {addproduct} = require("../controller/product")
const router = express.Router();

router.get("/",(req,res)=>{
    console.log('hii')
    res.send("hiiiiii")
})

router.post("/addproduct",addproduct)
router.post("/updateFile",updateFile)
router.get("/range",range)

module.exports = router;