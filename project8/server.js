const express = require("express");
require("./model/connection")
const indexRouter = require("./Routes/index")
const indexBooks = require("./Routes/book")
const app = express();

app.use(express.json())
app.use("/",indexRouter)
app.use("/books",indexBooks)

app.listen(3000,(req,res)=>{
  console.log("server is on")
}) 