let array = ["nayanthara","trisha","anushka","ramba"] 
let result = (array)=>{
let final=[];
for(let key in array)
{
  let array1=(array[key].charAt(0).toUpperCase()+array[key].substr(1))
  final.push(array1)
}return final
} 
console.log(result(array))