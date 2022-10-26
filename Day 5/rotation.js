//Rotation of array 

// anonymous function  

 let array = [1,2,3,4,5]  
 let result= function(array){
 let k=3    
 for (i=0;i<=k;i++)
 {
   array.unshift(array[array.length-1])
   array.pop()
   console.log(array)
 }
 }
result(array);


//IIFE function


 (function(array5){
 let k=4;
 for (i=0;i<=k;i++)
 {
   array5.unshift(array5[array5.length-1])
   array5.pop()
   console.log(array5)
 }
 })
 ([1,2,3,4,5])
