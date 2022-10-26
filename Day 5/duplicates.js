// Duplicates

// anonymous function

var arr = [1, "car", "bike","car", 1, "bus","bus"];
let Duplicates=function(arr)
{
console.log([...new Set(arr)])
}
Duplicates(arr);


// IIFE FUCTION

(function(arr)
{
console.log([...new Set(arr)])
})
([1, "car", "bike","car", 1, "bus","bus"])
