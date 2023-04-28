const express = require("express");
const router = express.Router();
const {createBook,bookList,getBooksInYear,getParticularBooks,getXINRBooks,getRandomBooks} = require("../controller/controller")

router.get("/",(req,res)=>{
    res.send("hello")
})
router.post("/createBook",createBook);
router.get("/bookList",bookList)
router.post("/getBooksInYear",getBooksInYear);
router.post("/getParticularBooks",getParticularBooks)
router.get("/getXINRBooks",getXINRBooks);
router.get("/getRandomBooks",getRandomBooks);


module.exports = router;