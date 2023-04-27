const express = require("express")
const router = express.Router();
const Book = require("../models/user");
const { createBook, findBook } = require("../controllers/controller");


router.post("/",createBook )

router.get("/uno",findBook)

module.exports = router;