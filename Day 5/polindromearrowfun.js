let array6 =["malayalam","mama","dad","11","hello"]
var pal =[];
let pal_me = (array6)=>
{ 
for(i=0;i<array6.length;i++)

{
if((array6[i].split("").join())===(array6[i].split("").reverse().join()))
{
var result = array6[i]
pal.push(result)
}

} return pal;
}
console.log(pal_me(array6))