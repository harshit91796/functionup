const express = require('express');
const userRoutes = require('./routes.js');
const movie = require('./movies.js')
const film = require('./film.js')
const app = express();


app.listen(3000,()=>{
    console.log('server is on')
})

// app.get('/Movies',(req,res)=>{
//     const move = movie();
//     res.json({
//       move
//     })
// })

// app.get('/Movies/:index',(req,res)=>{
//    const arr = movie();
//     const a = req.params.index;
//     const final = arr[a]
//     res.json({
//      final
//     })
// })

// app.get('/Movies/:index',(req,res)=>{
//     const arr = movie();
//      const a = req.params.index;
//      const final = arr[a];
//     const b = "not the legnth"
//      if(a>arr.length || a <0){
        
//         res.json({b})
//      }
//      else{
//         res.json({
//             final
//            })
//      }
     
//  })


// app.get('/films',(req,res)=>{
  
//     res.json({
//      film
//     })
// })

// app.get('/films:index',(req,res)=>{
//     const arr = film;
//        const a = req.params.index;
//        const final = arr[a];
//     res.json({
//      final
//     })
// })

// app.get('/films/:id', function (req, res) {
//     const id = req.params.id;
//     const filmId = film[id]['id'];
//     const filmName = film[id]['name'];
//     if (id < film.length) {
//         res.json({filmId, filmName});
//     } else {
//         error = "this is error"
//         res.json({error});
//     }
// })