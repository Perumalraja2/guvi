let sum = [1,2,3,4,5,6,7,8,9]
let add = (sum)=>
{
let total = 0;
for(let value of sum)
{
    total= total + value;
} 
    return total;
}
console.log(add(sum));
