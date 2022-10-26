// print odd numbers

// anonymous function

let array = [1,2,3,4,5,6,7,8,9]

let oddNumber = function (array){
var result = array.filter(element=>element%2!=0)
    console.log(result)
    
}
oddNumber(array);

//IIFE function

(function (array1){
var result = array1.filter(element=>element%2!=0)
    console.log(result)
    
})
([1,2,3,4,5,6,7,8,9])


