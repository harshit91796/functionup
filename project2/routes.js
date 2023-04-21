const express = require('express');
const  {movie}  = require('./movies.js');


const userRoutes = express.Router();


userRoutes.get('/Movies',(req,res)=>{
    const move = movie();
    res.json({
      move
    })
})

module.exports = userRoutes;