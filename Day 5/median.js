// median

// anonymous function

 let arr1=[4,5,22,65,7,41,]
 let arr2=[6,9,1,30,25,51]
 let result = function(arr1,arr2){
 let con = arr1.concat(arr2)
 con.sort((x,y)=>(x-y))
 let med = con.length/2
 let total=0; 
 for(let key in con)
 {
  if((key==med)||(key==(med-1)))
  {
     total=total+con[key]; 
    
  }   
 }
 console.log(Math.ceil(total/2))
 }
 result(arr1,arr2)

 // IIFE function 
 
 (function(arr1,arr2){
    let con = arr1.concat(arr2)
    con.sort((x,y)=>(x-y))
    let med = con.length/2
    let total=0; 
    for(let key in con)
    {
     if((key==med)||(key==(med-1)))
     {
        total=total+con[key]; 
        
     }   
    }
    console.log(Math.ceil(total/2))
    })
    ([4,5,22,65,7,41,],[6,9,1,30,25,51])
    
    