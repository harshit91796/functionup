
const express = require("express")
const indexRouter = require("./Routes/index")
const app = express();
require("./models/connection")


app.use(express.json())

app.use("/",indexRouter)

app.listen(3000,()=>{
    console.log("server is on")
})


