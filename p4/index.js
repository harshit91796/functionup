const express = require('express');
const router = express.Router();

const app = express();

// app.get("/sol1", function (req, res) {
//     //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
//     let arr= [1,2,3,5,6,7]
//     let sumArr = 0;
//     for(let i=0;i<arr.length;i++){
//         sumArr += arr[i]
//      }
//     const missing = arr.length*(arr[0]+arr[arr.length-1]+1)/2 - sumArr;
//     const missingNumber = arr[missing-1]+1;
//     ///LOGIC WILL GO HERE 
//     res.send(  { data: missingNumber  }  );
// });



app.get('/array/:arr',function(req,res){
    const array = req.params.arr.split(',').map(Number);
    // const array = input.map((str) => Number(str))
    let sumArr = 0;
    for(let i=0;i<array.length;i++){
       sumArr += array[i]
    }
   const missing = array.length*(array[0]+array[array.length-1]+1)/2 - sumArr;
   const miss = array[missing-1]+1;
    res.send({
             miss
            })
            console.log(array)

})


app.listen(5000,()=>{
console.log("server is on")
})