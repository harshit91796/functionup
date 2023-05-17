// 1. find the maximum element in an array

// const arr = [1,4,2,6,8]
// let i = 0
// let grey = 0 
// while(i<arr.length){
//     if(arr[i]>grey){
//         grey = arr[i]
//     }
//     i++
// }

// console.log(grey)

// 2. find the minimum element in an array

// const arr = [1,4,2,6,8]
// let i = 0
// let grey = Number.MAX_VALUE  
// while(i<arr.length){
//     if(arr[i]<grey){
//         grey = arr[i]
//     }
//     i++
// }

// console.log(grey)

// 3. find the second largest element in an array

// const arr = [1,4,8,2,6]
// // const arr2 = [1,4]
// let i = 0
// let second = 0;// 4 < 6
// let grey = 0  //4 <8
// while(i<arr.length){ 

//     if(arr[i]>grey){ //
//         second = grey
//         grey = arr[i]
        
//     }
//     if(arr[i]>second && arr[i]<grey){
//         second = arr[i]
//     }

//     i++
// }

// console.log(second)

// 4. find the second smallest element in an array

// const arr = [1,4,2,6,8]
// let i = 0
// let secMin = Number.MAX_VALUE //2
// let min = Number.MAX_VALUE  //1  
// while(i<arr.length){
//     if(arr[i]<min ){
    
//         min = arr[i]   

//     }
//     // if(arr[i]>grey){
//     //     min = arr[i]
//     // }
//     if(arr[i]>min && arr[i]<secMin){ 
//         secMin = arr[i]

//     }

//     i++
// }

// console.log(secMin)


// 5. find the sum of all elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// sum = 0;
// while(i<arr.length){
    
//         sum += arr[i]
    
//     i++
// }

// console.log(sum)


// 6. find the average of all elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// sum = 0;
// while(i<arr.length){
    
//         sum += arr[i]
    
//     i++
// }
// avg = sum/arr.length
// console.log(avg)


// 7. find the sum of all even elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// count = 0;
// while(i<arr.length){
//     if(arr[i]%2===0){
//         count += arr[i]
//     }
//     i++
// }

// console.log(count)

// 8. find the sum of all odd elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// count = 0;
// while(i<arr.length){
//     if(arr[i]%2!=0){
//         count += arr[i]
//     }
//     i++
// }

// console.log(count)

// 9. find the number of even elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// count = 0;
// while(i<arr.length){
//     if(arr[i]%2===0){
//         count++
//     }
//     i++
// }

// console.log(count)

// 10. find the number of odd elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// count = 0;
// while(i<arr.length){
//     if(arr[i]%2!=0){
//         count++
//     }
//     i++
// }

// console.log(count)