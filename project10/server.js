const express = require('express')
const indexRoute = require("./routes/routes")
const app = express();
const dotenv = require("dotenv")
dotenv.config();
const port = process.env.PORT || 3000

app.use('/',indexRoute)

app.listen(port,(req,res)=>{
    console.log("server is on")
})