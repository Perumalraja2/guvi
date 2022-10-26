//Palindrome

// anonymous function

 let array6 =["malayalam","mama","dad","11","hello"]
 var pal =[];
 let pal_me = function(array6)
 { 
 for(i=0;i<array6.length;i++)

 {
 if((array6[i].split("").join())===(array6[i].split("").reverse().join()))
 {
 var result = array6[i]
 pal.push(result)
 }

 } console.log(pal)
 }
 pal_me(array6);
    
 // IIFE function    
    

 (function(array6)
 { 
 var pal =[];
 for(i=0;i<array6.length;i++)
 {
 if((array6[i].split("").join())===(array6[i].split("").reverse().join()))
 {
 var result = array6[i]
 pal.push(result)
 }
 } console.log(pal)
 })
 (["appa","mama","amma","athai","hello","1331","1452"])

