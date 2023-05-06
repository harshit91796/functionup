const express = require('express');
const {mid} = require("../controller/controller")
const router = express.Router();

const assignmentMW = (req,resp,next)=>{
    var currentDate = new Date();
    var datetime = currentDate.getDate()+"/"+
    (currentDate.getMonth()+1)+"/"+currentDate.getFullYear()+" IST "+
    currentDate.getHours()+":"+currentDate.getMinutes()+":"+
    currentDate.getSeconds();

    let ip = req.ip 
    let url = req.originalUrl
    console.log(`${datetime} ${ip} ${url}`)
    next()
}


router.get('/',assignmentMW,mid)

module.exports = router;