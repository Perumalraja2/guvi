// // sum of numbers

// // anonymous function

 let sum = [1,2,3,4,5,6,7,8,9]
 let add = function(sum){
 let total = 0;
 for(let value of sum)
 {
     total= total + value;
 } 
     return total;
 }
 console.log(add(sum));

 //IIFE function

 (function(sum){
 let total = 0;
 for(let value of sum)
 {
    total= total + value;
 } 
   console.log(total);
 })
 ([1,2,3,4,5,6,7,8,9])
