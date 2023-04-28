const express = require("express");
require("./models/connection")
const indexRouter = require("./routes/routes")


const app = express();

app.use(express.json())

app.use('/',indexRouter)


app.listen(3000,(req,res)=>{
    console.log("server is on")
})