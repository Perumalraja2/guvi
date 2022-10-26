// title_cap    

// anonymous function

let array = ["nayanthara","trisha","anushka","ramba"] 
let result = function(array){
let final=[];
for(let key in array)
{
  let array1=(array[key].charAt(0).toUpperCase()+array[key].substr(1))
  final.push(array1)
}console.log (final)
} 
result(array)



 //IIFE function
 
(function(array){
let final=[];
for(let key in array)
{
  let array1=(array[key].charAt(0).toUpperCase()+array[key].substr(1))
  final.push(array1)
}console.log (final)
})
(["nayanthara","trisha","anushka","ramba"]) 
